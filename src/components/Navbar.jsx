import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {RxCross1} from 'react-icons/rx'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false); // Initialize menu as false

  // Add an event listener to track screen width changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // For screens wider than 768px, show the menu
        setMenu(true);
      } else {
        // For screens 768px and below, hide the menu initially
        setMenu(false);
      }
    };

    // Initial check
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenu = () => {
    // Toggle the menu state
    setMenu(!menu);
    console.log("click")
  };
  const closeMenu = () => {
    // Close the menu by setting menu state to false
    if (window.innerWidth <= 768) {
      setMenu(false);
    }
  };

  const links= [
    {
      id:1, 
      url:'/', 
      title:'Home', 
    },
    {
      id:2, 
      url:'/aboutme', 
      title:'About Me', 
    },
    {
      id:3, 
      url:'/skills', 
      title:'Skills', 
    },
    {
      id:4, 
      url:'/experience', 
      title:'Experience', 
    },
    {
      id:5, 
      url:'/projects', 
      title:'Projects', 
    },
    {
      id:6, 
      url:'/certifications', 
      title:'Certifications', 
    },
    {
      id:7, 
      url:'/contactme', 
      title:'Contact Me', 
    },

  ]

  return (
    <div className='w-full h-full dark'>
 <div className="w-10/12 m-auto dark flex flex-row justify-between items-center py-6 px-2 md:px-8">
      <Link onClick={() => closeMenu()} className='z-30' to="/"> <div className="font-semibold text-2xl " style={{ userSelect: 'none' }}>Ranjit Kalita</div></Link>

      {window.innerWidth <= 768 && (
  <div className="md:hidden z-30" onClick={() => handleMenu()}>
    {menu ? (
      <RxCross1 style={{ fontSize: '24px' }} />
    ) : (
      <GiHamburgerMenu style={{ fontSize: '24px' }} />
    )}
  </div>
)}

      {/* Conditional rendering based on the menu state */}
      {menu && (
        <div className=" dark z-20 absolute w-full md:w-auto  left-0 top-0 pt-28 p-10 md:relative md:p-0">
          
          <ul className="flex flex-col gap-6 md:flex-row">
          {links.map((link)=>( <Link key={link.id} to={link.url} onClick={() => closeMenu()}> 
            <li className="py-1 font-medium text-sm border-b-transparent border-b-4 hover:border-b-4 hover:border-b-white transition">
              {link.title}
            </li>
            </Link>))}
            
          </ul>
        </div>
      )}

      
    </div>
    </div>
   
  );
};

export default Navbar;

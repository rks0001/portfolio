import React from 'react';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Section4 from '../sections/Section4';
import Section5 from '../sections/Section5';
import Section6 from '../sections/Section6';
import Section7 from '../sections/Section7';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const Homepage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='dark w-full h-full relative'>
      <div className="fixed bottom-10 right-6">
        <BsFillArrowUpCircleFill onClick={scrollToTop} size={24} color='white' />
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default Homepage;

import React from 'react'
import logo1 from '../images/logo1.svg'
import {LuFileDown} from 'react-icons/lu'

const Section1 = () => {
  return (
    <div className='dark w-full  min-h-[80vh] md:h-full flex items-center'>
        <div className='w-full md:w-10/12 h-full mx-auto px-10 py-10 md:py-20'>
            <div className='flex flex-col md:flex-row items-center '>
                <div className='flex-1 flex-col justify-center mx-auto' >
                <div className='font-bold text-2xl pt-1' style={{ userSelect: 'none' }}>Hello I'm</div>
                <div className="relative font-bold text-[8vh] md:text-[9vh] leading-none pt-1 text-transparent bg-clip-text bg-cover bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-800 tracking-normal md:tracking-normal " style={{ backgroundImage: "linear-gradient(135deg, #6355d5 3%, #5429cf 40%, #491ad9 70%)" }}>
  Ranjit Kalita
</div>

                <div className='font-bold text-2xl pt-1' style={{ userSelect: 'none' }}>Frontend Developer</div>
                <div className='font-semibold text-sm ' style={{ userSelect: 'none' }}>  &#123; javascript, reactjs, redux, nextjs &#125;</div>
                <button className='bg-[#5429cf] py-3 px-6 rounded-md my-3 text-lg font-semibold flex items-center gap-2'><a className='flex items-center gap-2' href="https://drive.google.com/file/d/1OPgXeNpo8ccqtX8iK3fn6kEhmcn670rI/view?usp=sharing" target="_blank" rel="noreferrer">Resume <LuFileDown color='white'/></a></button>
                
                </div>
                <div className='hidden  flex-1 md:flex items-center justify-center mx-auto px-10' style={{ userSelect: 'none' }}>
                    <img  className='w-120 h-120' src={logo1} alt="logo1"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1
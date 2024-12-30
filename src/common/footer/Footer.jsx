import React from 'react'
import logo from '../../images/logo.png';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div className='w-full h-44 bg-[#181818] border-t border-t-[#ff8700] flex justify-between  '>
      <div className='w-1/4 h-40 pt-6 pb-3 pl-12 flex justify-center'>
        <div className='w-[73%] flex flex-col justify-center h-32 gap-3 '>
          <h1 className='text-[#b17b3e]  text-xl font-semibold'>Social Links</h1>
          <div className='flex flex-col w-[90%] justify-start items-start gap-2'>
          <div className='w-full flex gap-1'>
            <Icon icon="ri:github-fill" fontSize={25} style={{ color: '#816b40' }} />
            <p className='text-white'>
              <a href="https://github.com/Aliareya">
                https://github.com/Aliareya
              </a>
            </p>
          </div>
          <span className='flex gap-1 justify-center items-center'>
            <Icon icon="jam:linkedin-circle" fontSize={25} style={{ color: '#816b40' }} />
            <p className='text-white'>
              <a href="https://www.linkedin.com/in/alireza-ebrahimi-605161306/">
                alireza-ebrahimi-605161306
              </a>
            </p>
          </span>
          <span className='flex gap-1 justify-center items-center'>
            <Icon icon="uil:telegram" fontSize={25} style={{ color: '#816b40' }} />
            <p className='text-white'>
              <a href="tg://resolve?domain=Aliareya2023">
                @Aliareya2023
              </a>
            </p>
          </span>
          </div>
        </div>
      </div>
      <div className='w-1/4 h-40 flex flex-col gap-1 items-center pt-4'>
        <div className='w-1/2 h-16 flex flex-col'>
          <img src={logo} alt="" />
        </div>
        <span className='flex items-center flex-col'>
          <p className='text-md text-[#d1d1d1] font-semibold'>Wordpress and Front-End Devoloper</p>
          <p className='text-md text-[#d1d1d1] font-normal'><b className='text-xl pr-1 font-normal'>©</b>2024 Alireza Ebrahimi. All Rights Reserved.</p>
          <p className='text-md text-[#d1d1d1] font-semibold'>Published At : 2024/12/30 </p>
        </span>
      </div>
      <div className='w-1/4 h-40 pt-6 flex justify-center'>
        <div className='w-[70%] flex flex-col justify-center h-32 gap-3 '>
          <h1 className='text-[#b17b3e]  text-xl font-semibold'>Contact Us</h1>
          <div className='flex flex-col w-[90%] justify-start items-start gap-2'>
          <div className='w-full flex gap-1'>
            <Icon icon="ic:outline-email" fontSize={25} style={{ color: '#816b40' }} />
            <p className='text-white'>alirezaarya456@gmail.com</p>
          </div>
          <span className='flex gap-1 justify-center items-center'>
            <Icon icon="line-md:phone" fontSize={25} style={{ color: '#816b40' }} />
            <p className='text-white'>+93783376973</p>
          </span>
          <span className='flex gap-1 justify-center items-center'>
            <Icon icon="ic:round-whatsapp" fontSize={25} style={{ color: '#816b40' }} />
            <p className='text-white'>+93783376973</p>
          </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
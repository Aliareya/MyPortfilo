import React from 'react';
import Backgrounng from '../images/background.png';
import myimage from '../images/ali.jpg';
import { Icon } from '@iconify/react';

function Home() {
  return (
    <>
    <div className="flex justify-center  w-full h-[665px] bg-black bg-cover bg-center" style={{ backgroundImage: `url(${Backgrounng})` }}>
      <div className='w-1/2 h-[630px]  flex justify-center items-center mt-8 flex-col'>
        <div className="w-[290px] h-[290px] bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: `url(${myimage})` }}></div>
        <div className='w-full '>
          <h1 className='text-6xl font-bold text-[#d1d1d1] text-center pt-8 '>Hi, i am <span className='text-[#ff6d2e]'>Alireza Ebrahimi</span> </h1>
          <p className="text-center text-white text-[22px] font-medium leading-[25px] font-sans mt-3">
            <span className="text-[#ff6d2e] text-[25px] mt-3">WordPress </span> and
            <span className="text-[#ff6d2e] text-[25px]"> Front-End</span> Developer Specializing In Creating
            <p className="text-[#d1d1d1] text-[25px] pt-4"> Dynamic User-Friendly Websites With a Focus on </p>
            <p className="text-[#d1d1d1] text-[25px] pt-3"> Functionality </p>
          </p>
        </div>
        <div className='w-full h-24 flex justify-center items-center gap-5 '>
         <Icon icon="icon-park-outline:github" className='cursor-pointer' fontSize={40}  style={{color: '#816b40'}} />
         <Icon icon="tabler:brand-linkedin-filled" className='cursor-pointer' fontSize={40}  style={{color: '#816b40'}} />
         <Icon icon="gravity-ui:logo-facebook" className='cursor-pointer' fontSize={40}  style={{color: '#816b40'}} />
        </div>
      </div>
    </div>
      {/* <div className='w-full h-96 bg-black'></div> */}
    </>
  );
}

export default Home;

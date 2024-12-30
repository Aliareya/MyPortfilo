import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Icon } from '@iconify/react';
import Menu from './Menu';
import CV from '../../../Ali_cv.pdf'
function Header() {
  const [number, setNumber] = useState(0);

  const downloadCV = () => {
    const url = CV; 
    const filename = 'Alireza_CV.pdf';

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then(blob => {
        const downloadLink = document.createElement('a');
        const objectURL = URL.createObjectURL(blob);
        downloadLink.href = objectURL;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(objectURL);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const loaddownload = () => {
    setNumber(1);
    setTimeout(() => {
      downloadCV();
      setNumber(2);
      setTimeout(() => {
        setNumber(0);
      }, 1000);
    }, 2000);
  };

  return (
    <div className='w-full h-28 bg-[#181818] border-b-[#ff8700] border-b flex sticky top-0 '>
      <div className='w-1/4 flex justify-center items-center'>
        <div className='w-1/2 h-14 ml-10'>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <Menu />
      <div className='w-1/4 flex justify-center items-center'>
        <button onClick={loaddownload} className={`border-${number === 2 ? '[green]' : '[#ff8700]'} py-1 px-3 border rounded-xl text-[#c9c8c6]`}>
          <span className='font-sans font-semibold text-xl flex justify-center items-center gap-1'>
            Download CV
            <Icon className='header-icon'
              icon={number === 0 ? "line-md:download-outline-loop" :
                number === 1 ? "line-md:downloading-loop" : "line-md:check-all"}
              style={{ color: number === 2 ? "#46ff2e" : "#ffbb29", fontSize: '30px' }}
            />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Header
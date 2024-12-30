import React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname)
    const [menu, setmenu] = useState([
        { title: 'Home', icone: null  , navigate : '/'},
        { title: 'About', icone: null , navigate : '/about'},
        { title: 'Resume', icone: null , navigate : '/resome'},
        { title: 'Contact Us', icone: null , navigate : '/contact'},
        { title: '|', icone: null , navigate :null},
        { title: '93783376973', icone: 'line-md:phone-call-loop', navigate : null }
    ])
    return (
        <div className='w-1/2 flex items-center justify-end gap-9 pr-2 '>
            {menu.map((value, index) => {
                return(
                <li key={index} className='text-[#d1d1d1] list-none cursor-pointer'>
                    <span onClick={()=>navigate(value.navigate)}
                     className={`${location.pathname === value.navigate && 'border-b border-spacing-5 rounded-b-md px-1 border-[#ff8700]'} font-sans font-semibold text-xl flex justify-center items-center gap-x-0.5`}>
                        <Icon icon={value.icone} fontSize={29} style={{ color: '#ff8700', paddingTop: '8px' }} />
                        {value.title}
                    </span>
                </li>
                )})}
        </div>
    )
}

export default Menu
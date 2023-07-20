import React, { Component, useState } from 'react';
import {BsSunFill} from "react-icons/bs";
import {BiMenu} from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
const NavBar =()=>{
  const[openMenu , setOpenMenu]= useState(false);
  const handleMenu=()=>{
    setOpenMenu(!openMenu);
  }
    return (
      <nav className='flex items-center justify-center'>
        <div className='flex items-center'> 
            <div className='text-20 font-extrabold mr-2'>NerdCard</div>
            <BsSunFill size={"24px"} color='#e9c46a' className='cursor-pointer'/>
        </div>
        <ul className="ml-auto text-16 font-semibold">
          {openMenu ? (
            <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
          ) : (
            <BiMenu size={"24px"} className='cursor-pointer' onClick={handleMenu}/>
          )}
          {openMenu &&(
            <div className='absolute right-8 bg-white text-black p-8 text-center text-13'>
              <li className="font-semibold">Features</li>
              <li className="font-semibold">Menu</li>
              <li className="font-semibold">Story</li>
              <li className="font-semibold">Contact</li>
            </div>
          )}
        </ul>
      </nav>
    );
}
export default NavBar;
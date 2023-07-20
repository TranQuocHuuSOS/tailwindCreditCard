import React, { Component, useState } from 'react';
import {BsSunFill} from "react-icons/bs";
import {FaMoon} from "react-icons/fa";
import {BiMenu} from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from '../../useDarkMode';
const NavBar =(props)=>{
  const {isMobile}=props;
  const[openMenu , setOpenMenu]= useState(false);
  const [isDarkMode, toggleDarkMode]= useDarkMode();
  const handleMenu=()=>{
    setOpenMenu(!openMenu);
  }
    return (
      <nav className='flex items-center justify-center '>
        <div className='flex items-center'> 
            <div className='text-20 font-extrabold mr-2 '>NerdCard</div>

            {isDarkMode ? (
               <BsSunFill size={"24px"} color='#e9c46a' className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)}/>
            ):(
              <FaMoon size={"24px"} color='#e9c46a' className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)}/>
            )}
           
        </div>
        <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
          {openMenu && isMobile ? (
            <MdOutlineClose size={"24px"} className="cursor-pointer" onClick={handleMenu}/>
          ) : !openMenu && isMobile? (
            <BiMenu size={"24px"} className='cursor-pointer' onClick={handleMenu}/>
          ):(
            <>
              <li className="transition-all duration-500 font-semibold hover:bg-purple-700 hover:text-white w-full"><a href="">Features</a></li>
              <li className="transition-all duration-500 font-semibold hover:bg-purple-700  hover:text-white w-full"><a href="">Menu</a></li>
              <li className="transition-all duration-500 font-semibold hover:bg-purple-700  hover:text-white w-full"><a href="">Story</a></li>
              <li className="transition-all duration-500 font-semibold hover:bg-purple-700  hover:text-white w-full"><a href="">Contact</a></li>
            </>
          )}
          {openMenu &&(
            <div className='absolute right-8 bg-white text-black p-8 text-center text-13'>
              <li className="font-semibold hover:bg-purple-700 hover:text-white w-full"><a href="">Features</a></li>
              <li className="font-semibold hover:bg-purple-700  hover:text-white w-full"><a href="">Menu</a></li>
              <li className="font-semibold hover:bg-purple-700  hover:text-white w-full"><a href="">Story</a></li>
              <li className="font-semibold hover:bg-purple-700  hover:text-white w-full"><a href="">Contact</a></li>
            </div>
          )}
        </ul>
      </nav>
    );
}
export default NavBar;
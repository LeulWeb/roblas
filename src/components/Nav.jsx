import React from 'react';
import '../components/Nav.css';
import logo from '../assets/logo.png';
import './nav.css'

const Nav = () => {
  return (
    <div className='h-[10vh] w-full fixed top-0 z-50 text-black bg-white '>
      <div className=' w-10/12 mx-auto flex items-center justify-between z-50  py-3'>
        <div className='w-[10vw] md:w-[12vw]'>
          <a href="#home">
          <img src={logo} alt="" />
          </a>
        </div>
        <div className='flex'>
          <span className='flex md:hidden'> <i className='fa-solid fa-bars'></i> </span>
          <ul className='hidden md:flex  space-x-5'>
            <li className='list-none cursor-pointer hover:text-[#74A926]'><a href="#product">Products</a></li>
            <li className='list-none cursor-pointer hover:text-[#53C7EF]'>Features</li>
            <li className='list-none cursor-pointer hover:text-[#74A926]'>About Us</li>
            <li className='list-none cursor-pointer hover:text-[#53C7EF]'>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

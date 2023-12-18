import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import menu from '/public/menu.svg'


import { useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function logout() {
    localStorage.clear();
    navigate("/signup");
  }
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  return (
    <header className="sticky top-0 z-10 bg-white w-full ">
      <div className="bg-white">
        <div className="flex justify-between mx-auto py-0 mr-2 ml-2">
          <div className="mt-6 ">
            <Link to={'/'} className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              <span className="font-bold text-xl">TourMyPak</span>
            </Link>
          </div>
          <div>

          </div>

          <nav className="hidden md:flex space-x-8 font-semibold my-6 ">
            <div className='flex mr-8 -mt-1'>
              {/* <img src={profileicon} alt='profileicon' className='h-[45px] w-[45px] rounded-full'/> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6b3729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
              <p className='mt-2 ml-1'>Talha</p> */}
            </div>
            {localStorage.getItem('user') ? <>
            {/* <Link to="/" className='mt-1'>
              About Us
            </Link>
              <Link to="/" className='mt-1'>
                Contact
              </Link>
              <Link to='/add-package'className='mt-1' >
                Add Package
              </Link>
              <Link to='/package-list'className='mt-1' >
                Package List
              </Link>
              <Link to='/image-upload'className='mt-1' >
                Image Upload
              </Link> */}
              <Link to='/travelguidelisting' className='mt-2 '>
                Book Travel Guide

              </Link>
               <Link to='/' className='flex gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6b3729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>

               <span className='mt-1'>  {"( " +user ? user.name : '' + " )"} </span>
               </Link>
              <Link to="/signup"className='mt-1 flex' onClick={() => logout()}>
            

               <span> Logout  </span></Link>
              
            </> : <><Link to='/login'className='mt-1 ' >

            <span className='mt-1'> Login</span>
            </Link>
              <Link to='/signup'className='mt-1 ' >

              <span className='mt-1'> Signup</span>
              </Link></>}





          </nav>

          {/* Side Menu Button for Small Screens */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <img src={menu} alt='menu image' />

            {/* <Menu className="h-6 w-6" /> */}
          </button>
        </div>

        {/* Side Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-8 space-y-4 absolute top-20 left-[100px] right-0 shadow-2xl rounded-xl justify-center">
            <div className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6b3729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
              <p className='mt-2 ml-1'>Talha</p>
            </div>
           

            {localStorage.getItem('user') ? <>
            {/* <Link to="/" className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800">
              About Us
            </Link>
              <Link to="/" className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800">
                Contact
              </Link>
              <Link to='/add-package'className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800" >
                Add Package
              </Link>
              <Link to='/package-list'className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800" >
                Package List
              </Link>
              <Link to='/image-upload'className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800" >
                Image Upload
              </Link> */}
              <Link to="/signup"className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800" onClick={() => logout()}>Logout {"( " + user ? user.name : '' + " )"}</Link>
            </> : <><Link to='/login'className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800" >
              Login
            </Link>
              <Link to='/signup'className="block px-4 py-2  hover:bg-secondarycolor rounded-md hover:text-white text-gray-800" >
                Signup
              </Link></>}






          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
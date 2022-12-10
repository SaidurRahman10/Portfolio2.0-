import React, { useContext } from 'react';
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { HomeIcon, UserCircleIcon, DocumentTextIcon, ServerStackIcon, IdentificationIcon,Square3Stack3DIcon  } from '@heroicons/react/24/solid'


const Header = () => {
    const [openNav, setOpenNav] = useState(false);

     
     
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

 
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10 border-0 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/' className="flex items-center hover:text-lg duration-300 transform bg-slate-600 text-white px-3 rounded-md py-2 font-bold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... ">
      <HomeIcon className='w-5 h-6 mr-1'></HomeIcon>  Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
         <Link to='/blog'  className="flex items-center hover:text-lg duration-300 transform bg-slate-600 text-white px-3 rounded-md py-2 font-bold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
         <UserCircleIcon className='w-5 h-6 mr-1'></UserCircleIcon>   About
        </Link>
      </Typography>
    

      <>
       <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='myreview'  className="flex items-center hover:text-lg duration-300 transform bg-slate-600 text-white px-3 rounded-md py-2 font-bold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <DocumentTextIcon className='w-5 h-6 mr-1'></DocumentTextIcon>   Resume
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/addService'  className="flex items-center hover:text-lg duration-300 transform bg-slate-600 text-white px-3 rounded-md py-2 font-bold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <ServerStackIcon className='w-5 h-6 mr-1'></ServerStackIcon>  Works
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/addService'  className="flex items-center hover:text-lg duration-300 transform bg-slate-600 text-white px-3 rounded-md py-2 font-bold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <Square3Stack3DIcon className='w-5 h-6 mr-1'></Square3Stack3DIcon>  Blogs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/addService'  className="flex items-center hover:text-lg duration-300 transform bg-slate-600 text-white px-3 rounded-md py-2 font-bold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... ">
        <IdentificationIcon className='w-5 h-6 mr-1'></IdentificationIcon>   Contact
        </Link>
      </Typography>
     
      </>
  
     
    </ul>
  );
 
  return (
    <Navbar className="mx-auto  py-2 px-4 lg:px-8 lg:py-4 bg-transparent border-0">
      <div className="container mx-auto flex items-center justify-end gap-20  text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
       <Link to='/'>
       <img  src="" alt="" />
       </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex gap-6">
           
          
           
          </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
      
      </MobileNav>
    </Navbar>
  );
}

export default Header;
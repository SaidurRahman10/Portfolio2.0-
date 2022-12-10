import React from 'react';
import { FaFacebook , FaTwitter, FaLinkedin, FaGithub , FaDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import myImg from '../../img/11.jpeg'


const HeroSection = () => {
   
    return (
        <div className=' mt-12 text-white'>
            <div className='flex justify-center'>
            <div>
                <img className='h-60 w-2/2 rounded-full' src={myImg} alt="" />
            </div>
            </div>
                <div className='mt-4 flex justify-center'>
                    <div>
                    <h1 className='font-bold text-3xl uppercase text-center'>   <Typewriter
                       loop={20}
                      cursor
                      cursorStyle='_'
                     words={['SRS', 'Saidur Rahman', 'Saidur', ' Saidur Rahman']}
                    /></h1>
                 
                   
                    <p className='text-sm text-center text-slate-400 mt-2'>MERN Stack Web Developer </p>

                    <div className='mt-4 flex gap-10'>
                    <a href="https://www.facebook.com/SRS.Sabbir.70/" target="_blank"><FaFacebook className='h-8 w-8 text-blue-500'></FaFacebook></a>   
                    <a href="https://github.com/SaidurRahman10" target="_blank"> <FaGithub className='h-8 w-8 text-white'></FaGithub></a>
                      <a href="https://www.linkedin.com/in/saidur-rahman-sabbir-73289b215/" target="_blank">  <FaLinkedin className='h-8 w-8 text-'></FaLinkedin></a>
                     <a href="https://twitter.com/Rahman10Saidur" target="_blank"><FaTwitter className='h-8 w-8 text-sky-600'></FaTwitter></a>
                       
                    </div>
                    <a href='https://drive.google.com/file/d/1DWQKv0UlKnv5cxr5qVVEClJ-XlYb-YNV/view?usp=sharing' target="_blank">
                        <button className='px-5 py-2 rounded-full mx-auto flex gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... mt-10 '>   <FaDownload className='h-5 w-5 text-white '></FaDownload> 
                      Download Resume</button>
                    </a>
                    </div>
                </div>
   
        </div>
    );
};

export default HeroSection;
import React, { useEffect, useState } from 'react';
import { FcCdLogo } from 'react-icons/fc';
import {  useLoaderData } from "react-router-dom";
import bgBanner from '../../img/100.png'
import Fade from 'react-reveal/Fade';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaGithub, FaNetworkWired, FaRegPaperPlane } from 'react-icons/fa';


const DetailPage = () => {
    const Alldata = useLoaderData()
     const {name, img , description, img1, img2, img3, date,githubLink, liveLink} = Alldata;

   
    return (
        <div className='  min-h-screen bg-black bg-opacity-40 p-10'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

         <div className='mt-5'>
         <Carousel>
                <div>
                    <img className='rounded-xl' src={img1} alt="" />
                    
                </div>
                <div>
                    <img className='rounded-xl' src={img2} alt="" />
                    
                </div>
                <div>
                    <img className='rounded-xl' src={img3} alt="" />
                    
                </div>
            </Carousel>
         </div>


          

            <div className=' w-full h-auto border rounded-3xl p-8 hover:bg-white text-white hover:text-black duration-300 transform hover:p-16'>

                <h1 className='text-center text-2xl underline font-bold '>About Project</h1>

        <h1 className='p-10 font-bold text-lg '>{description}</h1>
</div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
            <div className='w-full h-auto border rounded-3xl p-8 hover:p-12 duration-300 transform hover:bg-white text-white hover:text-black'>
                <p>Publish Data:  {date}</p>
            <h1 className=' text-2xl  font-bold mt-4'>Project Name : Fast Resale</h1>
            <h1 className='text-2xl mt-3 font-bold flex gap-5'>Code Link:  <span><a href={githubLink}><FaGithub className='h-8 w-8'></FaGithub></a></span>
            
            </h1>
            <h1 className='text-2xl mt-3 font-bold flex gap-5'>Website Link:  <span><a href={liveLink}><FaRegPaperPlane  className='h-8 w-8'></FaRegPaperPlane></a></span>
            
            </h1>

        

</div>
</div>

            
        </div>
    );
};

export default DetailPage;
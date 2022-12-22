import React, { useEffect, useState } from 'react';
import {  useLoaderData } from "react-router-dom";

import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaGithub, FaNetworkWired, FaRegPaperPlane } from 'react-icons/fa';
import HeaderForDetailPage from '../Navbar/HeaderForDetailPage';
import { FcApproval, FcDatabase, FcServices } from "react-icons/fc";


const DetailPage = () => {
    const Alldata = useLoaderData()
     const {name, img , title1,title2,title3,title4,title5, tech6, tech1,tech2,tech3,tech4, img1, img2, img3, date,githubLink, liveLink} = Alldata;

   
    return (
        <div className='bg-gradient-to-r from-pink-400 via-cyan-900 to-teal-500 '>
            <HeaderForDetailPage></HeaderForDetailPage>
        <div className='  min-h-screen  p-10'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <Bounce top>
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
</Bounce>

          

            <div className=' w-full h-auto border rounded-3xl p-8 hover:bg-white text-white hover:text-black  duration-300 transform hover:p-16'>

              <div>
              <div className='flex justify-between'>
                <Fade top>

              <h1 className='text-start text-3xl mb-3 font-bold '>{name}</h1>
              <p>Publish Data:  {date}</p>
                </Fade>
              </div>

              <div className='flex justify-evenly'>
               <Fade top>
              <a className='border px-5 pb-2 rounded-2xl transform duration-300 hover:bg-black hover:text-white'  href={githubLink}>  <div className='text-md mt-3 font-bold flex gap-2'>Code Link  <span><FaGithub className='h-6 w-8'></FaGithub></span>
            </div></a>
               
             
            <a className='border px-5 pb-2 rounded-2xl transform duration-300 hover:bg-black hover:text-white' href={liveLink}> <div className='text-md mt-3 font-bold flex gap-2'>Website Link  <span><FaRegPaperPlane  className='h-6 w-8'></FaRegPaperPlane></span>          
            </div></a>
               </Fade>


              </div>
             <Bounce left>
             <h1 className=' font-bold text-sm my-5 flex gap-3'> <span><FcApproval className='h-5 w-5'></FcApproval></span>  {title1}</h1>
              <h1 className=' font-bold text-sm my-5 flex gap-3'><span><FcApproval className='h-5 w-5'></FcApproval></span>  {title2}</h1>
              <h1 className=' font-bold text-sm my-5 flex gap-3'><span><FcApproval className='h-5 w-5'></FcApproval></span>  {title3}</h1>
              <h1 className=' font-bold text-sm my-5 flex gap-3'> <span><FcApproval className='h-5 w-5'></FcApproval></span>  {title4}</h1>
              <h1 className=' font-bold text-sm my-5 flex gap-3'> <span><FcApproval className='h-5 w-5'></FcApproval></span> {title5}</h1>
             </Bounce>
              </div>



              <div className='mt-12'>
                <Bounce>

              <h1 className='text-start text-2xl  font-bold flex gap-2'><span className='mt-1'> <FcDatabase></FcDatabase>  </span> Technology</h1>
              <h1 className=' font-bold text-md my-5 flex gap-3'> <span ><FcServices className='h-6 w-6'></FcServices></span> {tech1}</h1>
              <h1 className=' font-bold text-md my-5 flex gap-3'> <span ><FcServices className='h-6 w-6'></FcServices></span> {tech2}</h1>
              <h1 className=' font-bold text-md my-5 flex gap-3'> <span ><FcServices className='h-6 w-6'></FcServices></span> {tech3}</h1>
              <h1 className=' font-bold text-md my-5 flex gap-3'> <span ><FcServices className='h-6 w-6'></FcServices></span> {tech4}</h1>
              <h1 className=' font-bold text-md my-5 flex gap-3'> <span ><FcServices className='h-6 w-6'></FcServices></span> {tech6}</h1>
                </Bounce>
              </div>
</div>

            </div>
           

</div>
        </div>
    );
};

export default DetailPage;
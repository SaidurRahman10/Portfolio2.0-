import React from 'react';
import img from '../../img/fa.jpg'
import {  FaPhone, FaLocationArrow, FaEnvelope, FaCalendar } from 'react-icons/fa';
import { Zoom , Fade} from 'react-reveal';


const AboutMe = () => {

    return (
        <div id='about'  className='mt-52 text-white lg:mx-40 bg-black bg-opacity-50 rounded-2xl shadow-2xl p-5'>
         



            <div className='mx-auto grid  grid-cols-1 lg:grid-cols-2 place-items-center'>
                <div className='mt-28'>
                <div>
                <h1 className='text-5xl font-bold flex gap-2'>About Me <hr  className="my-4   w-48 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  rounded border-0 md:my-10 dark:bg-gray-700"></hr> </h1>
                <div>
                    
                </div>
            </div>
        <Fade>

             <img className='h-96 w-auto rounded-3xl' src={img} alt="" />
        </Fade>
           
                </div>
                <div className='mt-48'>
               
             
                <h1 className='text-2xl font-bold'>Who am i?</h1>
            <p className='text-slate-300 mt-2'> I'm Saidur Rahman, a MERN Stack Web Developer. Web design is my profession. I have 3 years of experience in web Design & 1 years of experience in MERN Stack. A Web Developer with experience in web development using MERN Stack technologies MongoDB, Express, React & Node.js with a passion to learn and improve. My special power is I can easily improve myself with new technology. My hobby is Coding. I have always loved coding and my dream is to one day become one of the best programmers in the world.</p>
               
            <Zoom left>
               <div className='mt-12'>
                <h1 className='text-xl font-bold'>Personal Info</h1>

                <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5  '>

                    <div className='flex gap-3'>
                        <div><FaPhone className=' h-5 w-5  text-red-500 '></FaPhone></div>
                        <div className=''>
                         <p className='text-xs text-slate-400'>Phone</p>
                        <p className='text-sm'>+8801798515747</p>
                        </div>
                    </div>



                    <div className='flex gap-3 '>
                        <div><FaLocationArrow className=' h-5 w-5  text-sky-500 '></FaLocationArrow></div>
                        <div className=''>
                         <p className='text-xs text-slate-400'>Location</p>
                        <p className='text-sm'>Feni, Bangladesh</p>
                        </div>
                    </div>




                    <div className='flex gap-3'>
                        <div><FaEnvelope className=' h-5 w-5 text-teal-500 '></FaEnvelope></div>
                        <div className=''>
                         <p className='text-xs text-slate-400'>Email</p>
                        <p className='text-sm'>saidurrahman1473@...</p>
                        </div>
                    </div>




                    <div className='flex gap-3'>
                    
         
                        <div><FaCalendar className=' h-5 w-5  text-orange-500'></FaCalendar></div>
    
                        <div className=''>
                         <p className='text-xs text-slate-400'>Birthday</p>
                        <p className='text-sm'>January 3, 2003</p>
                        </div>
                    </div>



                </div>
               </div>
               </Zoom>
               
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
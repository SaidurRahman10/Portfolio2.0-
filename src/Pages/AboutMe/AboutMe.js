import React from 'react';
import img from '../../img/11.jpeg'


const AboutMe = () => {

    return (
        <div  className='mt-52 text-white mx-40 bg-black bg-opacity-75 rounded-2xl shadow-2xl p-16'>
         



            <div className='mx-auto grid grid-cols-2'>
                <div className='mt-28'>
                <div>
                <h1 className='text-5xl font-bold flex gap-2'>About Me <hr  className="my-4   w-48 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  rounded border-0 md:my-10 dark:bg-gray-700"></hr> </h1>
                <div>
                    
                </div>
            </div>
            <h1 className='text-2xl font-bold'>Who am i?</h1>
            <p className='text-slate-300'> I'm Saidur Rahman, a MERN Stack Web Developer. Web design is my profession. I have 3 years of experience in web Design. A Web Developer with experience in web development using MERN Stack technologies MongoDB, Express, React & Node.js with a passion to learn and improve. My special power is I can easily improve myself with new technology. I will ensure 100% quality work...I’m currently available for work.</p>
                </div>
                <div>
               
             
             <img src={img} alt="" />
              
               
               
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
import React from 'react';
import './Resume.css'
import { FaBook , FaWpforms , FaAward} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'


const Resume = () => {
    
    return (
        <div id='resume'  className='mt-52 text-white lg:mx-40 bg-black bg-opacity-50 rounded-2xl shadow-2xl p-16'>

            <div>
                <h1 className='lg:text-5xl font-bold flex text-3xl'><Typewriter
                       loop={20}
                      cursor
                      cursorStyle='_'
                     words={['Re', 'Resu', 'Resume', 'Resume']}
                    /><hr  className="my-4 w-40 md:w-48 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  rounded border-0 md:my-10 dark:bg-gray-700"></hr> </h1>               
                </div>



            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>


                {/* Education */}
                <div>
                 
                   <h1 className='flex gap-2 text-lg font-bold'><FaBook className='w-5 h-5 text-sky-500 mt-1' /> Education</h1>
                    <div >


                        <div className='border border-slate-800 mt-4 p-5'>
                            <h1 className='text-slate-500 text-sm'>2019 - 2023</h1>
                             <h1 className='text-lg'>Diploma in Computer Science & Technology</h1>
                             <h1 className='text-slate-500 tex'>Feni Computer Institute, Bangladesh</h1>
                        </div>



                        <div className='border border-slate-800 mt-6 p-5'>
                            <h1 className='text-slate-500 text-sm'>2017 - 2019</h1>
                             <h1 className='text-lg'>Secondary School Certificate</h1>
                             <h1 className='text-slate-500 tex'>Feni Technical School & College</h1>
                        </div>
                    </div>
                </div>



{/* Experience */}
<div>
                 
                 <h1 className='flex gap-2 text-lg font-bold'><FaWpforms className='w-5 h-5 text-red-500 mt-1' /> Experience</h1>
                  <div >


                      <div className='border border-slate-800 mt-4 p-5'>
                          <h1 className='text-slate-500 text-sm'>2022 - 2023</h1>
                           <h1 className='text-lg'>Front-End Development</h1>
                           <h1 className='text-slate-500 tex'>Programming Hero</h1>
                      </div>



                      <div className='border border-slate-800 mt-6 p-5'>
                          <h1 className='text-slate-500 text-sm'>2019 - 2020</h1>
                           <h1 className='text-lg'>Responsive Web Design</h1>
                           <h1 className='text-slate-500 tex'>Twoinsoft Technology</h1>
                      </div>


                      <div className='border border-slate-800 mt-6 p-5'>
                          <h1 className='text-slate-500 text-sm'>2018 - 2019</h1>
                           <h1 className='text-lg'>WordPress</h1>
                           <h1 className='text-slate-500 tex'>Online Youtube | CodeWithHarry</h1>
                      </div>
                  </div>
              </div>



              {/* Award */}
              <div>
                 
                 <h1 className='flex gap-2 text-lg font-bold'><FaAward className='w-5 h-5 text-teal-500 mt-1' /> Award</h1>
                  <div >


                      <div className='border border-slate-800 mt-4 p-5'>
                          <h1 className='text-slate-500 text-sm'>2020 - 2021</h1>
                           <h1 className='text-lg'>Web Design Contest</h1>
                           <h1 className='text-slate-500 tex'>Twoinsoft Technology, Feni</h1>
                      </div>



                      <div className='border border-slate-800 mt-6 p-5'>
                          <h1 className='text-slate-500 text-sm'>2021- 2022</h1>
                           <h1 className='text-lg'>Freelancing Award</h1>
                           <h1 className='text-slate-500 tex'>Twoinsoft Technology, Feni</h1>
                      </div>


                      <div className='border border-slate-800 mt-6 p-5'>
                          <h1 className='text-slate-500 text-sm'>2016- 2017</h1>
                           <h1 className='text-lg'>Scout award</h1>
                           <h1 className='text-slate-500 tex'>Holy Crescent School, Feni</h1>
                      </div>

                  </div>
              </div>  
            </div>


        {/* Working Skills and Knowledged */}
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-20 gap-36'>

        <div className=''>
            <h1 className='font-bold text-2xl'>Working Skills</h1>

            <div className='mt-8'>
              
                <div class="skill-bars text-black">
    <div class="bar">
      <div class="info">
        <span>HTML &  CSS</span>
      </div>
      <div class="progress-line html">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Tailwind CSS</span>
      </div>
      <div class="progress-line css">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>JavaScript</span>
      </div>
      <div class="progress-line jquery">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>React. js</span>
      </div>
      <div class="progress-line python">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>MongoDB</span>
      </div>
      <div class="progress-line mysql">
        <span></span>
      </div>
    </div>
    <div class="bar">
      <div class="info">
        <span>Graphic Design</span>
      </div>
      <div class="progress-line gd">
        <span></span>
      </div>
    </div>
  </div>

            </div>

        </div>




        <div className='text-white'>
        <h1 className='font-bold text-2xl '>Knowledged</h1>
        <div className='mt-8 flex flex-wrap gap-4'>

        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Front-End Development</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>JavaScript</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Tailwind CSS</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Express. js</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Responsive Web Design</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>React. Js</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Node. js</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>MongoDB</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>C Programming</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>WordPress</h1>
       
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Problem Solving</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Bootstrap</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Logo Making</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Canva</h1>
        <h1 className='text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-full'>Graphic Design</h1>
        </div>
        </div>
        </div>



            </div>
       
    );
};

export default Resume;
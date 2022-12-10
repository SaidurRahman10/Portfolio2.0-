import React from 'react';
import { FaBook , FaWpforms , FaAward} from 'react-icons/fa';


const Resume = () => {
    return (
        <div  className='mt-52 text-white mx-40 bg-black bg-opacity-50 rounded-2xl shadow-2xl p-16'>

            <div>
                <h1 className='text-5xl font-bold flex gap-2 '>Resume<hr  className="my-4   w-48 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  rounded border-0 md:my-10 dark:bg-gray-700"></hr> </h1>               
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





            </div>
       
    );
};

export default Resume;
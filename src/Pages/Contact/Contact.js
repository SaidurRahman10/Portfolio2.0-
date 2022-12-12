import React from 'react';
import { FcCallback , FcInvite, FcLandscape } from "react-icons/fc";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const Contact = () => {
    return (
        <div id='contact'  className='mt-52 mx-5 text-white lg:mx-15 bg-black bg-opacity-50 rounded-2xl shadow-2xl p-5'>
             <div>
                <h1 className='md:text-5xl font-bold flex gap-2  text-3xl my-4'>Contact<hr  className="my-4   w-40 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  rounded border-0 md:my-10 dark:bg-gray-700"></hr> </h1>               
                </div>


                <div className='grid grid-cols-1 lg:grid-cols-5  gap-28'>
           
            <Fade left>

                    <div className='col-span-3 md:col-span-2'>
                            <div className='flex gap-4 border p-5 bg-slate-800 bg-opacity-60 border-slate-300 shadow-xl rounded-xl'>
                                    <FcCallback className='w-8 h-8'></FcCallback>
                                    <div>

                                    <h1 className='text-sm'>Phone : </h1>
                                    <h1 className='text-sm'>+8801798515747</h1> 
                                    <h1 className='text-sm'>+8801798210590</h1>
                                    </div>
                            </div>
                   



                    <div className='my-5'>
                            <div className='flex gap-4 border p-5 bg-slate-800 bg-opacity-60 border-slate-300 shadow-xl rounded-xl'>
                                    <FcInvite className='md:w-8 md:h-8'></FcInvite>
                                    <div>

                                    <h1 className='text-sm'>Email: </h1>
                                    <h1 className='text-sm'>saidurrahman1473@gmail.com</h1> 
                                    <h1 className='text-sm'>abusalekarman@gmail.com</h1>
                                    </div>
                            </div>
                    </div>



                    <div>
                            <div className='flex gap-4 border p-5 bg-slate-800 bg-opacity-60 border-slate-300 shadow-xl rounded-xl'>
                                    <FcLandscape className='w-8 h-8'></FcLandscape>
                                    <div>

                                    <h1 className='text-sm'>Location: </h1>
                                    <h1 className='text-sm'>SSK Road Mohipal, Feni, Bangladesh</h1> 
                                    <h1 className='text-sm'>Kazi bari, Temuhani, Feni</h1>
                                    </div>
                            </div>
                    </div>
                </div>
            </Fade>
            



        <Bounce right>

          <div className='col-span-3 lg:flex lg:justify-center'>

                        <form action="https://getform.io/f/240d00ac-ba1d-41e4-afce-093fa053294a" method="POST" enctype="multipart/form-data">
                            <div className='flex flex-col '>

                        <input type="name" placeholder="Name" className="input input-bordered input-secondary lg:w-[30rem] md:w-96  bg-opacity-30" name='name'/>
                        
                        <input type="email" placeholder="E-mail" className="input input-bordered input-primary lg:w-[30rem] md:w-96  my-5 bg-opacity-30" name='email' />
                      
                        <textarea className="textarea textarea-secondary lg:w-[30rem] md:w-96  h-36 bg-opacity-30" placeholder="Message" name='message'></textarea>
                          
                            </div>
                        <button className='px-5 py-2 rounded-xl  flex gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... mt-10 hover:bg-gradient-to-l duration-300 transform hover:text-lg' type='Submit'>Send Message</button>
                        </form>
                    </div>
        </Bounce>
                </div>
        </div>
    );
};

export default Contact;
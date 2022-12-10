import React from 'react';
import project1 from  '../../img/1.png'
import project2 from  '../../img/2.png'
import project3 from  '../../img/3.png'
import project4 from  '../../img/4.png'
import project5 from  '../../img/5.jpg'
import project6 from  '../../img/6.jpg'



const ProjectSection = () => {
    return (
        <div id='project'  className='mt-52 text-white lg:mx-40 bg-black bg-opacity-50 rounded-2xl shadow-2xl p-16'>
               <div>
                <h1 className='md:text-5xl font-bold flex gap-2  text-2xl my-4'>Projects<hr  className="my-4  w-40 md:w-48  h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  rounded border-0 md:my-10 dark:bg-gray-700"></hr> </h1>               
                </div>
            

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>

                <div className="card w-96 glass">
  <figure><img src={project4} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Tourest</h2>
    <p>This website made for tour Lovers. In this website we can easily booked any place for tour.</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">More</button>
    </div>
  </div>
</div>
                <div className="card w-96 glass">
  <figure><img src={project3} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">MERN. State</h2>
    <p>In this website we can buy any course from any Technology. This website is single page friendly website. This website special feature is without admin permissi no one can in this website</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">More</button>
    </div>
  </div>
</div>
                <div className="card w-96 glass">
  <figure><img src={project2} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Fast Resale</h2>
    <p>This website can add car and sell car. Every bayer can buy car and every seller can sell car from this website.</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">More</button>
    </div>
  </div>
</div>
                <div className="card w-96 glass">
  <figure><img src={project6} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Portfolio Website</h2>
    <p>This is Portfolio website. Few days ago i create this website for learning Purpose. This website have some unique features</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">More</button>
    </div>
  </div>
</div>
                <div className="card w-96 glass">
  <figure><img src={project5} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">E-commerce Website</h2>
    <p>This website is E-commerce Website.Product Selling Website. In this website there are thousand of product in there. Bayer can easily buy any product from there.</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">More</button>
    </div>
  </div>
</div>
                <div className="card w-96 glass">
  <figure><img src={project1} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Digital Learning</h2>
    <p>In this website i add some unique Technology. The Technology help student for learn more and then they can go for language course also from this website</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">More</button>
    </div>
  </div>
</div>
            </div>
            








        </div>
    );
};

export default ProjectSection;
import React, { useEffect, useState } from "react";
// import project1 from  '../../img/1.png'
// import project2 from  '../../img/2.png'
// import project3 from  '../../img/3.png'
// import project4 from  '../../img/4.png'
// import project5 from  '../../img/5.jpg'
// import project6 from  '../../img/6.jpg'
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import DetailPage from "../DetailPage/DetailPage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaGithub, FaRegPaperPlane } from "react-icons/fa";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://portfolio-server-one-self.vercel.app/allproject")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);

  return (
    <div
      id="project"
      className="mt-52 text-white lg:mx-10 bg-black bg-opacity-50 rounded-2xl shadow-2xl p-5"
    >
      <div>
        <h1 className="md:text-5xl font-bold flex gap-2  text-2xl my-4">
          Projects
          <hr className="my-4  w-40 md:w-48  h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  rounded border-0 md:my-10 dark:bg-gray-700"></hr>{" "}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((proj) => (
          <section key={proj._id}>
            <Fade right>
              <div className="card w-96 glass">
                <figure>
                  <img src={proj.img} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{proj.name}</h2>
                  <p>
                    {proj.description}
                  </p>
                  <div className='flex justify-between'>
               <Fade top>
              <a className='border px-5 pb-2 rounded-2xl '  href={proj.githubLink}>  <div className='text-xs mt-3 font-bold flex gap-2'>Code Link  <span><FaGithub className='h-4 w-5'></FaGithub></span>
            </div></a>
               
             
            <a className='border px-5 pb-2 rounded-2xl' href={proj.liveLink}> <div className='text-xs mt-3 font-bold flex gap-2'>Website Link  <span><FaRegPaperPlane  className='h-4 w-6'></FaRegPaperPlane></span>          
            </div></a>
               </Fade>


              </div>
                </div>
                  <div className="card-actions w-full rounded-xl">
                    <Link to={`/${proj._id}`} className="btn hover:bg-gradient-to-l bg-gradient-to-r from-pink-400 via-cyan-900 to-teal-500 w-full font-bold">
                      Explore More
                    </Link>
                  </div>
              </div>
            </Fade>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;

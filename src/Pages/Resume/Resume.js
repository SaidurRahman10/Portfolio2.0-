import React from "react";
import "./Resume.css";
import { FaBook, FaWpforms, FaAward } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";

const Resume = () => {
  return (
    <div
      id="resume"
      className="mt-52 text-white  lg:mx-10 bg-black bg-opacity-50 rounded-2xl shadow-2xl p-5"
    >
      <div>
        <h1 className="lg:text-5xl font-bold flex text-3xl">
          <Typewriter
            loop={20}
            cursor
            cursorStyle="_"
            words={["Re", "Resu", "Resume", "Resume"]}
          />
          <hr className="my-4 w-40 md:w-48 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  rounded border-0 md:my-10 dark:bg-gray-700"></hr>{" "}
        </h1>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {/* Education */}
        <Bounce left>
          <div>
            <h1 className="flex gap-2 text-lg font-bold">
              <FaBook className="w-5 h-5 text-sky-500 mt-1" /> Education
            </h1>
            <div>
              <div className="border border-slate-600 mt-4 p-5 text-slate-300 hover:bg-white hover:text-black duration-300 transform hover:rounded-2xl hover:font-bold">
                <h1 className=" text-sm">2019 - 2023</h1>
                <h1 className="text-lg">
                  Diploma in Computer Science & Technology
                </h1>
                <h1 className=" tex">Feni Computer Institute, Bangladesh</h1>
              </div>

              <div className="border border-slate-600 mt-6 p-5 text-slate-300 hover:bg-white hover:text-black duration-300 transform hover:rounded-2xl hover:font-bold">
                <h1 className=" text-sm">2017 - 2019</h1>
                <h1 className="text-lg">Secondary School Certificate</h1>
                <h1 className=" tex">Feni Technical School & College</h1>
              </div>
            </div>
          </div>
        </Bounce>

        {/* Experience */}
        <Bounce top>
          <div>
            <h1 className="flex gap-2 text-lg font-bold">
              <FaWpforms className="w-5 h-5 text-red-500 mt-1" /> Experience
            </h1>
            <div>
              <div className="border border-slate-600 mt-4 p-5 text-slate-300 hover:bg-white hover:text-black duration-300 transform hover:rounded-2xl hover:font-bold">
                <h1 className=" text-sm">2022 - 2023</h1>
                <h1 className="text-lg">Front-End Development</h1>
                <h1 className=" tex">Programming Hero</h1>
              </div>

              <div className="border border-slate-600 mt-6 p-5 text-slate-300 hover:bg-white hover:text-black duration-300 transform hover:rounded-2xl hover:font-bold">
                <h1 className=" text-sm">2019 - 2020</h1>
                <h1 className="text-lg">Responsive Web Design</h1>
                <h1 className=" tex">Twoinsoft Technology</h1>
              </div>

              <div className="border border-slate-600 mt-6 p-5 text-slate-300 hover:bg-white hover:text-black duration-300 transform hover:rounded-2xl hover:font-bold">
                <h1 className=" text-sm">2018 - 2019</h1>
                <h1 className="text-lg">WordPress</h1>
                <h1 className=" tex">Online Youtube | CodeWithHarry</h1>
              </div>
            </div>
          </div>
        </Bounce>

        {/* Award */}
        <Bounce bottom>
          <div>
            <h1 className="flex gap-2 text-lg font-bold">
              <FaAward className="w-5 h-5 text-teal-500 mt-1" /> Award
            </h1>
            <div>
              <div className="border border-slate-600 mt-4 p-5 text-slate-300 hover:bg-white hover:text-black duration-300 transform hover:rounded-2xl hover:font-bold">
                <h1 className=" text-sm">2020 - 2021</h1>
                <h1 className="text-lg">Web Design Contest</h1>
                <h1 className=" tex">Twoinsoft Technology, Feni</h1>
              </div>

              <div className="border border-slate-600 mt-6 p-5 text-slate-300 hover:bg-white hover:text-black duration-300 transform hover:rounded-2xl hover:font-bold">
                <h1 className=" text-sm">2021- 2022</h1>
                <h1 className="text-lg">Freelancing Award</h1>
                <h1 className=" tex">Twoinsoft Technology, Feni</h1>
              </div>

              <div className="border border-slate-600 mt-6 p-5 text-slate-300 hover:bg-white hover:text-black duration-300 transform hover:rounded-2xl hover:font-bold">
                <h1 className=" text-sm">2016- 2017</h1>
                <h1 className="text-lg">Scout award</h1>
                <h1 className=" tex">Holy Crescent School, Feni</h1>
              </div>
            </div>
          </div>
        </Bounce>
      </div>

      {/* Working Skills and Knowledged */}
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-20 place-items-center">
        <Bounce top>
          <div className="col-span-3">
            <h1 className="font-bold text-2xl">Working Skills</h1>

            <div className="mt-8">
              <div className="skill-bars text-black">
                <div className="bar">
                  <div className="info">
                    <span>HTML & CSS</span>
                  </div>
                  <div className="progress-line html">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="progress-line css">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>JavaScript</span>
                  </div>
                  <div className="progress-line jquery">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>React. js</span>
                  </div>
                  <div className="progress-line python">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>MongoDB</span>
                  </div>
                  <div className="progress-line mysql">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span>Graphic Design</span>
                  </div>
                  <div className="progress-line gd">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Bounce>

        <div className="text-white col-span-2 ">
          <h1 className="font-bold text-2xl ">Knowledged</h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Bounce left>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Front-End Development
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                JavaScript
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Tailwind CSS
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Express. js
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Responsive Web Design
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                React. Js
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Node. js
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                MongoDB
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                C Programming
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                WordPress
              </h1>

              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Problem Solving
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Bootstrap
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Logo Making
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Canva
              </h1>
              <h1 className="text-md text-slate-400 bg-slate-800 px-3 py-1 rounded-lg hover:bg-white hover:text-black hover:font-bold hover:rounded-full">
                Graphic Design
              </h1>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

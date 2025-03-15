import React from "react";
import me from '../images/ali.jpg'

const About = () => {
  return (
    <div className="w-full h-[665px] bg-black pt-12  flex flex-col items-center">
      <div className="w-full flex gap-16 items-center justify-center">
        {/* Photo Section */}
        <div
          className="w-1/3 h-[550px] bg-bottom bg-no-repeat bg-cover rounded-2xl opacity-90"
          style={{ backgroundImage: `url(${me})` }}
        ></div>

        {/* Info Section */}
        <div className="w-2/5 h-[550px] text-white flex flex-col justify-center pl-2">
          <h1 className="text-[40px] pb-3">Hi There! I'm Alireza Ebrahimi</h1>
          <h3 className="text-2xl pb-6 text-orange-500">
            Wordpress and Front-End Developer
          </h3>
          <p className="text-lg font-medium text-gray-400 pb-5">
            I am a Visual Designer with a strong focus on digital branding.
            Visual design seeks to attract, inspire, create desires, and
            motivate people to respond to messages, with a view to making a
            favorable impact.
          </p>

          <ul className="space-y-4">
            <li className="flex">
              <p className="w-[138px] text-lg">Name</p>
              <p className="text-lg flex-1">
                <span className="text-orange-500 pr-3">:</span>Alireza
              </p>
            </li>
            <li className="flex">
              <p className="w-[138px] text-lg">Last Name</p>
              <p className="text-lg flex-1">
                <span className="text-orange-500 pr-3">:</span>Ebrahimi
              </p>
            </li>
            <li className="flex">
              <p className="w-[138px] text-lg">From</p>
              <p className="text-lg flex-1">
                <span className="text-orange-500 pr-3">:</span>Afghanistan /
                Herat
              </p>
            </li>
            <li className="flex">
              <p className="w-[138px] text-lg">Email</p>
              <p className="text-lg flex-1">
                <span className="text-orange-500 pr-3">:</span>
                alirezarya456@gmail.com
              </p>
            </li>
            <li className="flex">
              <p className="w-[138px] text-lg">Job</p>
              <p className="text-lg flex-1">
                <span className="text-orange-500 pr-3">:</span>Web Developer
              </p>
            </li>
            <li className="flex">
              <p className="w-[138px] text-lg">Birthday</p>
              <p className="text-lg flex-1">
                <span className="text-orange-500 pr-3">:</span>May 07, 1990
              </p>
            </li>
          </ul>

          <div>
            <button className="text-lg h-10 bg-orange-500 font-semibold py-2 px-4 rounded-md mt-5">
              Download CV
            </button>
            <span id="resome"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default About;
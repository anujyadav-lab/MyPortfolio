import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import bgpic from "../assets/bgPic.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      name="home"
      id="home"
      // className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      className="h-screen w-full bg-cover bg-no-repeat "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.8)), url(${bgpic})`,
      }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col  w-full space-y-2 md:space-y-4 ">
          <h2 className="text-2xl sm:text-4xl  text-white">
            Hi, my name is{" "}
            <span className="text-blue-500 font-semibold">Anuj Yadav.</span>
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            I'm a{" "}
            <span className="text-blue-500">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                words={["Frontend Developer", "React Developer"]}
              />
            </span>
          </h2>

          <p className="text-gray-500 py-2 max-w-md">
            I have build personal projects such as Friends card, text analyzer and many more on my own. Currently, I am looking
            to work on web application using technologies like React, Javascript,
            etc.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;

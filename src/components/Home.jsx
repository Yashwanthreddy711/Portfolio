import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


import TextSpan from "./Textspan";
import { Link } from "react-scroll";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import Footer from "./Footer";

const Home = () => {

  const title="Yashwanth".split("")
  const desc="I'm a Fullstack Developer.".split("")
  return (
    <>
      <div id='home' className="flex w-full min-h-screen text-white">
        <div className="fixed flex flex-col flex-wrap justify-center invisible w-20 mt-40 h-96 md:visible">
          <a
            href="https://github.com/Yashwanthreddy711"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 mt-10 transition-all duration-100 ease-linear hover:scale-110 hover:text-custom2 pointer "
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://twitter.com/Kyashwanth711"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 mt-10 transition-all duration-100 ease-linear hover:scale-110 hover:text-custom2 pointer "
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/yashwanth-reddy-13144a1bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 mt-10 transition-all duration-100 ease-linear hover:scale-110 hover:text-custom2 pointer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        <div className="max-w-[1000px] md:pl-28 sm:ml-10 md:ml-20 lg:ml-40 flex flex-col  h-full">
          {/* <h1 className="p-4 text-4xl font-bold tracking-wider text-center text-white mt-60 md:text-6xl md:p-10">
            HEY, I'M YASHWANTH
          </h1>

          <h6 className="mt-4 text-lg text-center md:text-2xl">
            I am a frontend web developer specializing in creating beautiful and
          </h6>
          <h6 className="text-lg text-center md:text-2xl">
            intuitive user interfaces for websites and web applications
          </h6> */}
          <p className="mt-48 text-white md:text-2xl">Hi,my name is</p>
          <div className="text-4xl font-bold md:text-7xl">
          {
        title.map((letter,index)=>(
            <TextSpan key={index}>
              {letter ===" "?"\u00A0":letter}
              </TextSpan>
        ))
}
          </div>
          <div className='pb-4 overflow-y-hidden text-4xl font-bold md:text-7xl '>
            {
               desc.map((letter,index)=>(
                <TextSpan key={index}>
                  {letter ===" "?"\u00A0":letter}
                  </TextSpan>
            ))
            }
        </div>
        <p className=' py-4 max-w-[700px] text-lg md:text-2xl'>
        I am a  developer specializing in creating beautiful and
          intuitive user interfaces for websites and web applications
        </p>
          <div>
             <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          >
          
          <button className='relative flex items-center justify-center p-2 px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 rounded-full md:p-4 md:px-12 md:py-4 text-custom2 border-custom2 group'>
            <span className="absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-custom group-hover:translate-x-0">
              <svg 
              className="w-5 h-5" 
              fill="none"
              stroke="currentColor"
                viewBox="0 0 24 24 " 
                xmlns="http://www.w3.org/2000/svg">
              <path 
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3">

              </path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform text-custom2 group-hover:translate-x-full ease">View Work</span>
            <span className="relative invisible sm:text-sm">View Work</span>
          </button>
          </Link>
          </div>
          
        </div>
     
      </div>
      
    </>
  );
};

export default Home;

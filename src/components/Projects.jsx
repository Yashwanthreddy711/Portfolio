import React from 'react'
import Project1 from '../assets/project1.jpg';
import {RiGithubFill } from 'react-icons/ri';
import {FaExternalLinkAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div id="projects" className='w-full h-auto mt-60 bg-custom'>
       <div className='max-w-[1000px] flex flex-col justify-center w-full h-auto p-4 mx-auto'>
       <div className='font-bold flex justify-center tracking-[5px] text-center text-white group overflow-y-hidden  '>
            <p className='relative overflow-y-hidden md:text-3xl sm:text-2xl'>
              PROJECTS
                     </p>
            </div>
            <div className='flex flex-col pl-0 mx-auto mt-20 overflow-y-hidden md:flex-row'>
              <div className='pb-10 ml-10 mr-10'>
                <img className='w-96 overflow-y-hidden md:w-[800px] cursor-pointer first-letter:  border-2 rounded-lg h-60'src={Project1} alt="" />
              </div>
              <div className='pl-10 max-w-[500px]  ' >
                 <p className='text-[#50C9CD] font-bold hover:w-[110%] text-2xl flex pl-5 md:text-4xl overflow-y-hidden '>CRYPTO BOLT</p>
                 <p className='pt-5 pl-5 overflow-y-hidden text-xl text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam porro praesentium ipsa libero, ex dolores fuga obcaecati. Exercitationem, corporis?</p>
                 <div className='flex pt-5 pl-5'>
                   <div className='flex text-2xl text-white'>
                    <RiGithubFill size={30} color='white'/>
                   </div>
                   <div className='flex pl-4 mt-1 text-2xl text-white'>
                    <FaExternalLinkAlt size={20} color='white'/>
                   </div>
                 </div>
              </div>
            </div>
            <div className='flex flex-col pt-10 pl-0 mx-auto mt-10 md:flex-row'>
              <div className='pl-10 max-w-[500px] overflow-y-hidden  ' >
                 <p className='text-[#50C9CD] font-bold text-2xl flex pl-5 md:text-4xl overflow-y-hidden '>CRYPTO BOLT</p>
                 <p className='pt-5 pl-5 overflow-y-hidden text-xl text-gray-400' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam porro praesentium ipsa libero, ex dolores fuga obcaecati. Exercitationem, corporis?</p>
                 <div className='flex pt-5 pl-5'>
                   <div className='flex text-2xl text-white'>
                    <p className='pr-2'>Code</p>
                    <RiGithubFill size={30} color='white'/>
                   </div>
                   <div className='flex pl-4 text-2xl text-white'>
                    <p className='pr-2'>Demo</p>
                    <FaExternalLinkAlt size={20} color='white'/>
                   </div>
                 </div>
              </div>
              <div className='ml-10 mr-10 '>
                <img className='w-96 md:w-[800px] border-2 rounded-lg h-60'src={Project1} alt="" />
              </div>
            </div>
            <div>
             <Link
          to="/moreprojects"
          >
          
          <button className='relative flex items-center justify-center p-2 px-6 py-2 mx-auto mt-16 overflow-hidden font-medium transition duration-300 ease-out border-2 rounded-full md:p-4 md:px-12 md:py-4 text-custom2 border-custom2 group'>
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
            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform text-custom2 group-hover:translate-x-full ease">Other Projects</span>
            <span className="relative invisible sm:text-sm">Other Projects</span>
          </button>
          </Link>
          </div>
       </div>
    </div>
  )
}

export default Projects;
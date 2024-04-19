import React from 'react'
import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project0 from '../assets/project0.jpg';

import {RiGithubFill } from 'react-icons/ri';
import {FaExternalLinkAlt} from 'react-icons/fa';


const Projects = () => {
  return (
    <div id="projects" className='w-full h-auto pt-32 bg-custom'>
       <div className='max-w-[1000px] flex flex-col justify-center w-full h-auto p-4 mx-auto'>
       <div className='font-bold flex justify-center tracking-[5px] text-center text-white group overflow-y-hidden  '>
            <p className='relative overflow-y-hidden md:text-3xl sm:text-2xl'>
              PROJECTS
                     </p>
            </div>
            <div className='flex flex-col w-full gap-5 mx-auto mt-20 overflow-y-hidden md:flex-row'>
              <div className='flex items-center justify-center '>
                <img className='w-full sm:w-80 overflow-y-hidden shadow-lg md:w-[400px] cursor-pointer first-letter:  rounded-lg h-60'src={Project0} alt="Frost style" />
              </div>
              <div className='w-full md:w-[500px] pt-10  ' >
                <div className='flex items-center justify-center'>
                 <p className='text-[#50C9CD] font-bold px-5 text-2xl flex  md:text-2xl overflow-y-hidden '>FROST STYLE</p>
                 </div>
                 <p className='px-5 pt-5 overflow-y-hidden text-lg text-gray-400'> 
                 Frost Style curates an exclusive collection of winter wear for both men and women. From cozy coats to luxurious scarves, our fashion-forward pieces blend warmth with elegance, ensuring you stay chic during the colder months
                  </p>
                 <div className='grid grid-cols-3 gap-2 pt-5 ml-5 sm:grid-cols-4 md:grid-cols-4'>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-4 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px] rounded-md'>MongoDB</h1>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-2 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px]  rounded-md '>Express</h1>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-2 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px]  rounded-md'>Nodejs</h1>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-2 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px]  rounded-md'>React</h1>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-2 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px]  rounded-md'>Rest API</h1>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-2 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px]  rounded-md'>Tailwind CSS</h1>
                      
                     
                 </div>
                 <div className='flex px-5 pt-5 '>
                   <div className='flex text-2xl text-white'>
                    <RiGithubFill className='cursor-pointer ' size={30} color='white' 
                     onClick={() => window.open("https://github.com/Yashwanthreddy711/frost-style", "_blank")}/>
                   </div>
                   <div className='flex pl-4 mt-1 text-2xl text-white'>
                    <FaExternalLinkAlt className='cursor-pointer' size={20} color='white' 
                    onClick={() => window.open("https://frost-style.netlify.app/", "_blank")}/>
                   </div>
                 </div>
              </div>
              
            </div>
            <div className='flex flex-col w-full gap-5 mx-auto mt-20 overflow-y-hidden md:flex-row'>
              <div className='flex items-center justify-center '>
                <img className='w-full sm:w-80 overflow-y-hidden shadow-lg md:w-[400px] cursor-pointer first-letter:  rounded-lg h-60'src={Project1} alt="Crypto dashboard" />
              </div>
              <div className='w-full md:w-[500px] pt-10  ' >
                <div className='flex items-center justify-center'>
                 <p className='text-[#50C9CD] font-bold px-5 text-2xl flex  md:text-2xl overflow-y-hidden '>CRYPTO BOLT</p>
                 </div>
                 <p className='px-5 pt-5 overflow-y-hidden text-lg text-gray-400'> 
                 Crypto Bolt is a dynamic cryptocurrency dashboard that provides real-time data on various digital currencies. Leveraging the CoinGecko API, it offers up-to-the-minute details, trends, and price fluctuations Crypto Bolt presents this information in visually appealing charts, empowering users to make informed investment decisions
                  </p>
                 <div className='grid grid-cols-3 gap-2 pt-5 ml-5 sm:grid-cols-4 
                 +'>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-4 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px] rounded-md'>React</h1>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-2 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px]  rounded-md '>Chart Js</h1>
                      <h1 className='flex items-center justify-center w-40 h-8  p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px]  rounded-md'>Coingecko API</h1>
                       
                 </div>
                 <div className='flex pt-5 pl-5'>
                   <div className='flex text-2xl text-white'>
                    <RiGithubFill className='cursor-pointer ' size={30} color='white' 
                     onClick={() => window.open("https://github.com/Yashwanthreddy711/crypto-bolt", "_blank")}/>
                   </div>
                   <div className='flex pl-4 mt-1 text-2xl text-white'>
                    <FaExternalLinkAlt className='cursor-pointer' size={20} color='white' 
                    onClick={() => window.open("https://crypto-bolt.netlify.app", "_blank")}/>
                   </div>
                 </div>
              </div>
              
            </div>


            <div className='flex flex-col w-full gap-5 mx-auto mt-20 overflow-y-hidden md:flex-row'>
              <div className='flex items-center justify-center '>
                <img className='w-full sm:w-80 overflow-y-hidden shadow-lg md:w-[400px] cursor-pointer first-letter:  rounded-lg h-60'src={Project2} alt="Bank management system " />
              </div>
              <div className='w-full md:w-[500px] pt-10  ' >
                <div className='flex items-center justify-center'>
                 <p className='text-[#50C9CD] font-bold px-5 text-2xl flex  md:text-2xl overflow-y-hidden '>BANK MANAGEMENT SYSTEM</p>
                 </div>
                 <p className='px-5 pt-5 overflow-y-hidden text-lg text-gray-400'> 
                 It is an application to provide banking solutions to the banks to manage customer accounts.Leveraging object-oriented programming (OOP) principles, we’ve implemented essential services such as deposits, withdrawals, fund transfers, fixed deposits, mini statements, and balance checks
                  </p>
                 <div className='grid grid-cols-3 gap-2 pt-5 ml-5 sm:grid-cols-4 
                 +'>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-4 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px] rounded-md'>C++</h1>
                      <h1 className='flex items-center justify-center w-auto h-8 md:p-2 p-2 text-center text-gray-400 border-2 border-[#50C9CD] md:text-[16px] text-[14px]  rounded-md '>OOPS</h1>
                      
                       
                 </div>
                 <div className='flex pt-5 pl-5'>
                   <div className='flex text-2xl text-white'>
                    <RiGithubFill className='cursor-pointer ' size={30} color='white' 
                     onClick={() => window.open("https://github.com/Yashwanthreddy711/Bank-management-system", "_blank")}/>
                   </div>
                   <div className='flex pl-4 mt-1 text-2xl text-white'>
                    <FaExternalLinkAlt className='cursor-pointer' size={20} color='white' 
                    onClick={() => window.open("https://www.youtube.com/watch?v=XqlHcwiDeQo", "_blank")}/>
                   </div>
                 </div>
              </div>
              
            </div>
            
           
           
           
       </div>
    </div>
  )
}

export default Projects;
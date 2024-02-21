import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Cplus from '../assets/c++.png';
import python from '../assets/python.png';
import Nodejs from '../assets/nodejs.png'
import Express from '../assets/express.png'
import MongoDB from '../assets/mongodb.png'
import Mysql from '../assets/mysql.png'
import Redux from '../assets/redux.png'
import Git from '../assets/git.png'
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-auto pt-32 text-gray-300 bg-custom '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='font-bold flex justify-center tracking-[5px] text-center text-white group overflow-y-hidden  '>
            <p className='relative overflow-y-hidden md:text-3xl sm:text-2xl'>
              SKILLS
                     </p>
            </div>

           <div className='grid w-full grid-cols-2 gap-4 py-8 mt-10 text-center sm:grid-cols-4'>
           <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden ' src={Cplus} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div> 
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#0a192f]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={Git} alt="HTML icon" />
                  <p className='my-4'>Git</p>
              </div>
             
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={Nodejs} alt="HTML icon" />
                  <p className='my-4'>NodeJS</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={Express} alt="HTML icon" />
                  <p className='my-4'>Express</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={MongoDB} alt="HTML icon" />
                  <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={Mysql} alt="HTML icon" />
                  <p className='my-4'>Mysql</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={Redux} alt="HTML icon" />
                  <p className='my-4'>Redux</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
import React from 'react';



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
                  <img className='w-20 mx-auto overflow-y-hidden ' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div> 
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#0a192f]  hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="HTML icon" />
                  <p className='my-4'>Git</p>
              </div>
             
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="HTML icon" />
                  <p className='my-4'>NodeJS</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="HTML icon" />
                  <p className='my-4'>Express</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="HTML icon" />
                  <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="HTML icon" />
                  <p className='my-4'>Mysql</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="HTML icon" />
                  <p className='my-4'>Redux</p>
              </div>
              <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto overflow-y-hidden' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
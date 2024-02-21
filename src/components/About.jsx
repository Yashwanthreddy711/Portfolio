import React from 'react'
import { Link } from 'react-scroll'
const About = () => {

  return (
    <div id='about' className="w-full h-auto pt-10 font-inter bg-custom">
          {/* <div className="w-full px-4 md:px-8 lg:px-16"> */}
          <div  className="w-full px-4 md:px-8 lg:px-16 ">

            <div className='font-bold flex justify-center tracking-[5px] text-center text-white group overflow-y-hidden  '>
            <p className='relative overflow-y-hidden md:text-3xl sm:text-2xl'>
              ABOUT ME
                     </p>
            </div>
            <div className="flex flex-col md:flex-row md:pl-28 ">
              <p className="w-full pt-20 ml-4 overflow-y-hidden text-lg text-white md:w-1/2 md:ml-10 md:text-2xl">
              I'm a passionate Fullstack Developer based in India, specializing in the transformative MERN Stack. With expertise in MongoDB, Express.js, React.js, and Node.js, I craft captivating interfaces that propel the success of websites and applications. I'm driven by a fusion of artistry and technical prowess, constantly seeking to expand my skill set and stay at the forefront of industry trends. I thrive in collaborative environments where I can contribute, learn, and grow.If you have a good opportunity that matches my skills <Link
  to="contact"
  activeClass="active"
  spy={true}
  smooth={true}
  offset={-50}
  duration={500} className='overflow-y-hidden border-b-2 border-white border-solid cursor-pointer text-bold'>Contact Me</Link>.

 
              </p>
              <div className='mt-[40px]'>
              <img
                src="../images/yash.jpg"
                alt="pic"
                className="hidden absolute blob mt-[20px] ml-20 overflow-y-hidden rounded-full h-[250px] w-[200px] drop-shadow-2xl md:block"
              />
              </div>
            </div>
          </div>
        </div>
  )
}

export default About
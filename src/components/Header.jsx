import React, { useState } from "react";
import { Link } from "react-scroll";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  const [nav, setnav] = useState(true);
  const handlenav = () => {
    setnav(!nav);
  };

  return (
    <div className="fixed z-50 flex w-full h-24 bg-custom ">
      <div className="flex w-40 h-20 pt-4 pl-4 mt-2 flex-start">
        <img src="../images/logo.png" alt="" />
      </div>
      <ul className="hidden pt-4 ml-auto mr-28 md:flex">
      <Link
  to="home"
  activeClass="active"
  spy={true}
  smooth={true}
  offset={-50}
  duration={500}
  className="relative p-4 mt-2 ml-5 tracking-[1px] text-white cursor-pointer group"
>
  HOME
  <span className="absolute inset-x-0 bottom-6 h-0.5 bg-custom2 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
</Link>


        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="relative p-4 mt-2 ml-5 tracking-[1px] text-white cursor-pointer group"
          >
            ABOUT
            <span className="absolute inset-x-0 bottom-6 h-0.5 bg-custom2 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="relative p-4 mt-2 tracking-[1px] ml-5 text-white cursor-pointer group"
          >
            PROJECTS
            <span className="absolute inset-x-0 bottom-6 h-0.5 bg-custom2 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="relative p-4 mt-2 tracking-[1px] text-white cursor-pointer group"
>
  CONTACT
  <span className="absolute inset-x-0 bottom-6 h-0.5 bg-custom2 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</Link>
        <Link className="relative p-4 mt-2 ml-5 tracking-[1px] text-white cursor-pointer group">
          {" "}
          <a
            href="https://drive.google.com/file/d/1q-8rtwgb-qCjklF7F6iPCwBoJL1UtuoC/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
          <span className="absolute inset-x-0 bottom-6 h-0.5 bg-custom2 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </ul>

      <div
        className={
          !nav
            ? "fixed  h-auto w-[100%] left-0 top-0 border-r bg-custom border-r-gray-900"
            : "fixed left-[-100%]"
        }
      >
        <ul className="flex flex-col mt-20 md:hidden">
          <div
            onClick={handlenav}
            className="fixed right-0 block pr-5 top-[40px] text-white md:hidden"
          >
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="p-4 text-white border-b border-gray-800 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="p-4 text-white border-b border-gray-800 cursor-pointer "
          >
            About
          </Link>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="p-4 text-white border-b border-gray-800 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="p-4 text-white border-b border-gray-800 cursor-pointer"
          >
            Contact
          </Link>
          <Link className="p-4 mt-2 text-white border-b border-gray-800 cursor-pointer">
            {" "}
            <a
              href="https://drive.google.com/file/d/1q-8rtwgb-qCjklF7F6iPCwBoJL1UtuoC/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;

// <div className="fixed z-50 w-full p-5 bg-custom drop-shadow-lg">
//   <nav className="flex items-center justify-between h-auto sm:flex-col ">

// {/* <ul id="nav-links" className={showMediaIcons ? "flex flex-col pt-2 pb-2 z-99  w-full  justify-center mt-20" : "flex ml-auto"}>
/* <ul className={`visible  ${showMediaIcons ? "hidden flex justify-center w-full pt-2 pb-2 mt-20 lg:flex md:ml-auto md:flex-row max-sm:flex-col" : "flex justify-center w-full pt-2 pb-2 mt-20 lg:flex md:ml-auto md:flex md:flex-row max-sm:flex-col"}`}> */
//*/}
// {/* <div className="items-center md:flex md:flex-row sm:flex-col">
//   <div className="flex w-40 h-20 p-3 mt-2 flex-start">
//   <img  src="../images/logo.png" alt="" />
//   </div>
//   <div className="relative ml-auto bg-green-500 sm-mt-30">
//   <ul className={`sm:hidden ${showMediaIcons ? "visible pt-10 bg-red-400 " : "hidden"} flex flex-col items-center md:flex min-sm:flex-col min-sm:mt-20 md:flex-row ml-auto justify-between`}>

//     <HashLink to={"/#home"} className="px-10 mt-2 text-white cursor-pointer">Home</HashLink>
//     <HashLink to={"/#about"} className="px-10 mt-2 text-white cursor-pointer">About</HashLink>
//     <Link to={"/projects"} className="px-10 mt-2 text-white cursor-pointer">Projects</Link>
//     <Link to={"/contact"} className="px-10 mt-2 text-white cursor-pointer">Contact</Link>
//     <div className="flex justify-center px-8 py-2 mt-1 mr-4 font-medium text-center bg-white cursor-pointer text-primary rounded-3xl">
//       <a href="https://drive.google.com/file/d/1q-8rtwgb-qCjklF7F6iPCwBoJL1UtuoC/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>

//     </div>

//   </ul>
//   </div>
// </div>

// /{/* <div className="absolute top-0 right-0 p-3 mt-3 mr-3 text-3xl text-white md:hidden lg:hidden">
//     <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
//       <GiHamburgerMenu />
//     </button>
//   </div>
//       </nav>
//     </div>
//   );
// }; */ ?}

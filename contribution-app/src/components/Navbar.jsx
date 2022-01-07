/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import useDarkMode from "../hook/useDarkMode";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [hamburger, setHamburger] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", () => {
      setHamburger(false);
    });
  });
  return (
    // <header className=' bg-gray-300 text-black body-font'>
    // 	<div className='w-full flex flex-wrap p-3 flex-col md:flex-row items-center'>
    // 		<div className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
    // 			<Link to='/'>
    // 				<img
    // 					src='/hacktoberfest.svg'
    // 					alt=''
    // 					width='50px'
    // 					height='50px'
    // 				/>
    // 				{/* <span className="ml-3 cursor-default text-2xl text-black">
    //         {"HACKTOBERFEST 2K21"}
    //       </span> */}
    // 			</Link>
    // 		</div>

    // 		<div className='bg-white shadow p-4 flex search_bar'>
    // 			<span className='w-auto flex justify-end items-center text-gray-500 p-2'>
    // 				<i className='material-icons text-3xl'></i>
    // 			</span>
    // 			<input
    // 				className='w-full rounded p-2'
    // 				type='text'
    // 				placeholder='Hacktoberfest'
    // 			/>
    // 			<button className='bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4'>
    // 				<p className='font-semibold text-xs'>Search</p>
    // 			</button>
    // 		</div>
    // 		<nav className='md:ml-auto flex flex-wrap justify-center items-center text-lg '>
    // 			<a
    // 				exact
    // 				activeClassName='active_link'
    // 				target='_blank'
    // 				href='https://hacktoberfest.digitalocean.com/'
    // 				className='px-4 py-2 text-black'
    // 			>
    // 				OFFICIAL WEBSITE
    // 			</a>
    // 			<a
    // 				exact
    // 				activeClassName='active_link'
    // 				target='_blank'
    // 				href='https://hacktoberfest.digitalocean.com/profile'
    // 				className=' px-4 py-2 text-black'
    // 			>
    // 				DASHBOARD
    // 			</a>
    // 			<Link to='/about' className='text-black'>
    // 				CONTACT US
    // 			</Link>
    // 			<a
    // 				href='https://github.com/Buddhad/Contribution_Website'
    // 				target='_blank'
    // 				className='px-4 py-2 text-black text-2xl'
    // 			>
    // 				<FaGithub />
    // 			</a>
    // 		</nav>
    // 	</div>
    // </header>

    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content relative dark:bg-black">
      <div className="flex-1 px-2 mx-2">
        <Link to="/">
          <img src="/hacktoberfest.svg" alt="" width="50px" height="50px" />
        </Link>
      </div>

      <div>
        <div
          className={hamburger ? "hidden" : "hamburger text-2xl"}
          onClick={(e) => {
            e.stopPropagation();
            setHamburger(true);
          }}
        >
          <GiHamburgerMenu />
        </div>
        <div
          className={hamburger ? "text-2xl close" : " hidden"}
          onClick={(e) => {
            e.stopPropagation();
            setHamburger(false);
          }}
        >
          <IoMdClose />
        </div>
      </div>

      <div
        className={
          hamburger
            ? "block absolute top-10 mt-6 pt-1 bg-neutral left-0 w-full dark:bg-black"
            : "flex-none hidden px-2 mx-2 lg:flex responsive-nav"
        }
      >
        <div className={hamburger ? "flex flex-col" : "flex items-stretch"}>
          <a
            exact
            activeClassName="active_link"
            href="/"
            className="nav-links btn btn-sm rounded-btn dark:bg-black"
          >
            HOME
          </a>
          <a
            exact
            activeClassName="active_link"
            target="_blank"
            href="https://hacktoberfest.digitalocean.com/"
            className="nav-links btn btn-sm rounded-btn dark:bg-black"
          >
            OFFICIAL WEBSITE
          </a>
          <a
            exact
            activeClassName="active_link"
            target="_blank"
            href="https://hacktoberfest.digitalocean.com/profile"
            className="nav-links btn btn-sm rounded-btn dark:bg-black"
          >
            DASHBOARD
          </a>
          <a className="nav-links btn btn-sm rounded-btn dark:bg-black">
            <Link to="/about">ABOUT</Link>
          </a>
          <a className="nav-links btn btn-sm rounded-btn dark:bg-black">
            <Link to="/contact">CONTACT US</Link>
          </a>
        </div>
      </div>
      <a
        className=" px-4 py-1 btn btn-ghost btn-sm rounded-btn text-2xl"
        href="https://github.com/Buddhad/Contribution_Website"
        target="_blank"
      >
        <FaGithub />
      </a>
      <span onClick={() => setTheme(colorTheme)} className="cursor-pointer">
        {colorTheme === "light" ? (
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        ) : (
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        )}
      </span>
    </div>
  );
};

export default Navbar;

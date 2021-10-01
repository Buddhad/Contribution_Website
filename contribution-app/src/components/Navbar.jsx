/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-green-300 text-black body-font">
      <div className="w-full flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center  text-white mb-4 md:mb-0">
          <span className="ml-3 cursor-default text-2xl text-black">
            {"HACKTOBERFEST 2K21"}
          </span>
        </div>
        <nav className="md:ml-auto flex flex-wrap justify-center items-center text-lg ">
          <a
            exact
            activeClassName="active_link"
            target="_blank"
            href="https://hacktoberfest.digitalocean.com/"
            className="px-4 py-2 text-black"
          >
            OFFICIAL WEBSITE
          </a>
          <a
            exact
            activeClassName="active_link"
            target="_blank"
            href="https://hacktoberfest.digitalocean.com/profile"
            className=" px-4 py-2 text-black"
          >
            DASHBOARD
          </a>
          <a
            href="https://github.com/Buddhad/Contribution_Website"
            target="_blank"
            className="px-4 py-2 text-black text-2xl"
          >
            <FaGithub />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

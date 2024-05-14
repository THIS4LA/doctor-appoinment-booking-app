import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
    path: "https://www.youtube.com/channel/UCY35R_s59985F14l-z_p0-A",
  },
  {
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
    path: "https://github.com/Muhib-Tutorial",
  },
  {
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
    path: "https://www.instagram.com/muhib_tutorial/",
  },
  {
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
    path: "https://www.linkedin.com/in/muhib-tutorial/",
  },
];

const quickLinks01 = [
  {
    path: "/hone",
    display: "Home",
  },
  {
    path: "/aboutus",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-gradient-to-tr from-white via-indigo-100 to-blue-100">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by Thisal Karunarathna all rights
              reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid
              border-[#181A1E] rounded-full flex items-center justify-center
              group hover:bg-primaryColor hover:border-none"
                >{link.icon}</Link>
              ))}
            </div>
          </div>
            {/* Quick Links */}
            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Quick Links
              </h2>

              <ul>
                {quickLinks01.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] text-textColor hover:text-gray-400"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quick Links end */}
            {/* I want Links */}
            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                I want to
              </h2>

              <ul>
                {quickLinks02.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] text-textColor hover:text-gray-400"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* I want Links end */}
            {/* Support Links */}
            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Support
              </h2>

              <ul>
                {quickLinks03.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] text-textColor hover:text-gray-400"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Support Links end */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

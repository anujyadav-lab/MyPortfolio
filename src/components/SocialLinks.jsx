import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/AnujYadav-Resume.pdf";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/anuj-yadav-b043a7202/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      icon: <FaGithub size={30} />,
      name: "Github",
      href: "https://github.com/anujyadav-lab?",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={30} />,
      name: "Mail",
      href: "mailto:ay517328@gmail.com",
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={30} />,
      name: "Resume",
      href: "https://drive.google.com/file/d/1eI6X6_LW3Pd0FuNs7yCpYuv7JhBOLHat/view?usp=sharing",
      // href: { resume },
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, icon, href, style, download, name }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black" +
                " " +
                style
              }
            >
              <a
                href={href}
                file={resume}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {name}
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" lg:hidden">
        <ul className="flex py-20 px-10">
          {links.map(({ id, icon, href, style, download }) => (
            <li
              key={id}
              className={
                "flex  flex-col w-full items-center px-4 hover:rounded-md duration-300 " +
                " " +
                style
              }
            >
              <a
                href={href}
                className="items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;








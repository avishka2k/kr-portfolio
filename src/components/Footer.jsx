import React from "react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div className="pt-[10rem] mb-[5rem] flex flex-col">
      <div className="flex flex-row gap-7 text-2xl md:text-4xl place-content-center">
        <FiGithub className=" cursor-pointer"/>
        <MdOutlineEmail className=" cursor-pointer"/>
        <FiLinkedin className=" cursor-pointer"/>
      </div>
      <p className=" text-center text-[15px] text-gray2 mt-5">
        © 2022 - Kalani
      </p>
    </div>
  );
}

export default Footer;

import React from "react"
import UserImg from '../assets/user.svg'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { FiLinkedin } from 'react-icons/fi'

function Hero() {
  return (
    <div className="w-full h-sc flex flex-col pt-20 justify-between">
        <div className="container px-4 m-auto md:hidden">
            <div className="flex flex-col justify-center w-full py-8">
                <div className="flex flex-row place-content-center items-center">
                <div className="section-header-before mr-3"></div>
                <p className="section-header uppercase tracking-[10px] text-gray2">My Name is</p>
                </div>
                <p className="md:text-6xl text-5xl text-center md:text-left font-bold">Kalani <span className="text-blue">Randika.</span></p>
            </div>
            <div className="m-auto md:w-full w-96">
              <img src={UserImg} alt="Kalani Randika" /> 
            </div>
            <div className="">
                <p className=" py-10 text-center md:text-left max-w-[820px] text-base sm:text-2xl">Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>
                <div className="flex gap-8 place-content-center pb-10">
                <MdOutlineEmail className="h-8 w-8 md:hidden cursor-pointer" />
                <FiGithub className="h-8 w-8 md:hidden cursor-pointer" />
                <FiLinkedin className="h-8 w-8 md:hidden cursor-pointer" />
                </div>
            </div>
        </div>
        <div className="container px-4 m-auto hidden md:flex">
            <div className="flex flex-col justify-center w-full py-8">
                <div className="flex flex-row items-center">
                <div className="section-header-before mr-3"></div>
                <p className="section-header uppercase text-gray2 tracking-[10px]">My Name is</p>
                </div>
                <p className="md:text-6xl text-5xl text-center md:text-left font-bold">Kalani <span className="text-blue">Randika.</span></p>
                <div className="">
                <p className=" py-10 text-center md:text-left max-w-[820px] text-base sm:text-2xl">Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>
                <div className="flex gap-8 pb-10">
                <MdOutlineEmail className="h-8 w-8 cursor-pointer" />
                <FiGithub className="h-8 w-8 cursor-pointer" />
                <FiLinkedin className="h-8 w-8 cursor-pointer" />
                </div>
            </div>
            </div>
            <div className="m-auto md:float-right md:w-full w-96">
              <img src={UserImg} className="float-right" alt="Kalani Randika" /> 
            </div>
        </div>
    </div>
  )
}

export default Hero
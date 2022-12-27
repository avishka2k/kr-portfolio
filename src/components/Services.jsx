import React from "react"
import { RiVipCrownLine } from "react-icons/ri"
import { TbStack, TbWorld } from "react-icons/tb"


function Services() {
    const ServicesContent = [
        {
            "IconUrl": RiVipCrownLine,
            "title": "UI/UX Design",
            "discription": "Turn what you have in mind of a digital product into reality. For any   platform you consider.",
        },
        {
            "IconUrl": TbStack,
            "title": "Application Development",
            "discription": "Standard designing, building, and implementing your applications with   documentation."
        },
        {
            "IconUrl": TbWorld,
            "title": "Web Development",
            "discription": "Create and maintain your websites and also take care of its performance and traffic capacity."
        }
    ];

  return (
    <div className="w-full h-screen flex flex-col justify-between">
        <div className="container px-4 m-auto">
            <div className="flex flex-col w-full py-8">
                <div className="flex flex-row place-content-center pb-2 items-center">
                <div className="section-header-before mr-3"></div>
                <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">Services</p>
                </div>
                <p className="md:text-5xl text-4xl md:pb-20 pb-10 font-semibold text-center">Specialized in</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:justify-between">
                {ServicesContent.map((ServicesContent, index)=>(
                    <div className="flex flex-col gap-3 text-center w-full md:max-w-[20rem] m-auto md:m-0 max-w-[17rem]">
                    <div className="service-icon rounded-xl items-center flex md:w-20 md:h-20 w-16 m-auto h-16 bg-blueOpa">
                    <ServicesContent.IconUrl className="m-auto text-blue text-5xl md:text-6xl"/>
                    </div>
                    <p className="md:text-2xl text-lg font-medium">{ServicesContent.title}</p>
                    <p className=" md:text-xl text-base">{ServicesContent.discription}</p>
                </div> 
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Services
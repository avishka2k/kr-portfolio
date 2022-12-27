import React from "react";
import P1 from "../assets/p1.svg";
import P2 from "../assets/p2.svg";
import P3 from "../assets/p3.svg";
import { IoLinkOutline } from "react-icons/io5";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Work() {
  const ProjectContent = [
    {
      ImgUrl: P1,
      title: "Agency Website.",
      tool: "React.js",
      link: "",
    },
    {
      ImgUrl: P2,
      title: "Dashboard Website.",
      tool: "JavaScript",
      link: "",
    },
    {
      ImgUrl: P3,
      title: "Support Center Website.",
      tool: "Flutter",
      link: "",
    },
    {
      ImgUrl: P3,
      title: "Support Center Website.",
      tool: "Flutter",
      link: "",
    },
    {
      ImgUrl: P2,
      title: "Dashboard Website.",
      tool: "JavaScript",
      link: "",
    },
  ];

  return (
    <div className="w-full flex flex-col pt-10">
      <div className="container px-4 m-auto">
        <div className="flex flex-col justify-center w-full py-8">
          <div className="flex flex-row place-content-center md:place-content-start pb-2 items-center">
            <div className="section-header-before mr-3"></div>
            <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
              my work
            </p>
          </div>
          <p className="md:text-5xl text-4xl font-semibold md:pb-[3rem] text-center md:text-left">
            Featured Projects
          </p>
        </div>
        <div>
          <div className="flex-col grid md:grid-cols-2 xl:grid-cols-4 gap-10 md:flex-row pt-8 md:justify-between">
            {ProjectContent.map((ProjectContent) => (
              <div className="shadow hover:shadow-lg hover:scale-105 rounded-xl w-[20rem] m-auto md:w-full duration-700 flex flex-col relative">
                <img
                  src={ProjectContent.ImgUrl}
                  alt="p1"
                  className="rounded-xl hover:brightness-100 hover:opacity-100 transition-all duration-700 brightness-90 w-full hover:bg-contain opacity-50"
                />
                <div className="flex flex-col absolute  bottom-0 p-4 rounded-b-xl bg-white w-full h-[7rem]">
                  <p className=" text-black font-medium text-lg">
                    {ProjectContent.title}
                  </p>
                  <div className="flex flex-row gap-5 pl-2 pt-3">
                    <p>{ProjectContent.tool}</p>
                    <a
                      href={ProjectContent.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoLinkOutline className="text-2xl cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

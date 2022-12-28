import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Avatar1 from "../assets/testimonials/avatar1.svg";
import Avatar2 from "../assets/testimonials/avatar2.svg";
import Avatar3 from "../assets/testimonials/avatar3.svg";

function Testimonials() {
  const TestimonialContent = [
    {
      avatar: Avatar1,
      text: "The management of our projects was always faced with difficulties, but you handled these well",
      name: "Isabella Bennett",
      company: "Microsoft",
    },
    {
      avatar: Avatar2,
      text: "I’m glad I decided to work with you. The project was delivered on time with all the requirements",
      name: "James Delaney",
      company: "Google",
    },
    {
      avatar: Avatar3,
      text: "We were very pleased to hear how you resolved our website's user interface issues and challenges",
      name: "Amelia Miller",
      company: "IDM",
    },
  ];

  return (
    <div
      id="testimonials"
      className="w-full flex flex-col pt-20 md:h-screen justify-between"
    >
      <div className="container px-4 m-auto">
        <div className="flex flex-col justify-center w-full pb-[7rem]">
          <div className="flex flex-row place-content-center pb-2 items-center">
            <div className="section-header-before mr-3"></div>
            <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
              my clients
            </p>
          </div>
          <p className="md:text-5xl text-4xl font-semibold text-center">
            Testimonials
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-9">
          {TestimonialContent.map((TestimonialContent) => (
            <div className="flex flex-col hover:scale-105 duration-700 cursor-pointer text-center md:max-w-[26rem] max-w-[20rem] m-auto">
              <img
                src={TestimonialContent.avatar}
                alt=""
                className="w-20 rounded-full m-auto mb-5"
              />
              <div className="flex flex-row m-auto items-center gap-2">
                <p className="text-[16px] font-[500]">
                  {TestimonialContent.name}
                </p>
                <div className="rounded-full w-1 h-1 bg-gray2"></div>
                <p className=" text-gray2 text-[13px]">
                  {TestimonialContent.company}
                </p>
              </div>

              <p className="mb-3 relative p-3">
                <RiDoubleQuotesL
                  className="text-gray2 alig w-[20px] absolute left-0 top-0"
                  alt=""
                />
                {TestimonialContent.text}
                <RiDoubleQuotesR
                  className="text-gray2 w-[20px] absolute right-0 bottom-0"
                  alt=""
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

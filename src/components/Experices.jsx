import React from "react";

function Experices() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="container px-4 m-auto">
        <div className="flex flex-col justify-center w-full py-8">
          <div className="flex flex-row place-content-center pb-2 items-center">
            <div className="section-header-before mr-3"></div>
            <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
              career path
            </p>
          </div>
          <p className="md:text-5xl text-4xl font-semibold text-center">
            Work Experices
          </p>
        </div>
        <div className="flex flex-row items-start pt-10 md:m-auto md:max-w-[40rem]">
          <div className="flex flex-col item-end mr-8"></div>
          <div className="flex w-full flex-col m-auto place-content-center gap-6 relative">
            <span className="h-full over top-[10px] left-[7px] absolute w-[2px] bg-gray opacity-40"></span>
            <div className="flex flex-row items-start">
              <div className="flex flex-col mt-2 mr-6">
                <span class="flex h-4 w-4 overflow-hidden">
                  <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-blue opacity-50"></span>
                  <span class="relative inline-flex rounded-full w-[8px] h-[8px] m-auto bg-blue"></span>
                  <span class=" absolute rounded-full w-4 h-4 m-auto bg-blueOpa border-[1px] border-blue"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-lg md:text-xl">
                  Front-end Developer Apple .Inc <span className=" text-gray2 font-normal md:text-sm text-xs italic">(current)</span>
                </p>
                <p className="text-sm md:text-base text-gray2">
                  California, United States
                </p>
                <p className="text-sm md:text-base text-gray2">
                  Nov 2020 - Present · Full-time
                </p>
                <ul className="list-inside ml-3 mt-3 flex gap-1 flex-col">
                  <li className="inline-flex text-md md:p-1 text-gray2">
                    <div className="h-[2px] w-4 mt-3 bg-gray mr-2"></div>
                    <p>
                      Improving overall website performance for mobile users.
                    </p>
                  </li>
                  <li className="inline-flex text-md md:p-1 text-gray2">
                    <div className="h-[2px] w-4 bg-gray mt-3 mr-2"></div>
                    <p>
                      Collaborate with back-end developers and web designers to
                      improve usability
                    </p>
                  </li>
                  <li className="inline-flex text-start md:p-1 text-md text-gray2">
                    <div className="h-[2px] w-4 bg-gray mt-3 mr-2"></div>
                    <p>Add voice search feature for mobile app.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-start">
              <div className="flex flex-col mt-2 mr-6">
                <span class="flex h-4 w-4">
                  <span class="rounded-full w-4 h-4 m-auto bg-gray opacity-60"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-lg md:text-xl">
                  Front-end Developer Apple .Inc
                </p>
                <p className="text-sm md:text-base text-gray2">
                  California, United States
                </p>
                <p className="text-sm md:text-base text-gray2">
                  Nov 2020 - Present · Full-time
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start">
              <div className="flex flex-col mt-2 mr-6">
                <span class="flex h-4 w-4">
                  <span class="rounded-full w-4 h-4 m-auto bg-gray opacity-60"></span>
                </span>
                <span class="flex ml-[2px]">
                  <span class="absolute inline-flex h-[15rem] w-3 rounded-full bg-white"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-lg md:text-xl">
                  Front-end Developer Apple .Inc
                </p>
                <p className="text-sm md:text-base text-gray2">
                  California, United States
                </p>
                <p className="text-sm md:text-base text-gray2">
                  Nov 2020 - Present · Full-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experices;

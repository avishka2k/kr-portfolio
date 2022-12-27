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
        <div className="flex flex-row items-start mt-10">
          <div className="flex flex-col item-end mr-8">
            <div className="rounded-full bg-gray2 w-3 h-3"></div>
          </div>
        <div className="flex w-full flex-col m-auto place-content-center">
          <div className="">
            <p className=" font-medium text-lg">
              Front-end Developer Apple .Inc
            </p>
            <p className="text-sm text-gray2">California, United States</p>
            <p className="text-sm text-gray2">Nov 2020 - Present · Full-time</p>
            {/* <ul className="list-inside ml-5 flex flex-col">
              <li className="inline-flex items-center text-md text-gray2">
                <div className="h-[2px] w-4 bg-gray mr-3"></div> <p>pp</p>
              </li>
              <li className="inline-flex items-center text-md text-gray2">
                <div className="h-[2px] w-4 bg-gray mr-3"></div> <p>pp</p>
              </li>
              <li className="inline-flex items-center text-md text-gray2">
                <div className="h-[2px] w-4 bg-gray mr-3"></div> <p>pp</p>
              </li>
            </ul> */}
          </div>
          <div className="mt-10">
            <p className=" font-medium text-lg">
              Front-end Developer Apple .Inc
            </p>
            <p className="text-sm text-gray2">California, United States</p>
            <p className="text-sm text-gray2">Nov 2020 - Present · Full-time</p>
            {/* <ul className="list-inside ml-5 flex flex-col">
              <li className="inline-flex items-center text-md text-gray2">
                <div className="h-[2px] w-4 bg-gray mr-3"></div> <p>pp</p>
              </li>
              <li className="inline-flex items-center text-md text-gray2">
                <div className="h-[2px] w-4 bg-gray mr-3"></div> <p>pp</p>
              </li>
              <li className="inline-flex items-center text-md text-gray2">
                <div className="h-[2px] w-4 bg-gray mr-3"></div> <p>pp</p>
              </li>
            </ul> */}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Experices;

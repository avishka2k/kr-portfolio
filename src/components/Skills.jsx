import React from "react";

function Skills() {
  return (
    <div
      id="experices"
      className="w-full flex pt-[6rem] md:h-screen flex-col justify-between"
    >
      <div className="container px-4 m-auto">
        <div className="flex flex-col justify-center w-full pb-[7rem]">
          <div className="flex flex-row place-content-center pb-2 items-center">
            <div className="section-header-before mr-3"></div>
            <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
              learning path
            </p>
          </div>
          <p className="md:text-5xl text-4xl font-semibold text-center">
            Education & Skills
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

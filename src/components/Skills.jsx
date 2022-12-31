import React from "react";
import ProgressBar from "./ProgressBar";
import SkillsData from "../owner_data/owner_data.json";

function Skills() {
  return (
    <>
      {SkillsData &&
        SkillsData.map((skills_data) => {
          return (
            <div
              key={skills_data.id}
              id="skills"
              className="max-w-[85vw] m-auto flex pt-[6rem] md:h-screen flex-col justify-between"
            >
              <div className="container px-4 m-auto">
                <div className="flex flex-col justify-center w-full pb-[7rem]">
                  <div className="flex flex-row place-content-center pb-2 items-center">
                    <div className="w-[1rem] h-[2px] bg-gray mr-3"></div>
                    <p className="section-header uppercase tracking-[10px] md:text-1xl text-sm my-text-gray">
                      learning path
                    </p>
                  </div>
                  <p className="md:text-5xl text-4xl font-semibold text-center">
                    Education & Skills
                  </p>
                </div>
                <div className="flex flex-col justify-around lg:flex-row-reverse lg:max-w-none md:max-w-[30rem] max-w-[20rem] m-auto">
                  <div className="flex flex-col md:w-[40rem] max-w-[40rem] sm:max-w-[30rem]">
                    <p className="text-center lg:text-left">
                      {skills_data.skill_discription}
                    </p>
                    <p className="pt-7 text-lg font-[500]">Skills</p>
                    {skills_data.my_skills.map((skills__data) => {
                      return (
                        <div className="flex-flex-col pt-2">
                          <ProgressBar
                            skillName={skills__data.skill}
                            percentage={`${skills__data.percentage}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col">
                    <p className="lg:pt-0 pt-7 pb-3 text-lg font-[500]">
                      Education
                    </p>
                    <div className="flex flex-row items-start">
                      <div className="flex flex-col item-end"></div>
                      <div className="flex w-full flex-col m-auto place-content-center gap-6 relative">
                        <span className="h-full over top-[10px] left-[7px] absolute w-[2px] bg-gray opacity-40"></span>
                        <>
                          {skills_data.education.map((skill_education) => {
                            return (
                              <div className="flex flex-row items-start">
                                {skill_education.id === 1 ? (
                                  <div className="flex flex-col mt-2 mr-6">
                                    <span class="flex h-4 w-4 overflow-hidden">
                                      <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-blue opacity-50"></span>
                                      <span class=" absolute rounded-full w-4 h-4 m-auto bg-gray border-[1px] border-blue"></span>
                                      <span class="relative inline-flex rounded-full w-[8px] h-[8px] m-auto bg-blue"></span>
                                    </span>
                                  </div>
                                ) : (
                                  <div className="flex flex-col mt-2 mr-6">
                                    <span class="flex h-4 w-4">
                                      <span class="rounded-full w-4 h-4 m-auto bg-gray"></span>
                                    </span>
                                    <span class="flex ml-[2px]">
                                      <span class="absolute inline-flex h-[8rem] w-3 rounded-full bg-white"></span>
                                    </span>
                                  </div>
                                )}

                                <div className="flex flex-col">
                                  <p className="font-medium text-lg md:text-xl mb-3">
                                    {skill_education.school}
                                    {skill_education.id === 1 ? (
                                      <span className="text-gray2 font-normal md:text-sm text-xs italic">
                                        (current)
                                      </span>
                                    ) : (
                                      <></>
                                    )}
                                  </p>
                                  <p className="text-sm md:text-base text-gray2">
                                    {skill_education.subject}
                                  </p>
                                  <p className="text-sm md:text-base text-gray2">
                                    {skill_education.start_date} -{" "}
                                    {skill_education.end_date}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Skills;

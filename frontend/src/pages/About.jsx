import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Education } from "../util/dataArrays";

const About = ({ scrollRefs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Education", "Experience"];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <section ref={scrollRefs} className="px-[5%] bg-[#000319]">
      <div className="flex">
        <div className="w-[50%]">dsvdsv</div>
        <div className="w-[50%]">
          <div className="text-white text-[40px] font-roboto font-bold">
            About Me
          </div>
          <div className="text-white text-[17px] font-light leading-8 py-3">
            I am a passionate and highly motivated computer science
            undergraduate at the University of Sri Jayewardenepura. My primary
            focus is on full stack development, where I enjoy creating dynamic
            and responsive web applications.
          </div>
          <div>
            <div className="flex items-center justify-center w-[50%] mx-[25%] gap-5 pt-5">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 py-2 px-4 text-center font-semibold w-10 rounded-full border ${
                    activeTab === index
                      ? "border-[#5924a8] bg-[#5924a8] text-white shadow-md shadow-[#8f68c9]"
                      : " border-[#5924a8] text-[#5924a8] "
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-4">
              {activeTab === 0 && (
                <div>
                  <div
                    className="w-[100%] rounded-lg shadow my-5"
                    style={{
                      backdropFilter: "blur(10px)",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                      <div className="w-full text-white p-5">
                        <div>
                          <li className="font-semibold">Kg/Swarna Jayanthi National College</li>
                        </div>
                        <div className="ml-[10%] mt-2 text-[15px]">
                          G.C.E Ordinary Level - 2016 <br />
                          G.C.E Advanced Level( Biology, Physics, Chemistry) -
                          2020
                        </div>
                    </div>
                  </div>

                  <div
                    className="w-[100%] rounded-lg shadow my-5"
                    style={{
                      backdropFilter: "blur(10px)",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                      <div className="w-full text-white p-5">
                        <div>
                          <li className="font-semibold">Sri Lanka Institute of Information Technology</li>
                        </div>
                        <div className="ml-[10%] mt-2 text-[15px]">
                        BSc (Hons) Degree in Information Technology Specializing in Software
                        Engineering ( 2021 - Present )
                        </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && <div>
                <div
                    className="w-[100%] rounded-lg shadow my-5"
                    style={{
                      backdropFilter: "blur(10px)",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                      <div className="w-full text-white p-5">
                        <div>
                          <li className="font-semibold">
                          Software Engineer Intern - Optimize Solutions</li>
                        </div>
                        <div className="ml-[10%] mt-2 text-[15px]">
                        Full-time ( Jan 2024 - Present )
                        </div>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

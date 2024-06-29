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
          <div className="text-white text-[40px] font-inter font-bold">
            About Me
          </div>
          <div className="text-white text-[17px] font-light leading-8 py-3">
            I am a passionate and highly motivated computer science
            undergraduate at the University of Sri Jayewardenepura. My primary
            focus is on full stack development, where I enjoy creating dynamic
            and responsive web applications.
          </div>
          <div>
            <div className="flex pt-5">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 py-2 px-4 text-center font-semibold w-20 rounded-full border mx-[12%] ${
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
                  {Education.map((education, index) => (
                    <div
                      className="w-[100%] rounded-lg shadow my-5"
                      style={{
                        backdropFilter: "blur(10px)",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <div className="flex">
                        <div className="w-[30%]">
                          <img src={education.img}  alt="University Logo" className="w-25 h-20 rounded-lg p-2"/>
                        </div>
                        <div className="w-[70%]">
                          <span>{education.des}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 1 && <div>Content for Tab 2</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

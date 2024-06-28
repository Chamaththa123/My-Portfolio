import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

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
          <div className="text-white text-[40px] font-bold">About Me</div>
          <div className="text-white text-[18px] font-normal leading-8 py-3">
            I am a passionate and highly motivated computer science
            undergraduate at the University of Sri Jayewardenepura. My primary
            focus is on full stack development, where I enjoy creating dynamic
            and responsive web applications. In addition to my expertise in full
            stack development, I have skills in UI/UX design, mobile application
            development, game development, video editing, and graphic designing.
            I thrive on learning new technologies and continuously improving my
            skill set to create innovative and user-friendly digital solutions.
          </div>
          <div>
            <div className="flex pt-5">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 py-2 px-4 text-center font-semibold rounded-full border   mx-3 ${
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
              {activeTab === 0 && <div>
                <div className="w-[100%] rounded-lg shadow "
         style={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
      <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        
      </div>
    </div>
                
                </div>}
              {activeTab === 1 && <div>Content for Tab 2</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

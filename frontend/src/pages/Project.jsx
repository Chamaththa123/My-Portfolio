import React from "react";
import { projects } from "../util/dataArrays";


const Project = () => {

const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];

const truncate = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
};
  return (
    <section className="px-[5%] bg-[#000319] py-10 ">
      <div className="flex justify-center text-white text-[40px] font-roboto font-bold">
        Projects
      </div>

      <div className="flex justify-center gap-10 mx-[25%] w-[40%] mt-20">
        <button
          className={`flex-1 py-2 px-4 text-center font-semibold  rounded-full border border-[#5924a8] text-[#5924a8]`}
        >
          All
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center font-semibold  rounded-full border border-[#5924a8] text-[#5924a8]`}
        >
          Web
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center font-semibold  rounded-full border border-[#5924a8] text-[#5924a8]`}
        >
          Mobile
        </button>
      </div>

      <div className="mt-24 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <div
            className="w-[30%] rounded-lg shadow"
            style={{
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="w-full text-white p-3">
              <img src={project.img} className="w-full rounded-lg h-[200px]" />
              <div className="relative bottom-0 font-bold font-roboto text-[20px] mt-3">
                {project.title}
              </div>
              <div className="font-light text-[15px] mt-3">{truncate(project.des, 150)}</div>
              <div className=" mt-4 flex flex-wrap ">
        {project.technology.map((tech, techIndex) => (
          <span key={techIndex} className={`text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${colors[techIndex % colors.length]}`}>
            {tech}
          </span>
        ))}
      </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

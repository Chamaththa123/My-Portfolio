import React from "react";
import { projects } from "../util/dataArrays";

const Project = () => {
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

      <div className="mt-20 flex flex-wrap justify-center gap-5">
  {projects.map((project, index) => (
    <div
    className="w-[30%] rounded-lg shadow"
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
  ))}
</div>

    </section>
  );
};

export default Project;

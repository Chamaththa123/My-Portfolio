import React from "react";

const Project = () => {
  return (
    <section className="px-[5%] bg-[#000319] py-10 ">
      <div className="flex justify-center text-white text-[40px] font-roboto font-bold">
        Projects
      </div>

      <div className="flex justify-center gap-10 mx-[25%] w-[40%]">
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
    </section>
  );
};

export default Project;

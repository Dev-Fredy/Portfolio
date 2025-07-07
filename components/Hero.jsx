import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className=" bg-[url('/fredy.png')] bg-contain bg-no-repeat bg-right flex h-[900px] w-full relative max-h-[380px] rounded-full sm:max-h-[900px] my-4">
      <div className="flex items-center justify-center ps-5 text-[#44ebd3]">
        <h1 className="text-6xl font-black  mix-blend-difference text-[#44ebd3] ">
          Fredy
        </h1>
      </div>
    </div>
  );
}

export default Hero;

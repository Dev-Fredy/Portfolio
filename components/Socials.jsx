import Link from "next/link";
import React from "react";

function Socials() {
  return (
    <>
      <div className="w-full text-center flex items-center justify-center flex-col">
        <div className="my-3 mx-auto w-full flex">
          <h1 className="text-2xl font-bold text-center w-full" id="contact">
            <span>Contact Me</span>
          </h1>
        </div>
        <Link href={"/"} className="w-fit">
          <div className="">
            Facebook <span className="badge badge-outline">f</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Socials;

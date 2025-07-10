import Link from "next/link";
import React from "react";

function Create() {
  return (
    <>
      <div className="flex justify-between">
        <h1>Project</h1>
        <Link className="" href={"/admin/create/project"}>
          Create Project
        </Link>
      </div>

      <div className="border border-gray-400 flex h-fit"></div>
      <div className="flex justify-between">
        <h1>Tech</h1>
        <Link href={"/admin/create/tech"} className="">
          Create Tech
        </Link>
      </div>

      <div className="border border-gray-400 flex h-fit"></div>
    </>
  );
}

export default Create;

import React from "react";
import Hire from "@/components/Hire";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

let getTechnologies = async () => {
  try {
    let res = await fetch(`${process.env.BASE_URL}/api/tech`, {
      next: { revalidate: 60 },
    });

    if (res.status === 404) {
      return notFound();
    }

    return res.json();
  } catch (error) {
    return console.log(error.message);
  }
};

async function Technologies() {
  let techs = await getTechnologies();

  let tech = techs.tech.map((item, index) => {
    return (
      <div
        className="card w-full bg-base-100  shadow mx-auto my-4 flex flex-row h-full"
        key={index}
      >
        <figure className="max-h-36 h-full w-1/2 flex my-auto">
          <img
            src={item?.imageurl}
            alt={item?.name}
            className="flex h-auto w-full rounded tech-image"
          />
        </figure>
        <div className="card-body flex mx-auto my-auto h-full w-full justify-center">
          <h2 className="card-title text-2xl font-bold">{item?.name}</h2>
          <p>{item?.description}</p>
          <div className="justify-end card-actions">
            <Hire />
          </div>
        </div>
      </div>
    );
  });

  if (tech) {
    return (
      <div className="flex w-full h-auto flex-col mt-3">
        <div className="flex w-full px-3 items-center space-x-3">
          <h2 className="sm:text-3xl text-xl font-bold" id="technologies">
            Technologies
          </h2>
          <div className="border-gray-300 w-full border h-fit"></div>
          <div className="btn btn-sm sm:btn-md">
            <Link href={"/technology"}>More</Link>
          </div>
        </div>

        <div className="w-full space-y-2 flex h-full">{tech}</div>
      </div>
    );
  } else {
    return <div className="loading loading-dots"></div>;
  }
}

export default Technologies;

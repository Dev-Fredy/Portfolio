import Hire from "@/components/Hire";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import getTechnologies from "../lib/getTech";

async function Technologies() {
  let techs = await getTechnologies();

  console.log(techs);

  console.log(techs);

  let tech = techs?.tech?.map((item, index) => {
    if (item) {
      return (
        <div
          className="card w-full bg-base-100  shadow mx-auto my-4 flex flex-row h-full"
          key={index}
        >
          <figure className=" h-1/4 w-2/4 flex my-auto">
            <img
              src={item?.imageurl}
              alt={item?.name}
              className="flex h-full w-full rounded tech-image"
            />
          </figure>
          <div className="card-body flex mx-auto my-auto h-full w-full justify-center">
            <h2 className="card-title text-2xl font-bold">{item?.name}</h2>
            <p>{item?.description}</p>
            <div className="justify-end card-actions">
              <Link href={`/technology/${item?.name.toLowerCase()}-${index}`}>
                See more
              </Link>
            </div>
          </div>
        </div>
      );
    }
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
    return (
      <div className="card w-full bg-base-100  shadow mx-auto my-4 flex flex-row h-34 skeleton gap-3">
        <div className="max-h-36 h-full w-1/2 flex my-auto skeleton"></div>
        <div className="card-body flex mx-auto my-auto h-full w-full justify-center skeleton">
          <h2 className="card-title text-2xl font-bold skeleton"></h2>
          <p className="skeleton"></p>
          <div className="justify-end card-actions skeleton"></div>
        </div>
      </div>
    );
  }
}

export default Technologies;

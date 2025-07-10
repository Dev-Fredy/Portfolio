import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function getProjects() {
  try {
    let res = await fetch(`${process.env.BASE_URL}/api/projects`, {
      next: { revalidate: 60 },
    });

    if (res.status === 404) {
      return notFound();
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function Projects() {
  let projects = await getProjects();

  // console.log(projects);

  let project = projects.projects.map((item, index) => {
    console.log(item);
    if (projects)
      return (
        <div
          className="card bg-base-100 w-full h-full sm:max-w-96 shadow-sm my-3 flex shrink mx-auto"
          key={index}
        >
          <Link
            className="flex"
            href={`${process.env.BASE_URL}/projects/${item?.slug}`}
          >
            <img
              src={item?.imageurl}
              alt={item?.title}
              className="w-full h-full"
            />
          </Link>
          <div className="card-body">
            <Link
              className="card-title"
              href={`${process.env.BASE_URL}/projects/${item?.slug}`}
            >
              {item?.title}
              {index === 0 ? (
                <div className="badge badge-secondary">NEW</div>
              ) : (
                ""
              )}
            </Link>
            <p>I built a Todo-List from scratch...</p>
            <div className="card-actions justify-end">
              {item?.technologies.map((tech, index) => {
                return (
                  <div
                    className={`badge badge-outline ${
                      tech?.toLowerCase() == "javascript"
                        ? `badge-accent`
                        : tech?.toLowerCase() == "scss"
                        ? "badge-info"
                        : tech?.toLowerCase() == "css"
                        ? "badge-success"
                        : "badge-primary"
                    } `}
                    key={index}
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <Link
              className="btn btn-primary"
              href={`${process.env.BASE_URL}/projects/${item?.slug}`}
            >
              Check it out
            </Link>
          </div>
        </div>
      );
    else
      return (
        <div
          className="card bg-base-100 w-full sm:max-w-96 shadow-sm my-3 flex shrink mx-auto skeleton"
          key={index}
        >
          <figure className="flex">
            {/* <img src={item.imageurl} alt={item.title} className="flex" /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {/* {item.title}
              {index === 0 ? (
                <div className="badge badge-secondary">NEW</div>
              ) : (
                ""
              )} */}
            </h2>
            <p>I built a Todo-List from scratch...</p>
            <div className="card-actions justify-end">
              {/* {item.technologies.map((tech, index) => {
                return (
                  <div
                    className={`badge badge-outline ${
                      tech.toLowerCase() == "javascript"
                        ? `badge-accent`
                        : tech.toLowerCase() == "scss"
                        ? "badge-info"
                        : tech.toLowerCase() == "css"
                        ? "badge-success"
                        : "badge-primary"
                    } `}
                    key={index}
                  >
                    {tech}
                  </div>
                );
              })} */}
            </div>
            {/* <Link className="btn btn-primary" href={"/"}>
              Check it out
            </Link> */}
          </div>
        </div>
      );
  });
  return (
    <>
      <section className="">
        <div className="flex w-full px-3 items-center space-x-3">
          <h3
            className="sm:text-3xl text-xl font-bold text-center scroll-auto scroll-p-9"
            id="projects"
          >
            Projects
          </h3>
          <div className="border-gray-300 w-full border h-fit"></div>
          <Link className="btn sm:btn-md btn-sm" href={"/projects"}>
            More
          </Link>
        </div>
      </section>
      <section className="grid sm:grid-cols-4 space-y-3 gap-3 mb-5">
        {project}
      </section>
    </>
  );
}

export default Projects;

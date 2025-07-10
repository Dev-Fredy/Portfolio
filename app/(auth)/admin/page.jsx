import Link from "next/link";
import React from "react";
import getProjects from "../../../lib/getProjeccts";
import getTechnologies from "../../../lib/getTech";

async function Admin() {
  let projects = await getProjects();

  let techs = await getTechnologies();

  let totalProjects = projects.projects.length;

  let totalTechs = techs.tech.length;

  return (
    <>
      <div className="gap-3">
        <div className="flex justify-between">
          <Link href={"/admin/projects"} className="font-semibold">
            Projects
          </Link>
          <div className="">{totalProjects}</div>
        </div>
        <hr />
        <div className="flex justify-between">
          <Link href={"/admin/technologies"} className="font-semibold">
            Technologies
          </Link>
          <div className="">{totalTechs}</div>
        </div>
        <hr />
        <Link href={"/admin/socials"} className="font-semibold">
          Socials
        </Link>
      </div>
    </>
  );
}

export default Admin;

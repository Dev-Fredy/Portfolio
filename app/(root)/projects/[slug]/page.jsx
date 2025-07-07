import React from "react";

async function Project({ params }) {
  let { slug } = await params;

  let res = await fetch(`${process.env.BASE_URL}/api/projects/${slug}`);

  if (!res.ok) {
    console.log(res.status);
  }

  let project = await res.json();

  let projectItem = project.project;

  return (
    <div className="">
      <section>
        <h1>{projectItem.title}</h1>
      </section>
      <section>
        <figure>
          <img src={projectItem.imageurl} alt={projectItem.title} />
        </figure>
      </section>
      <section>
        <p>{projectItem.description}</p>
      </section>
      <section>{projectItem.content}</section>
    </div>
  );
}

export default Project;

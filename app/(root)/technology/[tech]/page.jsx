import React from "react";

let getTech = async () => {
  let res = await fetch(`${process.env.BASE_URL}/api/projects`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    return console.log("Could not fetch the projects!");
  }

  let projects = await res.json();

  return projects;
};

async function Tech({ params }) {
  const { tech } = await params;
  // console.log(tech);

  let actualPost = tech.split("-").pop();

  let res = await fetch(`${process.env.BASE_URL}/api/tech/${actualPost}`);

  if (!res.ok) {
    return console.log(res.status);
  }

  let techItem = res.json();

  console.log(techItem);

  return <div>{actualPost}</div>;
}

export default Tech;

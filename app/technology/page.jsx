import React from "react";
import { notFound } from "next/navigation";

let getTech = async () => {
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

async function Technology() {
  let techs = await getTech();

  console.log(techs);
  return (
    <div className="grid w-full h-fullss">
      <div className="card card-lg flex flex-row h-1/5 items-center">
        <figure className="w-1/4 h-24 rounded-2xl">
          <img
            src="/fredy.png"
            alt="React"
            className="flex w-full h-full object-cover"
          />
        </figure>
        <div className="card-body w-auto flex justify-center">
          <div className="card-title">
            <h1>React</h1>
          </div>
          <div className="card-actions">
            <button className="btn btn-secondary">React projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;

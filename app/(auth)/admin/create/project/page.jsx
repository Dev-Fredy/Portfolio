"use client";

import React, { useState } from "react";

function Project() {
  let [form, setForm] = useState({
    name: "",
    description: "",
    imageurl: "",
    content: "",
  });

  let handleChange = async (e) => {
    let { type, checked, name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <legend className="text-center font-black">Project Post</legend>
        <div className="border border-gray-300 py-3 flex space-x-3 px-3 items-center">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={form.name}
            name="name"
            id="name"
            className="border border-b-2 border-gray-200 flex w-full p-3 font-semibold text-xl"
          />
        </div>
        <div className="border border-gray-300 py-3 flex space-x-3 px-3 items-center">
          <label htmlFor="description" className="font-bold">
            Description
          </label>
          <textarea
            onChange={handleChange}
            type=""
            value={form.description}
            name="description"
            id="description"
            className="border border-b-2 border-gray-200 flex w-full p-3 font-semibold"
            cols={50}
            rows={4}
          />
        </div>
        <div className="border border-gray-300 py-3 flex space-x-3 px-3 items-center">
          <label htmlFor="imageurl" className="font-bold">
            Image URL
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={form.imageurl}
            name="imageurl"
            id="imageurl"
            className="border border-b-2 border-gray-200 flex w-full p-3 font-semibold text-xl"
          />
        </div>
      </form>
    </>
  );
}

export default Project;

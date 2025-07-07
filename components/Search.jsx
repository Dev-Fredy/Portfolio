"use state";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Search() {
  let router = useRouter();
  let [form, setForm] = useState({
    search: "",
  });

  let handleChange = (event) => {
    let { type, checked, value, name } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    // let res = await fetch(`${process.env.BASE_URL}/api/search`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    // if (res.ok) {
    //   let data = await res.json();
    //   alert(data.message);
    // }
    let route = router.push({
      pathname: "/search",
      query: { q: form.search },
    });
    console.log(route);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={form.search}
        onChange={handleChange}
        placeholder="Search"
        className="input  input-bordered w-full sm:w-24 md:w-auto"
      />
    </form>
  );
}

export default Search;

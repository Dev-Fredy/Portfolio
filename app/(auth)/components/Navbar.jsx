import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar flex w-full">
      <div className="flex-1">
        <Link className="" href={"/admin"}>
          Admin
        </Link>
      </div>
      <ul>
        <Link href={"/admin/create"} className="btn ">
          Create
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;

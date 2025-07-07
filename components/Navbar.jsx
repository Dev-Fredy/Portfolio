"use client";

import React from "react";
import Hire from "./Hire";
import { usePathname } from "next/navigation";
import Search from "../components/Search";

function Navbar() {
  let path = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-full">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-[midnight-pink] font-bold text-2xl"
          href="/"
        >
          Fredy
        </a>
      </div>
      <div className="sm:flex hidden px-2">
        <ul className="menu menu-horizontal bg-base-300 rounded-full">
          <li>
            <a
              className="font-bold"
              href={
                path === "/"
                  ? `#technologies`
                  : path === "/technology"
                  ? ""
                  : "/technology"
              }
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              className="font-bold"
              href={
                path === "/"
                  ? "#projects"
                  : path === "/projects"
                  ? ""
                  : "/projects"
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="font-bold"
              href={
                path === "/"
                  ? "#contact"
                  : path === "/contact"
                  ? ""
                  : "/contact"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="flex sm:hidden px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-3 ms-[-150px] shadow flex gap-4"
            >
              <li className="sm:hidden flex w-full ">
                <Search />
              </li>

              <li>
                <a
                  href={
                    path === "/"
                      ? `#technologies`
                      : path === "/technolgy"
                      ? ""
                      : "/technology"
                  }
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href={
                    path === "/"
                      ? "#projects"
                      : path === "/projects"
                      ? ""
                      : "/projects"
                  }
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href={
                    path === "/"
                      ? "#contact"
                      : path === "/contact"
                      ? ""
                      : "/contact"
                  }
                >
                  Contact Me
                </a>
              </li>
              <li className="">
                <Hire />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex  gap-2">
        <div className="hidden sm:block">
          <Hire />
        </div>
        <div className="hidden sm:block">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

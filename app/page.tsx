import React from "react";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Footer from "@/components/Footer";
import Projects from "../components/Projects";
import Socials from "../components/Socials";

function Home() {
  return (
    <div className="w-full h-full gap-3">
      <Hero />
      <Technologies />
      <Projects />
      <div className="border sm:w-3/4 w-11/12  mx-auto border-black/5 my-2 "></div>
      <Socials />
    </div>
  );
}

export default Home;

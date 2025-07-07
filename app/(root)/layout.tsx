import type { Metadata } from "next";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Fredy",
  description: "My Portfolio",
};

function RootLayout({ children }: any) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col justify-between h-full">
        <main className="">
          <section className="">{children}</section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default RootLayout;

import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fredy",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake" className="flex w-full h-full">
      <body
        className={`${geistSans.variable} ${oswald.variable} antialiased max-w-[1200px] w-full mx-auto flex flex-col justify-between px-3`}
      >
        <header>
          <Navbar />
        </header>
        <main className="">
          <section className="">{children}</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}

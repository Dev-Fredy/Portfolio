import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
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
    <html lang="en" data-theme="cupcake" className="w-full h-full">
      <body
        className={` ${oswald.variable} antialiased max-w-[1200px] w-full mx-auto flex flex-col space-y-3 h-full p-3`}
      >
        {children}
      </body>
    </html>
  );
}

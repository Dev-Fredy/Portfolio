import Link from "next/link";
import React from "react";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <div className="text-sm text-gray-400 py-3 flex justify-center">
      <p>
        <span>
          <Link href={"/"}>Fredy</Link>
        </span>
        <span> | </span>
        <span>Copyright &copy; {currentYear} All Rights Reserved.</span>
      </p>
    </div>
  );
}

export default Footer;

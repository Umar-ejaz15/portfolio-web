import React from "react";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <nav className="flex justify-between items-center px-10  " >
        <div className="flex justify-between items-center p-4">
          <Link className="flex justify-center items-center group  transition-all duration-300 text-3xl ease-in-out" href="/">
            <FaArrowAltCircleRight className=" group-hover:rotate-45 " /> <h1>NextDev</h1>
          </Link>
        </div>
        <div>
          <ul className="  flex gap-6 text-sm " >
            <Link href="/">Home</Link>
            <Link href="/aboutPage">About</Link>
            <Link href="/contactPage">Contact</Link>
            <Link href="/projectsPage">Projects</Link>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;

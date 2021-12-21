import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toogle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        Sistem Agenda Rapat
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toogle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/anggota" className="p-4">
          Anggota
        </Link>
        <Link to="/notifikasi" className="p-4">
          Notifikasi
        </Link>
        <Link to="/notulensi" className="p-4">
          Notulensi
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

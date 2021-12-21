import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toogle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toogle}
    >
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
  );
};

export default Dropdown;

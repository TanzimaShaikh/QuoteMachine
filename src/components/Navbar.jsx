import React from "react";

const Navbar = () => {
  return (
    <div className="container navbar rounded-lg mb-36 text-white align-middle justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-5 pb-5  ">
      <img src="image copy.png" alt="" width={50} className="animate-pulse"/ >
      <a className="btn btn-ghost text-3xl font-semibold ">Quote Machine</a>
      <img src="image copy.png" alt="" width={50} className=" rotate-180 animate-pulse"/ >
    </div>
  );
};

export default Navbar;

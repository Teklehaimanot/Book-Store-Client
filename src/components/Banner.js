import React from "react";
import backgroundIMage from "../assets/background.jpg";
const Banner = () => {
  return (
    <div
      className="bg-yellow h-1/3 bg-contain w-full bg-center "
      style={{ backgroundImage: `url(${backgroundIMage})` }}
    ></div>
  );
};

export default Banner;

import React from "react";
import LogoImg from "../assets/Logo.jpeg"

function Logo({ width = "100px" }) {
  return <img src={LogoImg} alt="Logo" className="h-24"/>;
}

export default Logo;

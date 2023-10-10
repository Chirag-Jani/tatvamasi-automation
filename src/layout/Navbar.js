import React from "react";

import logoTextWhite from "../resources/logos/logoTextWhite.png";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#162966",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        padding: "30px 0",
      }}
    >
      <img src={logoTextWhite} alt="" />
    </div>
  );
};

export default Navbar;

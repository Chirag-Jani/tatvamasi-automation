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
      }}
    >
      <img
        src={logoTextWhite}
        alt=""
        style={{
          margin: "0 40px",
        }}
      />
      <h1
        style={{
          margin: 0,
          padding: "10px",
        }}
      >
        Tatvamasi Automation
      </h1>
    </div>
  );
};

export default Navbar;

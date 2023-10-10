import React from "react";

import logoTextWhite from "../resources/logos/logoTextWhite.svg";
import SearchField from "../components/utilities/SearchField";

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
        padding: "10px 0",
      }}
    >
      <img src={logoTextWhite} alt="" />
      <div>
        <SearchField />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#002452",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="spinner-border text-dark"
        role="status"
        style={{
          border: "2px solid white",
          borderRightColor: "#002452",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;

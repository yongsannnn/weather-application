import React from "react";
// import logo from "../assets/logo";
const TopNav = () => {
  return (
    <React.Fragment>
      <header>
        <div className="p-2 header-container">
          <img src={require("../assets/logo.png")} alt="logo" />
          <p className="logo-title">Weather Today</p>
        </div>
      </header>
    </React.Fragment>
  );
};

export default TopNav;

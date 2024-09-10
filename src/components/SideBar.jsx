import React from "react";
import "./SideBar.css";
import MainPage from "./MainPage";

const SideBar = () => {
  return (
    <>
      <MainPage />
      <div className="sideBarDiv">
        <div className="panel1Div">
          <div className="panel1">Project Gallery</div>
        </div>
        <div className="panel2Div">
          <div className="panel2">Help</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

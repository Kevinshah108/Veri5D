import React from "react";
import { useRef } from "react";
import MainPage from "./MainPage";
import "./Services.css";
import Clients from "./Clients";
import About from "./About";

const Services = () => {
  return (
    <>
      <MainPage />
      <About />
      <div className="ServicesDiv" id="services1">
        <h3 className="ServicesName">Services</h3>
        <ul className="ServicesList">
          <li>Master Plant Planning</li>
          <li>Architectural and Civil layouts</li>
          <li>Preparation of sizing of utility & Plant layout</li>
          <li>Budgeting costs and constructability review</li>
          <li>Structural Analysis and Design</li>
          <li>3D Tekla structural Modeling / Fabrication Drawings</li>

          <li>Preparing shop drawings / Fabrication Drawings</li>
          <li>Third party review</li>
        </ul>
        <ul className="SecondServicesList">
          <li> BIM Implementation Strategies</li>
          <ol>- BIM Modeling</ol>
          <ol>- BIM Coordination Design Services</ol>
          <ol>- Clash analysis and execution.</ol>
          <ol>- Quantities and BOQ Analysis</ol>
          <ol>- Construction documents and shop drawings.</ol>
          <li>BIM Consultancy</li>
          <ol>- CAD to BIM conversion.</ol>
          <ol>- Establishing BIM standards.</ol>
          <ol>- Execution plan for BIM</ol>
          <ol>- Managing Autodesk Construction Cloud</ol>
        </ul>
      </div>
    </>
  );
};

export default Services;

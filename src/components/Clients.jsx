import React from "react";
import "./Clients.css";
import WorldMap from "../assets/worldmap.png";
import MainPage from "./MainPage";
import About from "./About";
import Services from "./Services";

const Clients = () => {
  return (
    <>
      <MainPage />
      <About />
      <Services />
      <div className="clientsDiv" id="clients1">
        {/* <img
          src="https://r.mobirisesite.com/667598/assets/images/photo-1581092160562-40aa08e78837.jpeg"
          className="clientsImg"
        /> */}
        <div className="worldMap">
          <img src={WorldMap} alt="map" />
        </div>
        <div className="pin Vadodara">
          <span>Vadodara</span>
        </div>
        <div className="pin Chennai">
          <span>Chennai</span>
        </div>
        {/* <div className="pin Savli">
          <span>Savli</span>
        </div> */}
        <div className="pin AbuDhabi">
          <span>Abu Dhabi</span>
        </div>
        <div className="pin Saudi">
          <span>Saudi Arabia</span>
        </div>
        <div className="pin Egypt">
          <span>Egypt</span>
        </div>
        <div className="pin Nigeria">
          <span>Nigeria</span>
        </div>

        <div className="ClientsBackDiv">
          <h2 className="clientsName">Our Clients</h2>

          <div className="clientsList">
            <ul>Ark Golden India Pvt. Limited – Vadodara</ul>
            <ul>SRF Ltd. – Dahej / Chennai</ul>
            <ul>ADNOC – Abu Dhabi</ul>
            <ul>In Touch Engg. – Vadodara</ul>
            <ul>Deepak Nitrite Ltd. – Nandesari, Vadodara</ul>
            <ul>Sodium Metal Pvt. Ltd. – Nandesari, Vadodara</ul>
            <ul>Mks Engineering – Vadodara</ul>
          </div>
          <div className="secondClientsList">
            <ul>Mysore Ammonia Envirotech Pvt. Ltd. – Vadodara</ul>
            <ul>Jubilant Organosys Ltd. – Savli</ul>
            <ul>Sam De Services – Vadodara</ul>
            <ul>Meck Industries – Vadodara</ul>
            <ul>Prabha Steel Ltd. – Vadodara</ul>
            <ul>ACE Engineering – Vadodara</ul>
            <ul>S Nanavati – Vadodara</ul>
          </div>

          <h2 className="systmEngineers">System Engineers</h2>
          <h3 className="VadodaraProjects">Vadodara Projects:</h3>
          <div className="projectLists">
            <ul>Emulsion Polymerization Plant - Saudi</ul>
            <ul>VA Emulsion Plant - Egypt</ul>
            <ul>Alkyd Plant - Nigeria</ul>
            <ul>Casein Plant - Nigeria</ul>
            <ul>Emulsion Plant - Nigeria.</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;

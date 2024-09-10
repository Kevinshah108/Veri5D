import React from "react";
import "./App.css";
import Services from "./Services";
import MainPage from "./MainPage";
import Clients from "./Clients";

const About = () => {
  return (
    <>
      <MainPage />
      {/* <Services /> */}
      <div className="VisionDiv" id="about1">
        <div className="VisionText">
          <h1 className="VisionName">OUR VISION</h1>
          <p className="VisionPara">
            <span>Veri5D</span> Engineering and consultants, previously
            identified as Pinkal Mistry & Associates, comprises a diverse and
            passionate group of engineers and designers, offering professional
            services in the AEC (Architecture, Engineering and construction)
            field for a wide range of buildings and structures.
          </p>
        </div>

        <div className="VisionImg">
          <img src="https://content.jdmagicbox.com/comp/service_catalogue/piping-engineering-consultants-022pxx22.xx22.180328033547.t5r1-quth90p.jpg" />
        </div>
      </div>
      <div className="MissionDiv">
        <div className="MissionText">
          <h1 className="MissionName">OUR MISSION</h1>
          <ul className="MissionPara">
            <li>
              Setting up higher standards of detailing in field of Industrial
              Structural Engineering
            </li>
            <li>
              Emerging new trends in India by adopting best global engineering
              practices
            </li>
            <li>
              Provide cost effective solutions to clients in line with our
              workmanship
            </li>
            <li>
              Deliver timely and meaningful construction documents to contractor
              for quality completion of project in predefined time line
            </li>
            <li>Ensure post project availability to maintain client delight</li>
          </ul>
        </div>

        <div className="MissionImg">
          <div className="VisionImg">
            <img src="https://www.aaconsultancy.ae/dubai/wp-content/uploads/2021/12/Engineering-Consultancy.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

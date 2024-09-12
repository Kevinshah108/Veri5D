import "./App.css";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const scrollToSection = () => {
    const element = document.getElementById("about1");
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const scrollToMainPage = () => {
    const element1 = document.getElementById("mainpage1");
    element1.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  const scrollToClients = () => {
    const element2 = document.getElementById("clients1");
    element2.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const scrollToServices = () => {
    const element3 = document.getElementById("services1");
    element3.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };
  const scrollToGallery = () => {
    const element4 = document.getElementById("gallery1");
    element4.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    const element5 = document.getElementById("contact1");
    element5.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  // const navigate = useNavigate();

  const navItems = document.querySelectorAll(".nav-item");

  function removeActiveClass() {
    navItems.forEach((item) => item.classList.remove("active"));
  }

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      removeActiveClass();
      this.classList.add("active");
    });
  });
  return (
    <>
      <div className="containerDiv">
        <div className="header">
          {/* <a href="/sidebar" className="MenuBarLink"> */}
          {/* <div className="MenuLogo">&#9776;</div> */}
          {/* </a> */}
          <h1 className="WebsiteName" onClick={scrollToMainPage}>
            Veri5D
          </h1>
          <div onClick={scrollToMainPage} className="Home nav-item">
            Home
          </div>
          <div onClick={scrollToSection} className="About nav-item">
            About
          </div>

          <div onClick={scrollToServices} className="Services nav-item">
            Services
          </div>

          <div onClick={scrollToClients} className="Clients nav-item">
            Clients
          </div>

          <div onClick={scrollToGallery} className="Gallery nav-item">
            Gallery
          </div>
          <div onClick={scrollToContact} className="Contact nav-item">
            Contact
          </div>
        </div>
        {/* <div className="navBar">
          
        </div> */}
        <div className="MainPage" id="mainpage1">
          <div className="BgImgDiv">
            <div className="BgImg">
              <h1 className="Title">Veri5D</h1>
              <h3 className="TitleInfo">ENGINEERING CONSULTANTS</h3>
              <h4 className="WebInfo">FACILITATING SEAMLESS SOLUTIONS...</h4>
              <button className="ExploreBtn">Explore Now</button>
            </div>
          </div>
        </div>

        <div className="ServiceDiv"></div>

        <div className="footer">
          <footer>
            <h1 className="FooterLogo">VERI5D</h1>
            <h6 className="FooterMobile">Mobile: +91 98985 91813 |</h6>
            <h6 className="FooterEmail">Email: pinkal@pmabaroda.in</h6>
            <h6 className="FooterAdress">
              Adress: 405, SAKAR EAST, Soma Talav- Tarsali Ring Road, Tarsali,
              Vadodara-09
            </h6>
            <p className="FooterPara">© 2024 Veri5D. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default MainPage;

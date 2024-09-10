import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./Gallery.css";
import Clients from "./Clients";
import MainPage from "./MainPage";

const Gallery = () => {
  const slides = [
    {
      url: "https://www.satec.co.in/wp-content/uploads/2019/04/Industrial-Sheds-Factory.jpg",
    },
    {
      url: "https://3.imimg.com/data3/HA/BP/MY-7145481/peb-mnufacturer-in-chennai-500x500.jpg",
    },
    {
      url: "https://i0.wp.com/www.rbsworld.co.in/blog/wp-content/uploads/2021/09/Industrial-Sheds.jpg?fit=1024%2C768&ssl=1",
    },
  ];

  const slides1 = [
    {
      url: "https://media.licdn.com/dms/image/v2/C4D12AQFPEmvAMGEehQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1645365392850?e=2147483647&v=beta&t=WW64fNWgY2eDqTWjMcPN6ixzzDuoW5V1YjvHadYPtG4",
    },
    {
      url: "https://www.statoras.gr/wp-content/uploads/2020/08/Capture6-1-1170x600.png",
    },
    {
      url: "https://stlengineering.net/wp-content/uploads/2018/09/Pict-4-mixers-support-struc-3d-extruded-view.jpg",
    },
  ];

  const slides2 = [
    {
      url: "https://static.wixstatic.com/media/5959e3_5fac18ca7bce4629bdb16a8cc2559887~mv2.jpg/v1/fill/w_558,h_418,al_c/5959e3_5fac18ca7bce4629bdb16a8cc2559887~mv2.jpg",
    },
    {
      url: "https://pradosilos.com/wp-content/uploads/2021/02/silo-fondo-conico-de-prado.jpg",
    },
  ];
  const slides3 = [
    {
      url: "https://www.saferack.com/wp-content/uploads/2017/01/ErectaStep-Pipe-Racks.jpg",
    },
    {
      url: "https://rhuddhi.wordpress.com/wp-content/uploads/2016/07/2006b4.png?w=523&h=355",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2022/3/HK/VL/RW/2777517/pipe-rack-structure-design-500x500.png",
    },
  ];

  const slides4 = [
    {
      url: "https://image.made-in-china.com/202f0j00LUmYoIPaYbzw/Prefabricated-Steel-Structure-Water-Tank-Tower.webp",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/2/NI/MI/QS/38301902/over-head-tanks-500x500.png",
    },
  ];

  const slides5 = [
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2022/3/OJ/KW/MU/2777517/structure-design-for-air-cooler-support-structure-500x500.png",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2022/3/ZK/KE/IK/2777517/structure-design-of-horizontal-vessel-platforms.png",
    },
  ];
  const slides6 = [
    {
      url: "https://atad.vn/wp-content/uploads/2015/09/Equipment_support_structures.jpg",
    },
    {
      url: "https://overheadcranesuppliers.com/wp-content/uploads/2018/10/industrial-steel-structure-5.jpg",
    },
    {
      url: "https://atad.vn/wp-content/uploads/2015/09/steel-structure-1024x683.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <MainPage />
      <Clients />
      <div>
        <h1 className="ProjectGalleryName" id="gallery1">
          Project Gallery
        </h1>
        <h3 className="industrialSheds">Industrial Sheds</h3>

        <div className="ImageSlider">
          <SimpleImageSlider
            width={490}
            height={300}
            backgroundSize={"cover"}
            images={slides}
            showNavs={true}
          />
        </div>

        <h3 className="equipment">Equipment Supporting Structures</h3>
        <div className="ImageSlider1">
          <SimpleImageSlider
            width={490}
            height={300}
            images={slides1}
            showNavs={true}
          />
        </div>

        <h3 className="silos">Silos & Supporting Structures</h3>
        <div className="ImageSlider2">
          <SimpleImageSlider
            width={490}
            height={300}
            images={slides2}
            showNavs={true}
          />
        </div>

        <h3 className="pipe">Pipe Racks</h3>
        <div className="ImageSlider3">
          <SimpleImageSlider
            width={490}
            height={300}
            images={slides3}
            showNavs={true}
          />
        </div>

        <h3 className="storage">Storage Tank Platforms</h3>
        <div className="ImageSlider4">
          <SimpleImageSlider
            width={490}
            height={300}
            images={slides4}
            showNavs={true}
          />
        </div>

        <h3 className="vessel">Vessel Platforms</h3>
        <div className="ImageSlider5">
          <SimpleImageSlider
            width={490}
            height={300}
            images={slides5}
            showNavs={true}
          />
        </div>
        <h6 className="projectHeadings">Some Of Our</h6>
        <h3 className="completedProjects">Completed Projects</h3>
        <div className="ImageSlider6">
          <SimpleImageSlider
            width={1000}
            height={500}
            images={slides6}
            showNavs={true}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;

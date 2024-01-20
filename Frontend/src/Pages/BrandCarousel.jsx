import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import { Link } from "react-router-dom";
import tata from '../images/tata.jpg';
import mahindra from '../images/mahindra.jpg';
import hyundai from '../images/hyundai.jpg';
import suzuki from '../images/suzuki.jpg';
import kia from '../images/kia.jpg';
import '../CSS/BrandCarousel.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
];

const BrandCarousel = () => {
  return (
    <>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}  className="product">
          <Link to="/tata" className="carousel-item" >
            <img src={tata} style={{ height: '180px' }} alt="Tata" />
          </Link>
          <Link to="/mahindra" className="carousel-item" >
            <img src={mahindra} style={{ height: '180px' }} alt="Mahindra" />
          </Link>
          <Link to="/suzuki" className="carousel-item">
            <img src={suzuki} style={{ height: '180px' }} alt="Suzuki" />
          </Link>
          <Link to="/hyundai" className="carousel-item">
            <img src={hyundai} style={{ height: '180px' }} alt="Hyundai" />
          </Link>
          <Link to="/kia" className="carousel-item">
            <img src={kia} style={{ height: '180px' }} alt="Kia" />
          </Link>
        </Carousel>
      </div>
    </>
  );
}

export default BrandCarousel;

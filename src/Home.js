import React from "react";
import "../CSS/home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="home">
      <div className="home_container"></div>
      {/* slider */}
      {/* <img className="banner_image" src="../images/amazon-banner1.jpg" alt="" /> */}
        <Carousel className="banner_image">
          <Carousel.Item interval={2000}>
            <img
              className=" w-100"
              src="../images/amazon-banner1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className=" w-100"
              src="../images/banner-img-2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className=" w-100"
              src="../images/banner-img-3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className=" w-100"
              src="../images/banner-img-4.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>

      {/* end slider  */}

      {/* items */}

      <div className="home_row">
        <Product
          info="Up to 70% off | Electronics store"
          img="../images/product-img-1.jpg"
          link="/ProductElectronics"
        />
        <Product
          info="Revamp your home in style"
          img="../images/product-img-2.jpg"
          link="/ProductHome"
        />
        <Product
          info="Styles for Men | Up to 70% off"
          img="../images/pro-img-3.jpg"
          link="/Productmen"
        />
      </div>
      <div className="home_row">
        <Product
          info="Prime Video: Recommended for you"
          img="../images/pic-1.jpg"
          link="/ProductElectronics"
        />
        <Product
          info="Up to 45% off | Top offers from Amazon Brand - Solimo"
          img="../images/product-img-4.jpg"
          link="/ProductElectronics"
        />
      </div>
      <div className="home_row"></div>
      <div className="home_row"></div>
    </div>
  );
}

export default Home;

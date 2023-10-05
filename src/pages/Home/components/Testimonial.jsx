import React from "react";
import Slider from "react-slick";
import ClientCard from "../../../common/ClientCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container my-10 mx-auto md:px-6">
    <section className="mb-32 text-center">
      <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>
  
      
      <Slider {...settings}>
       <ClientCard/>
       <ClientCard/>
       <ClientCard/>
        </Slider>
      
     
    </section>
  </div>
  );
};

export default Testimonial;

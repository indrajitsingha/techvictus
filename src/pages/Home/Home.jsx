import React, { useContext, useState } from "react";
import { CarouselWithContent } from "./components/CarouselWithContent";
import SearchBar from "./components/SearchBar";
import CourseCard from "./components/CourseCard";
import Notice from "./components/Notice";
import Testimonial from "./components/Testimonial";
import SlidesComapny from "../../common/CompanySlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Contextservice } from "../../context/ContextApp";

const Home = () => {
  const {  trendingCourse, upComingCourse, availableCourse } =
    useContext(Contextservice);
    console.log(trendingCourse);
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    lazyLoad: true,
    autoplay: true,
    slidesToScroll: 4,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" w-[100%] overflow-x-hidden">
      <CarouselWithContent />
      <SearchBar />

      {/* Trending Professional Courses */}
      <div className="">
        <h2 className=" text-[20px] sm:text-[40px] text font-bold w-[80%] p-3 bg-[#693268] text-white text-center mt-10  ">
          Trending Professional Courses
        </h2>

        <Slider {...settings} className="my-10 py-2 w-[100%]   ">
        {
          trendingCourse && trendingCourse.map((x)=><CourseCard course={x} key={x.id} />)
        }
          
         
        </Slider>
      </div>
      {/* Upcoming Professional Courses */}
      <h2 className=" text-[20px] sm:text-[40px] text font-bold w-[80%] p-3 bg-[#693268] text-white text-center mt-10  ">
        Upcoming Professional Courses
      </h2>

      <Slider {...settings} className="my-10 py-2  w-[100%]  ">
      {
        upComingCourse && upComingCourse.map((x)=><CourseCard course={x} key={x.id} />)
        }
      </Slider>

      {/*    Available Professional Courses */}
      <h2 className=" text-[20px] sm:text-[40px] text font-bold w-[80%] p-3 bg-[#693268] text-white text-center mt-10  ">
        Available Professional Courses
      </h2>

      <Slider {...settings} className="my-10 py-2 w-[100%]  ">
      {
        availableCourse && availableCourse.map((x)=><CourseCard course={x} key={x.id} />)
        }
      </Slider>

      <Notice />
      <Testimonial />
      <SlidesComapny />
    </div>
  );
};

export default Home;
{
  /* <div className="mx-auto my-10 grid w-[100%] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div> */
}

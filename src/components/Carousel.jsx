import React from "react";
import { useState } from "react";
import heroimg from "../images/heroimg1.jpg";
import heroimg2 from "../images/heroimg2.jpg";
import heroimg3 from "../images/heroimg3.jpg";
import heroimg4 from "../images/heroimg4.jpg";
import heroimg5 from "../images/heroimg5.jpg";
import heroimg6 from "../images/heroimg6.jpg";
import heroimg7 from "../images/heroimg7.jpg";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const HeroSection = () => {
  const slides = [
    { url: heroimg },
    { url: heroimg2 },
    { url: heroimg3 },
    { url: heroimg4 },
    { url: heroimg5 },
    { url: heroimg6 },
    { url: heroimg7 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div
      className="hidden  w-full relative group
    md:block md:h-[200px] md:my-8
    lg:h-[450px] lg:my-0
    "
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-cover bg-center duration-500"
      ></div>
      <div
        className="hidden group-hover:flex absolute top-0 text-2xl  text-gray-800 hover:text-gray-200 font-extrabold left-0 hover:cursor-pointer h-full w-12 items-center justify-center hover:bg-black/60 duration-500 hover:shadow-lg"
        onClick={prevSlide}
      >
        <BsChevronLeft size={30} />
      </div>
      <div
        className="hidden group-hover:flex absolute top-0 text-2xl  text-gray-800 hover:text-gray-200 font-extrabold right-0 hover:cursor-pointer h-full w-12 items-center justify-center hover:bg-black/60 duration-500 hover:shadow-lg"
        onClick={nextSlide}
      >
        <BsChevronRight size={30} />
      </div>
      <div className="hidden group-hover:flex absolute left-0 text-2xl  text-gray-800 font-extrabold bottom-0  h-12 w-full items-center justify-center hover:bg-black/20 duration-500 hover:shadow-lg">
        {slides.map((slides, slideIndex) => (
          <div
            className="p-1 mx-1 bg-black/40 hover:cursor-pointer rounded-full hover:bg-gray-300 hover:text-gray-500"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

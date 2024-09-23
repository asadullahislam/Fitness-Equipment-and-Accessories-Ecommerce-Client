import { useState } from "react";
import first from "../../../assets/1.avif";
import second from "../../../assets/2.avif";
import third from "../../../assets/3.avif";
import fourth from "../../../assets/4.avif";
import fifth from "../../../assets/5.avif";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl: first,
      title: "Premium Dumbbells Set",
      description:
        "Enhance your strength training with high-quality dumbbells.",
      buttonText: "Order Now",
    },
    {
      imageUrl: second,
      title: "Advanced Treadmills",
      description:
        "Run to your fitness goals with our cutting-edge treadmills.",
      buttonText: "Order Now",
    },
    {
      imageUrl: third,
      title: "Durable Yoga Mats",
      description:
        "Experience comfort and grip during yoga with our premium mats.",
      buttonText: "Order Now",
    },
    {
      imageUrl: fourth,
      title: "Resistance Bands Set",
      description:
        "Boost flexibility and strength with versatile resistance bands.",
      buttonText: "Order Now",
    },
    {
      imageUrl: fifth,
      title: "Kettlebells for Functional Training",
      description:
        "Achieve total body conditioning with our ergonomic kettlebells.",
      buttonText: "Order Now",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center text-white px-6 text-center space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold animate-fadeIn">
              {slide.title}
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-xl animate-fadeIn">
              {slide.description}
            </p>
            <Link
              to="/products"
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 animate-fadeIn"
            >
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none transition duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none transition duration-300"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full bg-white bg-opacity-50 transition-opacity ${
              currentSlide === idx ? "bg-opacity-100" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;

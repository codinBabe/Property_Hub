"use client";
import { useState } from "react";

const testimonials = [
  {
    image: "/images/testimonials/user-3.png",
    name: "John Smith",
    country: "British",
    testimonial:
      "Absolutely incredible service! They made everything so smooth and hassle-free for me.",
  },
  {
    image: "/images/testimonials/user-5.png",
    name: "Jane Smith",
    country: "South African",
    testimonial:
      "I was able to find the perfect home for my family in no time. I am so grateful for the services provided by 9jaPropertyHub.",
  },
  {
    image: "/images/testimonials/user-1.png",
    name: "Tunde Martins",
    country: "Nigerian",
    testimonial:
      "9jaPropertyHub is a very good platform where you can see quality and affordable properties to buy. It is one of the best platform for real estate in Nigeria with qualified and experienced agents and developers that help in giving you the best.",
  },
  {
    image: "/images/testimonials/user-4.png",
    name: "Donald Doe",
    country: "Canadian",
    testimonial:
      "I was able to find the perfect home for my family in no time. I am so grateful for the services provided by 9jaPropertyHub.",
  },
  {
    image: "/images/testimonials/user-2.png",
    name: "John Doe",
    country: "American",
    testimonial:
      "This platform has made finding properties so much easier. I highly recommend their services to anyone looking for affordable homes.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="py-10 md:py-20 px-4 text-center font-sans">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        WHAT OUR CUSTOMERS SAY
      </h2>
      <p className="text-base md:text-lg mb-4">Our Customer’s Feedback.</p>
      <hr className="mx-auto w-16 md:w-20 border-border-color mb-8" />

      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Images Slider */}
        <div className="relative flex items-center justify-center gap-4">
          <button
            className="slider-btn absolute left-[-60px] md:left-[-80px] top-1/2 transform -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 border border-border-color rounded-full flex items-center justify-center"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
          >
            <img
              src="/images/icons/arrow-forward-black.svg"
              alt="Previous"
              className="rotate-180"
            />
          </button>

          <div className="flex gap-4 images-wrapper">
            {testimonials.map((testimonial, index) => (
              <img
                key={index}
                src={testimonial.image}
                alt={testimonial.name}
                onClick={() => setActiveIndex(index)}
                className={`${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>

          <button
            className="slider-btn absolute right-[-60px] md:right-[-80px] top-1/2 transform -translate-y-1/2 w-12 md:w-16 h-12 md:h-16 border border-border-color rounded-full flex items-center justify-center"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
          >
            <img src="/images/icons/arrow-forward-black.svg" alt="Next" />
          </button>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-xl md:max-w-3xl text-left">
          <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
            {testimonials[activeIndex].name}
          </h3>
          <p className="text-sm md:text-base text-text-color mb-4">
            {testimonials[activeIndex].testimonial}
          </p>
          <div className="author-info text-center">
            <p className="font-medium">{testimonials[activeIndex].name}</p>
            <p className="text-xs md:text-sm text-text-color">
              {testimonials[activeIndex].country}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

'use client';
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "A Simba",
    review: `I couldn't be happier at how my website turned out! A big thank you to Leo and the team at slick-site for being attentive and accommodating throughout the design process. I'm a small service-based business and finally have the perfect website to showcase my projects. Thanks again, Alawi.`,
  },
  {
    name: "S Dowey",
    review: `Over the moon with the website design, which I have no clue about but wasn’t worried one bit due to how convenient this company made me feel. Honestly just left him to it, and within a week, I had a fully designed website at affordable prices. Would recommend this company to anyone and will be from now on. Many thanks, Shane.`,
  },
  {
    name: "T Williams",
    review: `They did an amazing job of developing my website. They captured the essence of my photography and made it marketable to give me a wider audience. Amazing work.`,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#EDF2F4]">What Our Clients Say</h2>
      <div className="relative">
        {/* Testimonial Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition-transform transform duration-500 ease-in-out">
          <p className="text-xl italic text-gray-700 leading-relaxed">
            “{testimonials[currentIndex].review}”
          </p>
          <div className="mt-6">
            <p className="font-semibold text-lg text-gray-900">
              — {testimonials[currentIndex].name}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full p-3 shadow-md focus:outline-none focus:ring transition"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full p-3 shadow-md focus:outline-none focus:ring transition"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          ❯
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400 hover:bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

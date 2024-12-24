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

  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#EDF2F4]">What Our Clients Say</h2>
      <div className="relative overflow-hidden h-[500px] md:h-64 rounded-lg">
        {/* Testimonial Content */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <p className="text-xl italic text-gray-700 leading-relaxed">
                “{testimonial.review}”
              </p>
              <div className="mt-6">
                <p className="font-semibold text-lg text-gray-900">
                  — {testimonial.name}
                </p>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default TestimonialCarousel;

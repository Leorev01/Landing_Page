'use client'
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    imageUrl: "/images/projects/photographer.png", // Replace with actual image URLs
    height: 400, // Image height
  },
  {
    id: 2,
    imageUrl: "/images/projects/sjdroofing.png", // Replace with actual image URLs
    height: 350,
  },
  {
    id: 3,
    imageUrl: "/images/projects/surgemines.png", // Replace with actual image URLs
    height: 500,
  },
  {
    id: 4,
    imageUrl: "/images/projects/travelblog.png", // Replace with actual image URLs
    height: 450,
  },
  {
    id: 5,
    imageUrl: "/images/projects/webdev.png", // Replace with actual image URLs
    height: 400,
  },
]

const Projects = () => {
  return (
    <div className="py-10" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#EDF2F4] mb-4">Our Work</h2>
      </div>

      <div className="overflow-hidden">
        {/* Carousel Wrapper */}
        <motion.div
          className="flex space-x-8"
          animate={{
            x: ["0%", "-100%"], // Scroll to the left by 100%
          }}
          transition={{
            x: {
              repeat: Infinity,  // Infinite loop
              repeatType: "loop",
              duration: 20,  // Adjust this to control the scroll speed
              ease: "linear",  // Smooth scrolling
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 bg-gray-300 rounded-lg shadow-md overflow-hidden"
              style={{
                width: '300px', // Set fixed width for the carousel container
                height: '300px', // Set fixed height for the image container (same for all)
                overflow: 'hidden', // Ensure only the top part is visible initially
              }}
            >
              <motion.img
                src={project.imageUrl}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover transition-all duration-[2000ms]"
                style={{
                  objectPosition: 'top', // Align the image to the top initially
                }}
                whileHover={{
                  objectPosition: 'bottom', // Move the image to show the bottom part on hover
                }}
              />
            </motion.div>
          ))}
          {/* Duplicate the images to create a seamless loop */}
          {projects.map((project) => (
            <motion.div
              key={`duplicate-${project.id}`}
              className="flex-shrink-0 bg-gray-300 rounded-lg shadow-md"
              style={{
                width: '300px',
                height: '300px',
                overflow: 'hidden', // Ensure the duplicated images are hidden in the container
              }}
            >
              <img
                src={project.imageUrl}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Display projects in a grid */}
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 bg-gray-300 rounded-lg shadow-md overflow-hidden"
            style={{
              width: '100%', // Make sure it spans full width of the grid item
              height: '300px', // Set fixed height for all the images
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
                transition: {
                  duration: 2, // Slower hover transition (2 seconds)
                  ease: "easeInOut", // Smooth easing
                },
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects

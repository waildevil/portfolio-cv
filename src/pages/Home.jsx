// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const myImage = "/images/programming.jpg";

export default function Home() {
  return (
    <div className="px-6 py-16 flex flex-col gap-20">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 flex-grow">
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m Wail 👋
          </motion.h1>

          <motion.div
            className="text-2xl text-gray-700 mb-6 h-[32px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typewriter
              words={[
                "Backend Developer",
                "Java & Spring Boot Developer",
                "REST API Builder",
                "Learning Microservices",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.div>

          <motion.p
            className="text-gray-600 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            I build clean and scalable APIs using Java and Spring Boot. Currently exploring microservices,
            Docker, and cloud deployment to take my backend skills to the next level.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="/projects"
              className="px-6 py-3 bg-black text-white rounded-md font-semibold text-lg hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg"
            >
              View My Projects
            </a>
         
            <a
              href="https://jobboard-waildevil.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 text-white rounded-md font-semibold text-lg hover:bg-emerald-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Check Live Demo 🚀
            </a>
          </motion.div>
        </div>

        <motion.img
          src={myImage}
          alt="Wail illustration"
          className="w-[300px] h-[500px] object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        />
      </div>

      
      <motion.div
        className="bg-gray-100 p-8 rounded-lg text-center max-w-3xl mx-auto shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <h2 className="text-2xl font-bold mb-3">✨ Featured Project</h2>
        <p className="text-gray-700 mb-6">
          Explore my Full-Stack Job Board Platform — a complete application with React frontend,
          Spring Boot API, MySQL, Docker, and more.
        </p>
        <a
          href="https://jobboard-waildevil.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          Try the Live Demo
        </a>
      </motion.div>
    </div>
  );
}

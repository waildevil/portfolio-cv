import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const myImage = "/images/programming.jpg";

export default function Home() {
  return (
    <div className="flex flex-col h-full min-h-[calc(100vh-64px)]" style={{height:'300px'}}>
      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10 flex-grow">
        
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
                'Backend Developer',
                'Java & Spring Boot Developer',
                'REST API Builder',
                'Learning Microservices',
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
            className="mt-8 flex justify-center"
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
    </div>
  );
}

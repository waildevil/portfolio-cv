import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.div
      className="px-6 py-12 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-10">Professional Experience</h1>

      <div className="bg-white shadow-lg rounded p-6 space-y-3 border-l-4 border-black">
        <h2 className="text-xl font-semibold">Studentische Hilfskraft (HiWi)</h2>
        <p className="text-sm text-gray-600">FH Aachen — Germany | 2024</p>
        <p className="text-sm text-gray-800 leading-relaxed">
          Worked as a student assistant at FH Aachen, supporting university staff with various academic and technical tasks. 
          Responsibilities included documentation support, backend code reviews, and organizational assistance related to coursework and student platforms.
        </p>
      </div>
    </motion.div>
  );
}

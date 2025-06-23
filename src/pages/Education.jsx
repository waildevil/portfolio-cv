import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationList = [
    {
      logo: "/images/umi.jpg",
      school: "University Moulay Ismail Meknès - Morocco",
      years: "2018 – 2022",
      degree: "Bachelor’s degree, Mathematics and Computer Science",
    },
    {
      logo: "/images/fh-aachen.png",
      school: "FH Aachen - Germany",
      years: "2022 – 2024",
      degree: "Bachelor’s degree, Computer Software Engineering",
    },
  ];

  return (
    <motion.div
      className="px-6 py-12 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-12" style={{ marginTop: '50px' }}>EDUCATION</h1>

      <div className="flex flex-wrap justify-center gap-[200px]">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="w-[280px] text-center space-y-3"
          >
            <div className="w-44 h-44 rounded-full mx-auto shadow-2xl overflow-hidden">
              <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
            </div>
            <h2 className="font-semibold">{edu.school}</h2>
            <p className="text-sm">{edu.years}</p>
            <p className="text-sm">
              <span className="font-bold">Bachelor’s degree, </span>{edu.degree.split(',')[1]}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

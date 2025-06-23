import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="px-8 py-12 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <div className="text-gray-800 leading-relaxed text-sm sm:text-base space-y-4">

        <p>
          Hi, I’m <span className="font-semibold">Wail</span> — a passionate backend developer specializing in building
          reliable and maintainable REST APIs using <span className="font-semibold">Java</span> and{' '}
          <span className="font-semibold">Spring Boot</span>.
        </p>

        <p>
          I completed my Bachelor's degree in Applied Mathematics and Computer Science at{' '}
          <span className="font-semibold">FH Aachen</span>. Throughout my academic journey and personal projects,
          I’ve developed several applications such as an <span className="font-semibold">eCommerce Web App</span>,
          a <span className="font-semibold">Job Board API</span>, and a <span className="font-semibold">Student Management System</span>.
        </p>

        <p>
          My current tech stack includes: <span className="font-semibold">Java</span>,{' '}
          <span className="font-semibold">Spring Boot</span>, <span className="font-semibold">Spring Security</span>,{' '}
          <span className="font-semibold">MySQL</span>, <span className="font-semibold">JPA/Hibernate</span>,{' '}
          <span className="font-semibold">JWT</span>, <span className="font-semibold">Swagger/OpenAPI</span>,{' '}
          <span className="font-semibold">Git</span>, <span className="font-semibold">Postman</span>,{' '}
          <span className="font-semibold">Latex</span>.
        </p>

        <p>
          I’m currently diving deeper into <span className="font-semibold">Docker</span> and{' '}
          <span className="font-semibold">microservices architecture</span> to level up my backend skills for real-world deployment. 
          That includes splitting monolithic applications into independent services, handling service discovery, 
          and learning container orchestration with tools like <span className="font-semibold">Kubernetes</span>.
        </p>

        <p>
          Although I don't have professional experience yet, I treat every project with production-level discipline with clean code, documentation,
          consistent structure, and long-term maintainability in mind.
        </p>

        <p>
          I’m always learning, and I enjoy taking on new challenges that help me grow both technically and personally.
        </p>

        <p>
          I'm currently looking for my first professional opportunity as a backend developer, ideally in a team where I can contribute to real-world projects, grow technically, and gain hands-on experience
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="/Mohamed-Wail-Homan_CV.pdf"
            download
            className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300"
          >
            Download CV
          </a>
        </div>


      </div>
    </motion.div>
  );
}

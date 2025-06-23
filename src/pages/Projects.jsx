import React, { useState , useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const projectList = [

    {
      title: "Job Board API",
      image: "/images/jobboard.jpg",
      context: "A RESTful API built with Spring Boot for managing jobs, users, and applications",
      type: "Personal Project",
      date: "2025",
      github: "https://github.com/waildevil/job-board-api",
      details: [
        `The Job Board API is a personal project designed to enhance my backend development skills using modern technologies. 
        It is a RESTful API built with Spring Boot and Java that provides comprehensive management of jobs, users, and job applications. 
        The API supports secure JWT authentication with differentiated roles for Admin, Employer, and Candidate, ensuring proper access control throughout the platform. 
        Core functionalities include CRUD operations for job postings and applications, along with support for multipart file uploads to handle resumes and cover letters. 
        An admin dashboard aggregates key platform statistics to provide insights into usage and activity. 
        The API is powered by MySQL with JPA and Hibernate for efficient data persistence, and the entire application is containerized using Docker and Docker Compose to facilitate easy deployment and scalability. 
        The API is documented using Swagger (OpenAPI), making it straightforward to explore and integrate. 
        This project demonstrates a backend solution with a focus on security, modular design, and maintainability, reflecting real-world enterprise requirements.`],
      technologies: [ "Java","Spring Boot","Spring Security","Spring Data JPA","MySQL","Hibernate","JWT (jjwt)","Postman","Lombok","ModelMapper","Swagger (Springdoc OpenAPI)","Docker"]

    },
    {
      title: "E-Commerce WebApp",
      image: "/images/ecommerce.png",
      context: "Online platform for managing products, orders, and customers",
      type: "University Project",
      date: "2024",
      github: "https://github.com/waildevil/ecommerce-webapp",
      details: [
        "The E-Commerce Web App is a cutting-edge platform developed as part of my bachelor’s Praxisprojekt. It provides both end users and administrators with an intuitive and secure environment for online shopping and shop management. Built with modern web technologies, the application offers high performance, scalability, and reliable security. Key features include product management, shopping cart and order processing, as well as user and role management. The architecture is based on a Java Spring Boot backend combined with a React frontend and a MySQL database. Security is implemented via JWT authentication and role-based access control. The app is designed for future scalability, including microservices architecture and cloud deployment possibilities."],
      technologies: ["Java", "Spring Boot", "MySQL", "JWT", "Postman", "Hibernate", "ReactJs",
        "Spring Data JPA","Paypal core API", "Spring Security", "Bcrypt", "Intellij", "Spring Boot Starter Mail"]
    },
    {
      title: "Human resources WebApp",
      image: "/images/hrm.jpg",
      context: "HR management app for employees, recruitement, training and internships.",
      type: "University Project",
      date: "Summer 2021",
      github: "https://github.com/waildevil/GRH",
      details: `The Human Resources Management (GRH) application was developed as part of my second-year Bachelor studies in Computer Engineering at Moulay Ismaïl University, Morocco. This four-month project allowed me to apply theoretical knowledge through the design and development of an application dedicated to managing a company’s human resources.
                The project aims to facilitate both HR administrators and employees by providing tools to manage payroll, labor law compliance, contracts, career development, recruitment, and training within the organization. GRH activities are essential for mobilizing and developing human capital to enhance organizational performance.
                In today’s globalized economy, companies face growing demands for efficiency and competitiveness. This application supports these needs by introducing modern management practices and streamlining communication within the company, adhering to organizational hierarchies and improving transversal collaboration.`,
      technologies: ["Java", "MySQL", "Html/Css/Js", "Thymeleaf", "jQuery", "Eclipse"]
    }
    
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="flex flex-wrap justify-start gap-[40px] w-full max-w-[980px] mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="w-[300px] h-[430px] bg-white shadow-[8px_8px_15px_rgba(0,0,0,0.25)] rounded overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-[1.05] hover:shadow-[12px_12px_20px_rgba(0,0,0,0.3)]"
          >
            <div className="bg-black text-white text-center py-2 font-semibold text-sm">
              {project.title}
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-2 text-xs flex flex-col flex-grow justify-between font-sans">
              <div>
                <p className="mb-3"><strong>Context:</strong> {project.context}</p>
                <p className="mb-3"><strong>Date:</strong> {project.date}</p>
                <p><strong>Type:</strong> {project.type}</p>
              </div>
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1 bg-black text-white rounded text-sm hover:bg-gray-800"
                >
                  Show More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-xl p-6 rounded shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="mb-4 rounded w-full h-48 object-cover" />
            <p className="mb-2"><strong>Context:</strong> {selectedProject.context}</p>
            <div className="mb-4">
              <strong>Details:</strong>
              <p className="mt-1 text-sm">{selectedProject.details}</p>
            </div>
            <div className="mb-4">
              <strong>Technologies:</strong>
              <ul className="flex flex-wrap gap-2 mt-1">
                {selectedProject.technologies?.map((tech, idx) => (
                  <li key={idx} className="px-2 py-1 bg-gray-200 text-sm rounded">{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between mt-6">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
              >
                View on GitHub
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-gray-300 text-sm rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

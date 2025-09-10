import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "Job Board Platform (Full-Stack)",
      image: "/images/jobboard.png",
      context: "End-to-end hiring platform: React frontend + Spring Boot API + MySQL",
      type: "Personal Project",
      date: "2025",
      githubRepo: "https://github.com/waildevil/job-board-frontend",
      liveLink: "https://jobboard-waildevil.vercel.app/",
      detailsText:
        "A complete job marketplace built across a modern full-stack. React frontend (Vite + Tailwind) + Spring Boot backend with JWT auth and role-based dashboards. MySQL persistence, Docker Compose for deployment. Supports job CRUD, 3-step applications (contact, CV, cover letter), admin dashboard with stats, Swagger docs.",
      technologies: [
        "React","Vite","Tailwind CSS","React Router","Axios","React Hook Form",
        "Java","Spring Boot","Spring Security","Spring Data JPA","MySQL","Hibernate","JWT",
        "Swagger (Springdoc OpenAPI)","Docker","Docker Compose",
      ],
    },
    {
      title: "Job Board API",
      image: "/images/jobboard.jpg",
      context: "A RESTful API built with Spring Boot for managing jobs, users, and applications",
      type: "Personal Project",
      date: "2025",
      githubRepo: "https://github.com/waildevil/job-board-api",
      detailsText:
        "Backend API for managing jobs, users, and job applications. Supports JWT authentication (Admin, Employer, Candidate roles), CRUD operations, multipart uploads, admin statistics, Swagger docs, MySQL persistence, Docker/Compose deployment.",
      technologies: [
        "Java","Spring Boot","Spring Security","Spring Data JPA","MySQL","Hibernate","JWT (jjwt)","Postman","Lombok","ModelMapper","Swagger (Springdoc OpenAPI)","Docker",
      ],
    },
    {
      title: "E-Commerce WebApp",
      image: "/images/ecommerce.png",
      context: "Online platform for managing products, orders, and customers",
      type: "University Project",
      date: "2024",
      githubRepo: "https://github.com/waildevil/ecommerce-webapp",
      detailsText:
        "Web shop for products, cart, orders, and user management. Built with Spring Boot backend + React frontend + MySQL database. Secure with JWT + role-based access. Supports payments, mail notifications, scalability toward microservices/cloud.",
      technologies: [
        "Java","Spring Boot","MySQL","JWT","Postman","Hibernate","ReactJs","Spring Data JPA","Paypal core API","Spring Security","Bcrypt","Intellij","Spring Boot Starter Mail",
      ],
    },
    {
      title: "Human Resources WebApp",
      image: "/images/hrm.jpg",
      context: "HR management app for employees, recruitment, training and internships.",
      type: "University Project",
      date: "Summer 2021",
      githubRepo: "https://github.com/waildevil/GRH",
      detailsText:
        "HRM system for payroll, contracts, recruitment, training, and employee development. Built during Bachelor studies at Moulay Ismaïl University. Improves efficiency and communication inside the company.",
      technologies: ["Java","MySQL","HTML/CSS/JS","Thymeleaf","jQuery","Eclipse"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <motion.div
      className="p-6" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

      <div className="flex flex-wrap justify-start gap-[40px] w-full max-w-[1100px] mx-auto mb-16">
        {projectList.map((project, idx) => (
          <article
            key={idx}
            className="w-[300px] h-[430px] bg-white shadow-[8px_8px_15px_rgba(0,0,0,0.25)] rounded overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.05] hover:shadow-[12px_12px_20px_rgba(0,0,0,0.3)]"
          >
            <header className="bg-black text-white text-center py-2 font-semibold text-sm">
              {project.title}
            </header>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
              loading="lazy"
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
          </article>
        ))}
      </div>

      
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white w-full max-w-xl p-6 rounded shadow-lg overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="mb-4 rounded w-full h-48 object-cover"
            />
            <p className="mb-2"><strong>Context:</strong> {selectedProject.context}</p>
            <div className="mb-4">
              <strong>Details:</strong>
              <p className="mt-1 text-sm whitespace-pre-line">{selectedProject.detailsText}</p>
            </div>
            <div className="mb-4">
              <strong>Technologies:</strong>
              <ul className="flex flex-wrap gap-2 mt-1">
                {selectedProject.technologies?.map((t, i) => (
                  <li key={i} className="px-2 py-1 bg-gray-200 text-sm rounded">{t}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {selectedProject.githubRepo && (
                <a
                  href={selectedProject.githubRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
                >
                  View on Github
                </a>
              )}
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
                >
                  View Live Demo
                </a>
              )}
            </div>

            <div className="mt-6 flex justify-end">
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

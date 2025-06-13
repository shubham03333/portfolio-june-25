import React, { useState } from "react";
import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import hmsImg from "../assets/rto.png";
import sbmImg from "../assets/sbm1.jpg";
import awsdeployImg from "../assets/awsdeploy.png";
import websiteImg from "..//assets/websiteImg.png";
import { FolderKanban } from "lucide-react";

const projects = [
  {
    title: "RTO Management System",
    tech: "ReactJS, Spring Boot, Spring Data JPA, MySQL, AWS",
    description:
      "The RTO Management System is designed following SOLID design principles, facilitating efficient RTO operations and streamlined communication among staff. The project consists of a React.js frontend and a Spring Boot backend, with MySQL as the database.",
    image: hmsImg,
    // github: "https://github.com/Vishalvj13/hospital-management-system",
  },
  //   {
  //     title: "Quiz Management Microservices using Spring Boot & Spring Cloud",
  //     tech: "Spring Boot, Spring Cloud, REST APIs, Eureka Service Registry & Discovery, API Gateway, Load Balancing, Java, Maven, Postman",
  //     description:
  //       "The Quiz-Question system is architected using Spring Boot microservices and leverages Spring Cloud components for scalability and maintainability. Inter-service communication is enabled between the Quiz and Question service via Feign Client, with Eureka Service Registry facilitating dynamic service discovery. An API Gateway (Spring Cloud Gateway) is implemented to handle centralized routing, load balancing, and request forwarding across services.",
  //     image: sbmImg,
  //     // github: "https://github.com/Vishalvj13/microservices-spring-boot",
  //   },
  //   {
  //     title:
  //       "End-to-End Deployment of Employee Management System on AWS using Spring Boot, ReactJS, and MySQL with EC2, S3, and RDS",
  //     tech: "AWS, EC2, S3, RDS, Java, Spring Boot, REST APIs, ReactJS, MySQL",
  //     description:
  //       "The Employee Management System leverages a cloud-native AWS architecture for optimal scalability and reliability. The Spring Boot backend runs on Amazon EC2 offering complete control over the compute environment, the ReactJS frontend is hosted on Amazon S3 as a static website and delivered globally using Amazon CloudFront, a content delivery network (CDN) that ensures low-latency and high-speed access. Amazon RDS (MySQL) is used for reliable and scalable relational data storage, with features like automated backups, monitoring, and high availability. IAM ensures secure access control, enabling a fully integrated, secure, and efficient deployment.",
  //     image: awsdeployImg,
  //     github:
  //     //   "https://github.com/Vishalvj13/reat.js-springboot-mysql-aws-deployment",
  //   },
  {
    title:
      "A responsive, animated live portfolio website designed to showcase my personal brand, technical skills, projects, experience, and certifications in an engaging and modern format.",
    tech: "ReactJS, JS, HTML, CSS, react-libraries",
    description:
      "This portfolio serves as a dynamic digital resume, built to highlight my professional journey and achievements with smooth animations and clean design. The site features sections like About, Skills, Projects, Experience, Education, and Contact all crafted with interactive elements. It’s a central hub for recruiters and collaborators to view my credentials and work at a glance.",
    image: websiteImg,
    // github: "https://github.com/Vishalvj13/portfolio-vishal",
  },
];

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);
  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container-wrapper">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FolderKanban size={30} className="iconP" />
          Personal Projects
        </motion.h2>
        <div className="title-underline"></div>
        <br />
        <br />
        <br />

        <motion.div
          className="projects-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="project-card-content">
                <div
                  className="project-image-wrapper"
                  onClick={() => openModal(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="carousel-image"
                  />
                </div>

                <div className="project-info">
                  <h1 className="project-title">{project.title}</h1>
                  <i>
                    <strong>
                      <p className="project-tech">{project.tech}</p>
                    </strong>
                  </i>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub size={40} color="#000000" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {modalImage && (
          <div className="project-modal" onClick={closeModal}>
            <img src={modalImage} alt="Zoomed Project" />
            <span className="project-modal-close" onClick={closeModal}>
              ×
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

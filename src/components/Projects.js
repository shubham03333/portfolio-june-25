import React, { useState } from "react";
import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import hmsImg from "../assets/rto.png";
import DBDASH from "../assets/DBDASH.png";
import GGDASH from "../assets/GGDASH.png";
import Media from "../assets/Media.jpg";
import websiteImg from "..//assets/websiteImg.png";
import { FolderKanban } from "lucide-react";

const projects = [
        {
      title:
        "Cafe Management Web app",
      tech: "NextJs, REST APIs, ReactJS, Linux, Mysql, AWS",
      description:
        "Developed a Cafe Management Web App for Cafe Adda, Tuljapur using Next.js, MySQL, and AWS. Designed to digitize daily operations with secure login, role-based access, and digital menu control. Includes online ordering, sales analytics, inventory tracking, and mobile-responsive UI. Replaced manual processes with automation and improved customer experience. Gained hands-on experience in full-stack development, cloud deployment, and solving real business challenges.",
      image: Media,
      // github:
      //   "https://github.com/Vishalvj13/reat.js-springboot-mysql-aws-deployment",
    },
      {
      title:
        "GGCommandCenter",
      tech: "Java, Spring Boot, REST APIs, ReactJS, Linux, shell scripting",
      description:
        "Created GGCommandCenter, a multi-server GoldenGate monitoring tool used daily at Amdocs. Built with Spring Boot, React, and Shell Script to centralize control in one browser window. Offers real-time process tracking, replication lag checks, and one-click management across 40+ servers. Features dynamic search, visual alerts, and scalable dashboards for fast troubleshooting. Reduced multi-server management time from hours to minutes, enabling proactive DBA operations.",
      image: GGDASH,
      // github:
      //   "https://github.com/Vishalvj13/reat.js-springboot-mysql-aws-deployment",
    },
    {
      title: "Oracle DB Health Monitor",
      tech: "Spring Boot, REST APIs, Java, Maven, Postman",
      description:
        "Developed a fullstack Oracle DB monitoring tool to automate health checks and reduce manual effort. Built with React, Spring Boot, Shell Script, and SQL for real-time performance insights. Features include dashboards for memory, sessions, tablespace, and top SQL analysis. Enables proactive issue detection with automated alerts and intuitive UI.Widely adopted at Amdocs, significantly improving DBA efficiency.",
      image: DBDASH,
      // github: "https://github.com/Vishalvj13/microservices-spring-boot",
    },

  {
    title: "RTO Management System",
    tech: "ReactJS, Spring Boot, Spring Data JPA, MySQL, AWS",
    description:
      "The RTO Management System is designed following SOLID design principles, facilitating efficient RTO operations and streamlined communication among staff. The project consists of a React.js frontend and a Spring Boot backend, with MySQL as the database.",
    image: hmsImg,
    github: "https://github.com/shubham03333/rto-management-system-FE.git",
  },
  
  {
    title:
      "My portfolio",
    tech: "ReactJS, JS, HTML, CSS, react-libraries",
    description:
      "This portfolio serves as a dynamic digital resume, built to highlight my professional journey and achievements with smooth animations and clean design. The site features sections like About, Skills, Projects, Experience, Education, and Contact all crafted with interactive elements. It’s a central hub for recruiters and collaborators to view my credentials and work at a glance.",
    image: websiteImg,
    github: "https://github.com/shubham03333/portfolio-june-25.git",
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

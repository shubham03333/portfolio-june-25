import React from 'react';
import '../styles/Skills.css';
import { motion } from 'framer-motion';
import { MdApi } from "react-icons/md";
import { VscSourceControl } from "react-icons/vsc";
import { FaProjectDiagram, FaSyncAlt, FaCubes } from 'react-icons/fa';
import {
    SiApachemaven,
    SiJenkins,
    SiCss3,
    SiSpring,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiSpringboot,
    SiReact,
    SiGit,
    SiDocker,
    SiJira, SiPostman, SiMongodb, SiGithub, SiJirasoftware
} from "react-icons/si";
import {Cpu} from "lucide-react";

const categoryDisplayNames = {
    Languages: 'Programming Languages & Libraries',
    Frameworks: 'Frameworks & APIs',
    Databases: 'Databases',
    Tools: 'Tools & Platforms',
    Dev: 'DevOps Tools',
    Practices: 'Practices',
};

const skillsData = {
    Languages: [
        { name: 'Java', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /> },
        { name: 'HTML 5', icon: <SiHtml5 size={60} color="#e34f26" /> },
        { name: 'CSS 3', icon: <SiCss3 size={60} color="#1572B6" /> },
        { name: 'JavaScript', icon: <SiJavascript size={60} color="#f7df1e" /> },
        { name: 'ReactJS', icon: <SiReact size={60} color="#61DBFB" /> },
    ],
    Databases: [
        { name: 'MySQL', icon: <SiMysql size={60} color="#00758f" /> },
        { name: 'NoSQL', icon: <SiMongodb size={60} color="#47A248" /> },
    ],
    Frameworks: [
        { name: 'Spring Boot', icon: <SiSpringboot size={60} color="#6db33f" /> },
        { name: 'Spring Framework', icon: <SiSpring size={60} color="#6db33f" /> },
        { name: 'Spring MVC', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring MVC" /> },
        { name: 'Hibernate', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" alt="Hibernate" /> },
        { name: 'RESTful APIs', icon: <MdApi size={60} color="#4B5563" /> },
        { name: 'SOAP', icon: <MdApi size={60} color="#0078D4" /> },
    ],
    Tools: [
        { name: 'Maven', icon: <SiApachemaven size={60} color="#C71A36" /> },
        { name: 'Jira', icon: <SiJira size={60} color="#0052CC" /> },
        { name: 'Perforce', icon: <VscSourceControl size={60} color="#005CAB" /> },
        { name: 'Postman', icon: <SiPostman size={60} color="#FF6C37" /> },
    ],
    Dev: [
        { name: 'AWS', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" /> },
        { name: 'Docker', icon: <SiDocker size={60} color="#0db7ed" /> },
        { name: 'Git', icon:<SiGit size={60} color="#f1502f" /> },
        { name: 'Github', icon: <SiGithub size={60} color="#181717" /> },
        { name: 'Jenkins', icon: <SiJenkins size={60} color="#d33833" /> },
    ],
    Practices: [
        { name: 'OOP', icon: <FaProjectDiagram size={60} color="#8A2BE2" /> },
        { name: 'SOLID', icon: <FaCubes size={60} color="#4B0082" /> },
        { name: 'SDLC', icon:<FaSyncAlt size={60} color="#5A7D9A" /> },
        { name: 'Agile/Scrum', icon: <SiJirasoftware size={60} color="#0052CC" /> },
    ],
};

const getDynamicHorizontalPadding = (skillCount) => {
    if (skillCount <= 4) return 96; // 6rem
    if (skillCount <= 6) return 64; // 4rem
    if (skillCount <= 8) return 32; // 2rem
    return 16; // 1rem
};


const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <motion.div
                className="skills-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="skills-title">
                    <Cpu size={30} className="iconS" />
                    Skills
                </h2>
                <div className="title-underline"></div>
                <br/><br/>

                {Object.keys(skillsData).map((category) => {
                    const skillCount = skillsData[category].length;
                    const horizontalPadding = getDynamicHorizontalPadding(skillCount);

                    return (
                        <div
                            key={category}
                            className="skill-category"
                            style={{ paddingLeft: `${horizontalPadding}px`, paddingRight: `${horizontalPadding}px` }}
                        >
                            <h3 className="skill-category-title">{categoryDisplayNames[category] || category}</h3>
                            <div className="skill-icons">
                                {skillsData[category].map((skill, idx) => (
                                    <div className="skill-item" key={idx}>
                                        <span className="skill-icon">{skill.icon}</span>
                                        <strong><span className="skill-label">{skill.name}</span></strong>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}


            </motion.div>
        </section>
    );
};

export default Skills;

import React from "react";
import "../styles/Experience.css";
import amdocsLogo from "../assets/amdocsLogo.png";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Software Engineer",
    company: "Amdocs",
    logo: amdocsLogo,
    date: "Jan 2024 - Present",
    client: "Client: South Africa & UK Based",
    responsibilities: [
      "PMX Upgrade: Executed the PMX upgrade for AMSS (Amdocs Multi Self Service Channel), enhancing integration with CES and third-party applications, reducing deployment issues up to 25%.",
      "Security Enhancements: Resolved 100+ security vulnerabilities in Checkmarx, mitigating critical threats such as XSS, Cleartext Password Exposure, and other high-risk vulnerabilities, strengthening customer data security",
      "CRM Optimization & Enterprise Solutions: Developed and implemented customized CRM systems, to align with client-specific organizational workflows, enhancing process efficiency by 15% and improving user adoption by 15%.",
      "Seamless Data Flow: Collaborated with OMS, ABP (Billing), and DEX (Digital) applications to maintain seamless data flow and achieve zero API failures",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Amdocs",
    logo: amdocsLogo,
    date: "May 2022 - Dec 2023",
    client: "Client: UK Based",
    responsibilities: [
      "CRM Optimization & Enterprise Solutions: Developed and implemented customized CRM systems, to align with client-specific organizational workflows, enhancing process efficiency by 15% and improving user adoption by 15%.",
      "Seamless Data Flow: Collaborated with OMS, ABP (Billing), and DEX (Digital) applications to maintain seamless data flow and achieve zero API failures.",
      "Improved performance and scalability of core telecom services, ensuring consistent and reliable service delivery.",
      "Collaborated in Agile Scrum teams with QA, DevOps, and Infra, contributing to sprint planning, reviews, and retrospectives.",
      "Conducted unit testing with JUnit and integration testing using Postman and console-based EJB simulators.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="timeline-section">
      <br />
      <h2 className="timeline-title">
        <Briefcase size={30} className="iconE" />
        Experience
      </h2>
      <div className="title-underline"></div>
      <br />
      <br />
      <br />
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experienceData.map((item, idx) => (
          <motion.div
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="timeline-left">
              <div className="flip-card">
                <div className="flip-card-inner-wrapper">
                  <div className="flip-card-inner">
                    <div className="flip-card-front experience-card">
                      <div className="role-company-stack">
                        <h3>{item.role}</h3>
                        <h4>{item.company}</h4>
                      </div>
                      <div>
                        <h4>{item.client}</h4>
                      </div>
                    </div>
                    <div className="flip-card-back experience-card">
                      <h4>Responsibilities:</h4>
                      <ul>
                        {item.responsibilities.map((res, i) => (
                          <li key={i}>{res}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-middle">
              <div className="timeline-icon">
                <img src={item.logo} alt={`${item.company} logo`} />
              </div>
            </div>
            <div className="timeline-right">
              <span>{item.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

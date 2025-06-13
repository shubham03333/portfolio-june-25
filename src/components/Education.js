import React from "react";
import "../styles/Education.css";
import { GraduationCap } from "lucide-react";
import { PiStudent } from "react-icons/pi";
import { FaSchool, FaUserGraduate } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

const educationData = [
  {
    degree: "PG-Diploma",
    fullDegree: "Post Graduation Diploma in Advanced Computing (PG-DAC), IT",
    institution: "SunBeam Institute of Information Technology, Pune-Karad",
    year: "2021 - 2022",
    grade: "Percentage: 79%",
    icon: <FaUserGraduate style={{ color: "#4A90E2", fontSize: "4rem" }} />,
  },
  {
    degree: "Graduation",
    fullDegree: "Bachelor of Engineering",
    institution: "Dr. Daulatra Aher College of Engineering, Karad )",
    year: "2016 - 2019",
    grade: "Percentage: 70%",
    icon: <GiGraduateCap style={{ color: "#3F72AF", fontSize: "4rem" }} />,
  },
  {
    degree: "Diploma",
    fullDegree: "MSBTE",
    institution: "SSIET Ghogaon",
    year: "2013 - 2016",
    grade: "Percentage: 82%",
    icon: <FaSchool style={{ color: "#112D4E", fontSize: "4rem" }} />,
  },
  {
    degree: "SSC",
    fullDegree: "Secondary School Certificate",
    institution: "Mahatma Gandhi Vidyalaya, Kale",
    year: "2012 - 2013",
    grade: "Percentage: 82%",
    icon: <PiStudent style={{ color: "#3F3D56", fontSize: "4rem" }} />,
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="education-title">
          <GraduationCap size={30} className="iconEd" />
          Education
        </h2>
        <div className="title-underline"></div>
        <div className="education-horizontal-stack">
          {educationData.map((edu, index) => (
            <div className="edu-flip-card" key={index}>
              <div className="edu-flip-inner">
                <div className="edu-front">
                  <div className="edu-icon">{edu.icon}</div>
                  <h3>{edu.degree}</h3>
                </div>
                <div className="edu-back">
                  <h3>{edu.fullDegree}</h3>
                  <div className="institution">{edu.institution}</div>
                  <div className="year">{edu.year}</div>
                  <div className="grade">{edu.grade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

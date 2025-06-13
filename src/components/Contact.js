import React from "react";
import "../styles/Contact.css";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">
        <Mail size={30} className="iconC" />
        Get in touch
      </h2>
      <div className="title-underline"></div>
      <br />
      <br />
      <br />
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="contact-message">
          🚀 "Excited for new adventures! Got a cool project or just want to say
          hey? Don’t be shy drop me a message and let’s connect!"
        </p>

        <div className="contact-icons">
          <a
            href="mailto:shubhamja3333@gmail.com"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-jadhav-sj/"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/shubham03333"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

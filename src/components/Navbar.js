import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import {
    Menu, X, Home, User, Brain, FolderKanban, GraduationCap, Mail, Briefcase
} from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.4, // triggers when 40% of section is visible
                rootMargin: '0px 0px -30% 0px',
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);



    const links = [
        { to: 'home', icon: <Home />, label: 'Home' },
        { to: 'about', icon: <User />, label: 'About' },
        { to: 'experience', icon: <Briefcase />, label: 'Experience' },
        { to: 'skills', icon: <Brain />, label: 'Skills' },
        { to: 'projects', icon: <FolderKanban />, label: 'Projects' },
        { to: 'education', icon: <GraduationCap />, label: 'Education' },
        { to: 'contact', icon: <Mail />, label: 'Contact' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {links.map((link, idx) => (
                        <li key={idx} onClick={closeMenu}>
                            <Link
                                to={link.to}
                                smooth
                                duration={500}
                                offset={-70}
                                className={activeSection === link.to ? 'active' : ''}
                            >
                                <span className="icon">{link.icon}</span> {link.label}
                            </Link>
                        </li>

                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

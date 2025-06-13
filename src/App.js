import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
    return (
        <div className="min-h-screen font-sans bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <Home />
                <About/>
                <Experience/>
                <Skills/>
                <Projects/>
                <Education/>
                <Contact/>
                <Footer/>
            </div>
            <ScrollToTopButton />
        </div>
    );
}
export default App;
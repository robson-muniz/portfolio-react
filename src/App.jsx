import './App.css';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function App() {
    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <Navbar />
            <Hero />

            {/* Projects Section */}
            <Projects />

            <section id="contacts" className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        Contact Section
                    </h2>
                    <p className="text-slate-400">Coming next...</p>
                </div>
            </section>
        </div>
    );
}

import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import {useEffect, useState} from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";

function App() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, [])
    
    return <div className={`App ${isLoaded ? "loaded" : ""}`}>
        <Navbar />
        <Hero />
        <Projects />
        <Contact />

        <motion.footer
            className='footer'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{once: true}}
            transition={{duration: 0.6}}
        />
            <p>&copy; Robson Muniz. All rights reserved.</p>
        </motion.footer>
    </div>
}

export default App

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills";
import Contact from "./components/Contact.jsx";
import "./index.css";

function App() {
    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <Navbar />
            <Hero />

            {/* Divider between Hero and Projects */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent my-10" />

            <Projects />

            {/* Divider between Projects and Skills */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent my-10" />

            <Skills />

            {/* Divider between Skills and Contact */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent my-10" />

            <Contact />
        </div>
    );
}

export default App;

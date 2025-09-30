import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css"


 function App() {
    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <Navbar />
            <Hero />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
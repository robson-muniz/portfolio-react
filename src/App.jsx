
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
    return <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />

        <>
            <p>&copy; Robson Muniz. All rights reserved.</p>
        </>
    </div>
}

export default App

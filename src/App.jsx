import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SmoothScroll from "./components/SmoothScroll";
import BackToTop from "./components/BackToTop";
import Hero from "./components/sections/Hero";
import FeaturedWork from "./components/sections/FeaturedWork";
import SelectedWork from "./components/sections/SelectedWork";
import About from "./components/sections/About";
import Stack from "./components/sections/Stack";
import Contact from "./components/sections/Contact";

function App() {
    return (
        <ErrorBoundary>
            <SmoothScroll>
                <a className="skip-link" href="#main">
                    Skip to content
                </a>
                <Navbar />
                <main id="main">
                    <Hero />
                    <section id="work">
                        <FeaturedWork />
                        <SelectedWork />
                    </section>
                    <About />
                    <Stack />
                    <Contact />
                </main>
                <Footer />
                <BackToTop />
            </SmoothScroll>
        </ErrorBoundary>
    );
}

export default App;

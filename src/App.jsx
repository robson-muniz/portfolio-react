// App.jsx - Professional version
import { useState, useEffect, lazy, Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import SmoothScroll from './components/SmoothScroll'
import BackgroundEffects from './components/BackgroundEffects'
import BackToTop from './components/BackToTop'

// Lazy load components
const Hero = lazy(() => import('./components/Hero'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const SectionDivider = lazy(() => import('./components/SectionDivider'))

// Simple fallback component
const SectionFallback = () => (
    <div className="h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
);

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const init = async () => {
            // Wait for fonts to load
            await document.fonts.ready;

            // Small delay for better UX
            setTimeout(() => setLoading(false), 600);
        };

        init();
    }, [])

    if (loading) {
        return <LoadingScreen />
    }

    return (
        <ErrorBoundary>
            <SmoothScroll>
                <BackgroundEffects />
                <div className="relative min-h-screen">
                    <Navbar />

                    <main className="relative z-10">
                        {/* Hero Section */}
                        <Suspense fallback={<SectionFallback />}>
                            <Hero />
                        </Suspense>

                        {/* Divider */}
                        <Suspense fallback={null}>
                            <SectionDivider index={0} />
                        </Suspense>

                        {/* Projects */}
                        <Suspense fallback={<SectionFallback />}>
                            <Projects />
                        </Suspense>

                        {/* Divider */}
                        <Suspense fallback={null}>
                            <SectionDivider index={1} />
                        </Suspense>

                        {/* Skills */}
                        <Suspense fallback={<SectionFallback />}>
                            <Skills />
                        </Suspense>

                        {/* Divider */}
                        <Suspense fallback={null}>
                            <SectionDivider index={2} />
                        </Suspense>

                        {/* Contact */}
                        <Suspense fallback={<SectionFallback />}>
                            <Contact />
                        </Suspense>

                        {/* Footer */}
                        <Suspense fallback={null}>
                            <Footer />
                        </Suspense>
                    </main>

                    <BackToTop />
                </div>
            </SmoothScroll>
        </ErrorBoundary>
    )
}

export default App
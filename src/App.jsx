import { useState, useEffect, lazy, Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import SmoothScroll from './components/SmoothScroll'
import BackgroundEffects from './components/BackgroundEffects'
import BackToTop from './components/BackToTop'
import SectionDivider from './components/SectionDivider'

// Lazy load heavy components
const Hero = lazy(() => import('./components/Hero'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Preload critical assets
        const preloadAssets = async () => {
            // Preload hero image
            const heroImg = new Image()
            heroImg.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80'

            // Wait for fonts to load
            await document.fonts.ready

            // Add a small delay for better UX
            setTimeout(() => {
                setLoading(false)
            }, 800)
        }

        preloadAssets()
    }, [])

    if (loading) {
        return <LoadingScreen />
    }

    return (
        <ErrorBoundary>
            <SmoothScroll>
                <BackgroundEffects />
                <div className="relative">
                    <Navbar />
                    <main className="relative z-10">
                        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                            <Hero />
                        </Suspense>
                        <SectionDivider index={0} />
                        <Suspense fallback={<div className="h-96" />}>
                            <Projects />
                        </Suspense>
                        <SectionDivider index={1} />
                        <Suspense fallback={<div className="h-96" />}>
                            <Skills />
                        </Suspense>
                        <SectionDivider index={2} />
                        <Suspense fallback={<div className="h-96" />}>
                            <Contact />
                        </Suspense>
                        <SectionDivider index={3} />
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
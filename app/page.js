'use client'

import { lazy, Suspense } from 'react'
import LoadingScreen from './components/LoadingScreen'

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/Hero'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))
const SectionDivider = lazy(() => import('./components/SectionDivider'))

// Simple fallback component
const SectionFallback = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function Home() {
  return (
    <>
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
    </>
  )
}

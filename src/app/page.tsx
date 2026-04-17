"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function LuisHueichaWeb() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] font-sans overflow-x-hidden selection:bg-[#3b82f6] selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#06b6d4]/20 rounded-full blur-3xl animate-pulse delay-75" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#10b981]/20 rounded-full blur-3xl animate-pulse delay-150" />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#f59e0b]/20 rounded-full blur-3xl animate-pulse delay-300" />
        </div>

        {/* Background mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_var(--tw-gradient-stops))] from-[#1e3a8a] via-[#0a0a0f] to-[#0a0a0f]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-16">
          <div className="inline-block mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500" />
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#94a3b8] tracking-tight relative z-10">
              Luis Hueicha
            </h1>
          </div>
          
          <p className="text-2xl md:text-4xl lg:text-5xl text-[#94a3b8] font-light mb-12">
            Ingeniero Civil en Obras Civiles • <span className="text-[#3b82f6]">Máster en Ingeniería Geotécnica</span>
          </p>
          
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div 
              className="flex items-center gap-3 bg-[#1e293b]/60 backdrop-blur-md border border-[#3b82f6]/30 px-6 py-3 rounded-2xl hover:bg-[#1e293b]/80 hover:border-[#3b82f6]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3b82f6]/20 group cursor-default"
              onMouseEnter={() => setHoveredCard("location")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`p-2 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] transition-transform duration-500 ${hoveredCard === "location" ? "scale-110 rotate-12" : ""}`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[#94a3b8] text-sm">Ubicación</p>
                <p className="text-white font-semibold">Coyhaique, Aysén, Chile</p>
              </div>
            </div>

            <div 
              className="flex items-center gap-3 bg-[#1e293b]/60 backdrop-blur-md border border-[#06b6d4]/30 px-6 py-3 rounded-2xl hover:bg-[#1e293b]/80 hover:border-[#06b6d4]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#06b6d4]/20 group cursor-default"
              onMouseEnter={() => setHoveredCard("status")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`p-2 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] transition-transform duration-500 ${hoveredCard === "status" ? "scale-110 -rotate-12" : ""}`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[#94a3b8] text-sm">Disponibilidad</p>
                <p className="text-white font-semibold">Abierto a oportunidades</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#3b82f6]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_#3b82f6_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,_#06b6d4_0%,_transparent_50%)]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] mb-8 shadow-2xl shadow-[#3b82f6]/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">Mí</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] mx-auto rounded-full" />
            <p className="text-xl text-[#94a3b8] mt-8 max-w-2xl mx-auto">
              Ingeniero civil con pasión por las obras civiles y la geotécnia
            </p>
          </div>

          <div className="bg-[#1e293b]/80 backdrop-blur-xl rounded-3xl p-10 md:p-16 hover:shadow-3xl hover:shadow-[#3b82f6]/10 transition-all duration-700 border border-[#3b82f6]/20">
            <p className="text-[#e2e8f0] text-lg leading-relaxed mb-8">
              Ingeniero Civil especializado en obras civiles con un Máster en Ingeniería Geotécnica. 
              Apasionado por la construcción sostenible y el desarrollo de infraestructuras resilientes.
              Actualmente colaboro en proyectos de desarrollo tecnológico que transforman la gestión 
              de laboratorios y la ingeniería civil.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div 
                className="group relative"
                onMouseEnter={() => setHoveredCard("experience")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-[#06b6d4]/10 rounded-2xl transition-opacity duration-300 ${hoveredCard === "experience" ? "opacity-100" : "opacity-0"}`} />
                <div className="relative bg-[#0f172a] rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[#94a3b8] text-sm mb-2">Experiencia</p>
                  <p className="text-2xl font-bold text-white">10+ años</p>
                </div>
              </div>

              <div 
                className="group relative"
                onMouseEnter={() => setHoveredCard("specialization")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[#06b6d4]/10 to-[#0891b2]/10 rounded-2xl transition-opacity duration-300 ${hoveredCard === "specialization" ? "opacity-100" : "opacity-0"}`} />
                <div className="relative bg-[#0f172a] rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <p className="text-[#94a3b8] text-sm mb-2">Especialización</p>
                  <p className="text-2xl font-bold text-white">Geotécnia</p>
                </div>
              </div>

              <div 
                className="group relative"
                onMouseEnter={() => setHoveredCard("location")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-[#059669]/10 rounded-2xl transition-opacity duration-300 ${hoveredCard === "location" ? "opacity-100" : "opacity-0"}`} />
                <div className="relative bg-[#0f172a] rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-[#94a3b8] text-sm mb-2">Ubicación</p>
                  <p className="text-2xl font-bold text-white">Coyhaique</p>
                </div>
              </div>

              <div 
                className="group relative"
                onMouseEnter={() => setHoveredCard("projects")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[#f59e0b]/10 to-[#d97706]/10 rounded-2xl transition-opacity duration-300 ${hoveredCard === "projects" ? "opacity-100" : "opacity-0"}`} />
                <div className="relative bg-[#0f172a] rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 2h2m-2 2h-4m-4-2H5m4 0V5m12 0V5m-4 0h4M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[#94a3b8] text-sm mb-2">Obras</p>
                  <p className="text-2xl font-bold text-white">50+ proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] mb-8 shadow-2xl shadow-[#3b82f6]/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">Destacados</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] mx-auto rounded-full" />
            <p className="text-xl text-[#94a3b8] mt-8 max-w-2xl mx-auto">
              Experiencia en desarrollo de software y gestión de proyectos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredCard("lims")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 rounded-3xl transition-all duration-500 ${hoveredCard === "lims" ? "opacity-100 scale-105 shadow-3xl shadow-[#3b82f6]/30" : "opacity-0"}`} />
              <div className="relative bg-[#0f172a] rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 border border-[#3b82f6]/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors">LIMS Labcivil</h3>
                  <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <p className="text-[#94a3b8] mb-6 text-lg">
                  Sistema de gestión de laboratorios ISO 17025:2017 con 37 API endpoints y 14 dashboards
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-medium">Next.js 14</span>
                  <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-medium">Tailwind</span>
                  <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-medium">Prisma 6</span>
                  <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-medium">SQLite</span>
                </div>
              </div>
            </div>

            <div 
              className="group relative"
              onMouseEnter={() => setHoveredCard("claude")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#06b6d4]/20 to-[#0891b2]/20 rounded-3xl transition-all duration-500 ${hoveredCard === "claude" ? "opacity-100 scale-105 shadow-3xl shadow-[#06b6d4]/30" : "opacity-0"}`} />
              <div className="relative bg-[#0f172a] rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 border border-[#06b6d4]/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#06b6d4] transition-colors">Claude Code Marketplace</h3>
                  <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <p className="text-[#94a3b8] mb-6 text-lg">
                  19 plugins para desarrollo con Agent Teams, Audio Instructions y generadores de CV
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-xl text-sm font-medium">Claude Code</span>
                  <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-xl text-sm font-medium">Whisper</span>
                  <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-xl text-sm font-medium">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] mb-8 shadow-2xl shadow-[#3b82f6]/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-3.197A2.67 2.67 0 0010.138 7.5l-1.921 1.92-3.197 3.197a2.67 2.67 0 003.195 3.195l2.631.383 2.631-.383a2.67 2.67 0 003.195-3.195z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 19h6a1 1 0 001-1v-4a1 1 0 00-1-1H18a1 1 0 00-1 1v4a1 1 0 001 1z" />
              </svg>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Habilidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">Técnicas</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] mx-auto rounded-full" />
            <p className="text-xl text-[#94a3b8] mt-8 max-w-2xl mx-auto">
              Expertise en desarrollo y gestión de proyectos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="group"
              onMouseEnter={() => setHoveredCard("frontend")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-full bg-[#1e293b]/80 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 hover:border-[#3b82f6]/40 ${hoveredCard === "frontend" ? "border-[#3b82f6]/40 shadow-2xl shadow-[#3b82f6]/20" : "border-[#3b82f6]/20"}`}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Frontend
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#3b82f6] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
                    React
                  </li>
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#3b82f6] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
                    Next.js 14
                  </li>
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#3b82f6] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#3b82f6] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
                    Tailwind CSS
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="group"
              onMouseEnter={() => setHoveredCard("backend")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-full bg-[#1e293b]/80 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 hover:border-[#06b6d4]/40 ${hoveredCard === "backend" ? "border-[#06b6d4]/40 shadow-2xl shadow-[#06b6d4]/20" : "border-[#06b6d4]/20"}`}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  Backend
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#06b6d4] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
                    Node.js
                  </li>
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#06b6d4] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
                    Prisma ORM
                  </li>
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#06b6d4] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
                    PostgreSQL
                  </li>
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#06b6d4] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
                    SQLite
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="group"
              onMouseEnter={() => setHoveredCard("devops")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-full bg-[#1e293b]/80 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 hover:border-[#10b981]/40 ${hoveredCard === "devops" ? "border-[#10b981]/40 shadow-2xl shadow-[#10b981]/20" : "border-[#10b981]/20"}`}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  DevOps
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#10b981] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                    Docker
                  </li>
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#10b981] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                    CI/CD
                  </li>
                  <li className="flex items-center gap-3 text-[#94a3b8] hover:text-[#10b981] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                    NGINX
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] mb-8 shadow-2xl shadow-[#3b82f6]/30">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Conecta <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">Conmigo</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] mx-auto rounded-full" />
            <p className="text-xl text-[#94a3b8] mt-8 max-w-2xl mx-auto">
              Estoy disponible para colaborar en proyectos interesantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredCard("email")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 rounded-3xl transition-all duration-500 ${hoveredCard === "email" ? "opacity-100 scale-105" : "opacity-0"}`} />
              <div className="relative bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6 hover:-translate-y-2 transition-all duration-500 border border-[#3b82f6]/20">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">Email</p>
                  <p className="text-white font-bold text-xl">luishueicha</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative"
              onMouseEnter={() => setHoveredCard("whatsapp")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#06b6d4]/20 to-[#0891b2]/20 rounded-3xl transition-all duration-500 ${hoveredCard === "whatsapp" ? "opacity-100 scale-105" : "opacity-0"}`} />
              <div className="relative bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6 hover:-translate-y-2 transition-all duration-500 border border-[#06b6d4]/20">
                <div className="w-14 h-14 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">WhatsApp/Telegram</p>
                  <p className="text-white font-bold text-xl">luishueicha</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative"
              onMouseEnter={() => setHoveredCard("linkedin")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 to-[#d97706]/20 rounded-3xl transition-all duration-500 ${hoveredCard === "linkedin" ? "opacity-100 scale-105" : "opacity-0"}`} />
              <div className="relative bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6 hover:-translate-y-2 transition-all duration-500 border border-[#f59e0b]/20">
                <div className="w-14 h-14 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">LinkedIn</p>
                  <p className="text-white font-bold text-xl">linkedin.com/in/luishueicha</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative"
              onMouseEnter={() => setHoveredCard("github")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 rounded-3xl transition-all duration-500 ${hoveredCard === "github" ? "opacity-100 scale-105" : "opacity-0"}`} />
              <div className="relative bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6 hover:-translate-y-2 transition-all duration-500 border border-[#10b981]/20">
                <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1a5.07 5.07 0 00-1.94 5.51c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">GitHub</p>
                  <p className="text-white font-bold text-xl">github.com/luishueicha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f] text-white py-12 border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">LUIS HUEICHA</h2>
            <p className="text-[#94a3b8] mb-6 text-lg">
              Ingeniero Civil en Obras Civiles • <span className="text-[#3b82f6]">Máster en Ingeniería Geotécnica</span>
            </p>
            <p className="text-[#94a3b8]">
              Coyhaique, Aysén, Chile
            </p>
            <div className="mt-8 pt-8 border-t border-[#1e293b]">
              <p className="text-[#94a3b8]">
                © 2026 Luis Hueicha. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* 3D Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#3b82f6] rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-30px) translateX(20px); }
          50% { transform: translateY(-50px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

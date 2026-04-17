"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function LuisHueichaWeb() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f172a] font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3b82f6] via-[#1e3a8a] to-[#0f172a]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight relative z-10">
              Luis Hueicha
            </h1>
          </div>
          <p className="text-3xl md:text-4xl text-[#eff6ff] font-light mb-10 relative z-10">
            Ingeniero Civil en Obras Civiles • Máster en Ingeniería Geotécnica
          </p>
          <div className="flex items-center justify-center gap-6 relative z-10">
            <div className="flex items-center gap-3 bg-[#1e293b]/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-[#3b82f6]/30 hover:border-[#3b82f6]/60 transition-all duration-300 hover:scale-105">
              <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xl text-[#94a3b8]">Coyhaique, Aysén, Chile</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-2xl opacity-20" />
              <svg className="w-20 h-20 mx-auto text-[#3b82f6] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Sobre Mí
            </h2>
            <div className="w-24 h-2 bg-[#3b82f6] mx-auto rounded-full mt-6" />
            <p className="text-[#94a3b8] text-xl mt-6">
              Ingeniero civil con pasión por las obras civiles y la geotécnia
            </p>
          </div>

          <div className="bg-[#1e293b] rounded-3xl p-8 md:p-12 hover:shadow-2xl hover:shadow-[#3b82f6]/10 transition-all duration-500 hover:-translate-y-2 border border-[#3b82f6]/20">
            <p className="text-[#e2e8f0] text-lg leading-relaxed mb-8">
              Ingeniero Civil especializado en obras civiles con un Máster en Ingeniería Geotécnica. 
              Apasionado por la construcción sostenible y el desarrollo de infraestructuras resilientes.
              Actualmente colaboro en proyectos de desarrollo tecnológico que transforman la gestión 
              de laboratorios y la ingeniería civil.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-4 bg-[#0f172a] p-6 rounded-2xl hover:bg-[#1e3a8a]/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">Experiencia</p>
                  <p className="text-white font-bold text-xl">10+ años</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#0f172a] p-6 rounded-2xl hover:bg-[#3b82f6]/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">Especialización</p>
                  <p className="text-white font-bold text-xl">Geotécnia</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#0f172a] p-6 rounded-2xl hover:bg-[#06b6d4]/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">Ubicación</p>
                  <p className="text-white font-bold text-xl">Coyhaique</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#0f172a] p-6 rounded-2xl hover:bg-[#10b981]/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 2h2m-2 2h-4m-4-2H5m4 0V5m12 0V5m-4 0h4M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">Obras</p>
                  <p className="text-white font-bold text-xl">50+ proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-2xl opacity-20" />
              <svg className="w-20 h-20 mx-auto text-[#3b82f6] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Proyectos Destacados
            </h2>
            <div className="w-24 h-2 bg-[#3b82f6] mx-auto rounded-full mt-6" />
            <p className="text-[#94a3b8] text-xl mt-6">
              Experiencia en desarrollo de software y gestión de proyectos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f172a] rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#3b82f6]/20 transition-all duration-500 hover:-translate-y-2 hover:scale-102 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-[#1e3a8a]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">LIMS Labcivil</h3>
              <p className="text-[#94a3b8] mb-6 relative z-10">
                Sistema de gestión de laboratorios ISO 17025:2017 con 37 API endpoints y 14 dashboards
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm hover:bg-[#3b82f6]/20 transition-colors cursor-default">Next.js 14</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm hover:bg-[#3b82f6]/20 transition-colors cursor-default">Tailwind</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm hover:bg-[#3b82f6]/20 transition-colors cursor-default">Prisma 6</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm hover:bg-[#3b82f6]/20 transition-colors cursor-default">SQLite</span>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#3b82f6]/20 transition-all duration-500 hover:-translate-y-2 hover:scale-102 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-[#1e3a8a]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Claude Code Marketplace</h3>
              <p className="text-[#94a3b8] mb-6 relative z-10">
                19 plugins para desarrollo con Agent Teams, Audio Instructions y generadores de CV
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm hover:bg-[#3b82f6]/20 transition-colors cursor-default">Claude Code</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm hover:bg-[#3b82f6]/20 transition-colors cursor-default">Whisper</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm hover:bg-[#3b82f6]/20 transition-colors cursor-default">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-2xl opacity-20" />
              <svg className="w-20 h-20 mx-auto text-[#3b82f6] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-3.197A2.67 2.67 0 0010.138 7.5l-1.921 1.92-3.197 3.197a2.67 2.67 0 003.195 3.195l2.631.383 2.631-.383a2.67 2.67 0 003.195-3.195z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 19h6a1 1 0 001-1v-4a1 1 0 00-1-1H18a1 1 0 00-1 1v4a1 1 0 001 1z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Habilidades Técnicas
            </h2>
            <div className="w-24 h-2 bg-[#3b82f6] mx-auto rounded-full mt-6" />
            <p className="text-[#94a3b8] text-xl mt-6">
              Expertise en desarrollo y gestión de proyectos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1e293b] rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#3b82f6]/10 transition-all duration-500 hover:-translate-y-2 hover:scale-102 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40">
              <h3 className="text-2xl font-bold text-white mb-6">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">React</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Next.js 14</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">TypeScript</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Tailwind CSS</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1e293b] rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#3b82f6]/10 transition-all duration-500 hover:-translate-y-2 hover:scale-102 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40">
              <h3 className="text-2xl font-bold text-white mb-6">Backend</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Node.js</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Prisma ORM</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">PostgreSQL</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">SQLite</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1e293b] rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#3b82f6]/10 transition-all duration-500 hover:-translate-y-2 hover:scale-102 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40">
              <h3 className="text-2xl font-bold text-white mb-6">DevOps</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Docker</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">CI/CD</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-[#3b82f6]/10 px-4 py-2 rounded-xl transition-colors">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">NGINX</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-2xl opacity-20" />
              <svg className="w-20 h-20 mx-auto text-[#3b82f6] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Conecta conmigo
            </h2>
            <div className="w-24 h-2 bg-[#3b82f6] mx-auto rounded-full mt-6" />
            <p className="text-[#94a3b8] text-xl mt-6">
              Estoy disponible para colaborar en proyectos interesantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6 hover:bg-[#3b82f6]/5 transition-all duration-300 hover:scale-105 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40">
              <svg className="w-10 h-10 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-[#94a3b8] text-sm">Email</p>
                <p className="text-white font-bold text-xl">luishueicha</p>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6 hover:bg-[#3b82f6]/5 transition-all duration-300 hover:scale-105 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40">
              <svg className="w-10 h-10 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-[#94a3b8] text-sm">WhatsApp/Telegram</p>
                <p className="text-white font-bold text-xl">luishueicha</p>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6 hover:bg-[#3b82f6]/5 transition-all duration-300 hover:scale-105 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40">
              <svg className="w-10 h-10 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <p className="text-[#94a3b8] text-sm">LinkedIn</p>
                <p className="text-white font-bold text-xl">linkedin.com/in/luishueicha</p>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6 hover:bg-[#3b82f6]/5 transition-all duration-300 hover:scale-105 border border-[#3b82f6]/20 hover:border-[#3b82f6]/40">
              <svg className="w-10 h-10 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1a5.07 5.07 0 00-1.94 5.51c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              <div>
                <p className="text-[#94a3b8] text-sm">GitHub</p>
                <p className="text-white font-bold text-xl">github.com/luishueicha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12 border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">LUIS HUEICHA</h2>
            <p className="text-[#94a3b8] mb-6">
              Ingeniero Civil en Obras Civiles • Máster en Ingeniería Geotécnica
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

      {/* Floating particles for 3D effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#3b82f6] rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

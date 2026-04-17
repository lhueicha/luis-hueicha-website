"use client"

import { useState } from "react"

export default function LuisHueichaWeb() {
  const [perspective, setPerspective] = useState(1000)

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] font-sans overflow-x-hidden"
      style={{ perspective: `${perspective}px` }}
    >
      {/* Hero Section with 3D Cards */}
      <section className="min-h-screen flex items-center justify-center px-6 py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/10 via-[#0a0a1a]/0 to-[#0a0a1a]/0 animate-pulse" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#06b6d4]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="group relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#3b82f6] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#94a3b8] relative z-10">
              Luis Hueicha
            </h1>
          </div>

          <p className="text-2xl md:text-4xl text-[#94a3b8] font-light mb-12">
            Ingeniero Civil en Obras Civiles <span className="text-[#3b82f6]">•</span> Máster en Ingeniería Geotécnica
          </p>

          {/* 3D Card */}
          <div 
            className="inline-block group cursor-default"
            onMouseEnter={() => setPerspective(500)}
            onMouseLeave={() => setPerspective(1000)}
          >
            <div className="relative bg-[#1e293b]/80 backdrop-blur-xl border border-[#3b82f6]/30 rounded-2xl p-6 transform transition-all duration-500 hover:scale-110 hover:rotate-y-6 hover:rotate-x-6 hover:shadow-2xl hover:shadow-[#3b82f6]/40">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#3b82f6]/20 rounded-xl">
                  <svg className="w-8 h-8 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[#94a3b8] text-sm">Ubicación</p>
                  <p className="text-white font-semibold text-xl">Coyhaique, Aysén, Chile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-2xl mb-6 shadow-2xl shadow-[#3b82f6]/30 transform rotate-6 hover:rotate-12 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Sobre <span className="text-[#3b82f6]">Mí</span></h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] mx-auto rounded-full" />
          </div>

          {/* 3D Card */}
          <div 
            className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#3b82f6]/20 rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#3b82f6]/20 hover:rotate-2"
            onMouseEnter={(e) => e.currentTarget.style.transform = "rotateX(5deg) rotateY(5deg) translateY(-10px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)"}
          >
            <p className="text-[#e2e8f0] text-lg leading-relaxed">
              Ingeniero Civil especializado en obras civiles con un Máster en Ingeniería Geotécnica. 
              Apasionado por la construcción sostenible y el desarrollo de infraestructuras resilientes.
              Actualmente colaboro en proyectos de desarrollo tecnológico que transforman la gestión 
              de laboratorios y la ingeniería civil.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-[#0a0a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl mb-6 shadow-2xl shadow-[#06b6d4]/30 transform rotate-6 hover:rotate-12 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Proyectos <span className="text-[#06b6d4]">Destacados</span></h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 3D Project Card */}
            <div 
              className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#3b82f6]/20 rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#3b82f6]/20 hover:scale-105 hover:rotate-2"
              onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(10deg) translateY(-15px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"}
            >
              <h3 className="text-2xl font-bold text-white mb-6">LIMS Labcivil</h3>
              <p className="text-[#94a3b8] mb-6">
                Sistema de gestión de laboratorios ISO 17025:2017 con 37 API endpoints y 14 dashboards
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-semibold">Next.js 14</span>
                <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-semibold">Tailwind</span>
                <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-semibold">Prisma 6</span>
                <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-semibold">SQLite</span>
              </div>
            </div>

            {/* 3D Project Card */}
            <div 
              className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#06b6d4]/20 rounded-2xl p-8 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#06b6d4]/20 hover:scale-105 hover:rotate-2"
              onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(10deg) translateY(-15px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Claude Code Marketplace</h3>
              <p className="text-[#94a3b8] mb-6">
                19 plugins para desarrollo con Agent Teams, Audio Instructions y generadores de CV
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-xl text-sm font-semibold">Claude Code</span>
                <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-xl text-sm font-semibold">Whisper</span>
                <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-xl text-sm font-semibold">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl mb-6 shadow-2xl shadow-[#10b981]/30 transform rotate-6 hover:rotate-12 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-3.197A2.67 2.67 0 0010.138 7.5l-1.921 1.92-3.197 3.197a2.67 2.67 0 003.195 3.195l2.631.383 2.631-.383a2.67 2.67 0 003.195-3.195z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 19h6a1 1 0 001-1v-4a1 1 0 00-1-1H18a1 1 0 00-1 1v4a1 1 0 001 1z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Habilidades <span className="text-[#10b981]">Técnicas</span></h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[#10b981] to-[#059669] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 3D Skill Card */}
            <div 
              className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#3b82f6]/20 rounded-2xl p-6 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#3b82f6]/20 hover:scale-105"
              onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(5deg) translateY(-15px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Frontend
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  React
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  Next.js 14
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  TypeScript
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  Tailwind CSS
                </li>
              </ul>
            </div>

            {/* 3D Skill Card */}
            <div 
              className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#06b6d4]/20 rounded-2xl p-6 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#06b6d4]/20 hover:scale-105"
              onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(5deg) translateY(-15px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Backend
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#06b6d4] rounded-full" />
                  Node.js
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#06b6d4] rounded-full" />
                  Prisma ORM
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#06b6d4] rounded-full" />
                  PostgreSQL
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#06b6d4] rounded-full" />
                  SQLite
                </li>
              </ul>
            </div>

            {/* 3D Skill Card */}
            <div 
              className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#10b981]/20 rounded-2xl p-6 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#10b981]/20 hover:scale-105"
              onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(5deg) translateY(-15px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                DevOps
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full" />
                  Docker
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full" />
                  CI/CD
                </li>
                <li className="flex items-center gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full" />
                  NGINX
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-[#0a0a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-2xl mb-6 shadow-2xl shadow-[#f59e0b]/30 transform rotate-6 hover:rotate-12 transition-transform duration-500">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Conecta <span className="text-[#f59e0b]">Conmigo</span></h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[#f59e0b] to-[#d97706] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 3D Contact Card */}
            <div 
              className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#3b82f6]/20 rounded-2xl p-6 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#3b82f6]/20 hover:scale-105"
              onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(5deg) translateY(-15px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-xl flex items-center justify-center shadow-lg shadow-[#3b82f6]/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">Email</p>
                  <p className="text-white font-bold">luishueicha</p>
                </div>
              </div>
            </div>

            {/* 3D Contact Card */}
            <div 
              className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#06b6d4]/20 rounded-2xl p-6 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#06b6d4]/20 hover:scale-105"
              onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(5deg) translateY(-15px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-xl flex items-center justify-center shadow-lg shadow-[#06b6d4]/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">WhatsApp/Telegram</p>
                  <p className="text-white font-bold">luishueicha</p>
                </div>
              </div>
            </div>

            {/* 3D Contact Card */}
            <div 
              className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#f59e0b]/20 rounded-2xl p-6 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#f59e0b]/20 hover:scale-105"
              onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(5deg) translateY(-15px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-xl flex items-center justify-center shadow-lg shadow-[#f59e0b]/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">LinkedIn</p>
                  <p className="text-white font-bold">linkedin.com/in/luishueicha</p>
                </div>
              </div>
            </div>

            {/* 3D Contact Card */}
            <div 
              className="bg-[#1e293b]/80 backdrop-blur-xl border border-[#10b981]/20 rounded-2xl p-6 transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl hover:shadow-[#10b981]/20 hover:scale-105"
              onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(5deg) translateY(-15px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)"}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg shadow-[#10b981]/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1a5.07 5.07 0 00-1.94 5.51c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-sm">GitHub</p>
                  <p className="text-white font-bold">github.com/luishueicha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a1a] text-white py-8 border-t border-[#1e293b]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">LUIS HUEICHA</h2>
          <p className="text-[#94a3b8] mb-2">
            Ingeniero Civil en Obras Civiles • Máster en Ingeniería Geotécnica
          </p>
          <p className="text-[#94a3b8]">
            Coyhaique, Aysén, Chile
          </p>
          <p className="text-[#94a3b8] mt-4">
            © 2026 Luis Hueicha. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Floating 3D Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#3b82f6] rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transformStyle: "preserve-3d"
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
          * { animation: none !important; transform: none !important; }
        }
      `}</style>
    </div>
  )
}

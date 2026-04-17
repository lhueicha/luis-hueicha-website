"use client"

import Link from "next/link"
import { useState } from "react"

export default function LuisHueichaWeb() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#1e40af]">Luis Hueicha</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#about" className="text-gray-500 hover:text-[#1e40af] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sobre Mí
              </Link>
              <Link href="#projects" className="text-gray-500 hover:text-[#1e40af] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Proyectos
              </Link>
              <Link href="#skills" className="text-gray-500 hover:text-[#1e40af] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Habilidades
              </Link>
              <Link href="#contact" className="text-gray-500 hover:text-[#1e40af] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Luis Hueicha
          </h1>
          <p className="text-xl md:text-2xl text-[#eff6ff] mb-8 max-w-3xl mx-auto">
            Ingeniero Civil en Obras Civiles • Máster en Ingeniería Geotécnica
          </p>
          <div className="flex items-center justify-center gap-4 text-[#eff6ff]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-lg">Coyhaique, Aysén, Chile</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-4">Sobre Mí</h2>
          <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full" />
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Ingeniero Civil especializado en obras civiles con un Máster en Ingeniería Geotécnica. 
            Apasionado por la construcción sostenible y el desarrollo de infraestructuras resilientes.
            Actualmente colaboro en proyectos de desarrollo tecnológico que transforman la gestión 
            de laboratorios y la ingeniería civil.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-4">Proyectos Destacados</h2>
            <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#1e40af] mb-4">LIMS Labcivil</h3>
              <p className="text-gray-600 mb-6">
                Sistema de gestión de laboratorios ISO 17025:2017 con 37 API endpoints y 14 dashboards
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-lg text-sm font-medium">Next.js 14</span>
                <span className="px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-lg text-sm font-medium">Tailwind</span>
                <span className="px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-lg text-sm font-medium">Prisma 6</span>
                <span className="px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-lg text-sm font-medium">SQLite</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#1e40af] mb-4">Claude Code Marketplace</h3>
              <p className="text-gray-600 mb-6">
                19 plugins para desarrollo con Agent Teams, Audio Instructions y generadores de CV
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-lg text-sm font-medium">Claude Code</span>
                <span className="px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-lg text-sm font-medium">Whisper</span>
                <span className="px-4 py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-lg text-sm font-medium">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-4">Habilidades Técnicas</h2>
          <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-[#1e40af] mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Frontend
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                React
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                Next.js 14
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                TypeScript
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                Tailwind CSS
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-[#1e40af] mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              Backend
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                Node.js
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                Prisma ORM
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                PostgreSQL
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                SQLite
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-[#1e40af] mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              DevOps
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                Docker
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                CI/CD
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#1e40af] rounded-full" />
                NGINX
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e40af] mb-4">Conecta conmigo</h2>
            <div className="w-16 h-1 bg-[#1e40af] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:luishueicha" className="block">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-[#1e40af]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Email</p>
                    <p className="text-gray-600">luishueicha</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://wa.me/luishueicha" className="block">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-[#1e40af]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">WhatsApp/Telegram</p>
                    <p className="text-gray-600">luishueicha</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://linkedin.com/in/luishueicha" className="block">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-[#1e40af]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">LinkedIn</p>
                    <p className="text-gray-600">linkedin.com/in/luishueicha</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="https://github.com/luishueicha" className="block">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-[#1e40af]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1a5.07 5.07 0 00-1.94 5.51c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">GitHub</p>
                    <p className="text-gray-600">github.com/luishueicha</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">LUIS HUEICHA</h2>
          <p className="text-[#eff6ff] mb-2">
            Ingeniero Civil en Obras Civiles • Máster en Ingeniería Geotécnica
          </p>
          <p className="text-[#eff6ff]">
            Coyhaique, Aysén, Chile
          </p>
          <p className="text-[#94a3b8] mt-6 text-sm">
            © 2026 Luis Hueicha. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

"use client"

import Link from "next/link"

export default function LuisHueichaWeb() {
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#3b82f6] rounded-full filter blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Luis Hueicha
          </h1>
          <p className="text-2xl md:text-3xl text-[#eff6ff] font-light mb-8">
            Ingeniero Civil en Obras Civiles • Máster en Ingeniería Geotécnica
          </p>
          <div className="flex items-center justify-center gap-6">
            <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xl text-[#94a3b8]">Coyhaique, Aysén, Chile</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <svg className="w-16 h-16 mx-auto text-[#3b82f6] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre Mí
            </h2>
            <p className="text-[#94a3b8] text-xl">
              Ingeniero civil con pasión por las obras civiles y la geotécnia
            </p>
          </div>

          <div className="bg-[#1e293b] rounded-3xl p-8 md:p-12">
            <p className="text-[#e2e8f0] text-lg leading-relaxed mb-8">
              Ingeniero Civil especializado en obras civiles con un Máster en Ingeniería Geotécnica. 
              Apasionado por la construcción sostenible y el desarrollo de infraestructuras resilientes.
              Actualmente colaboro en proyectos de desarrollo tecnológico que transforman la gestión 
              de laboratorios y la ingeniería civil.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-4 bg-[#0f172a] p-6 rounded-2xl">
                <svg className="w-8 h-8 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-[#94a3b8] text-sm">Experiencia</p>
                  <p className="text-white font-bold">10+ años</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#0f172a] p-6 rounded-2xl">
                <svg className="w-8 h-8 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <div>
                  <p className="text-[#94a3b8] text-sm">Especialización</p>
                  <p className="text-white font-bold">Geotécnia</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#0f172a] p-6 rounded-2xl">
                <svg className="w-8 h-8 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-[#94a3b8] text-sm">Ubicación</p>
                  <p className="text-white font-bold">Coyhaique</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#0f172a] p-6 rounded-2xl">
                <svg className="w-8 h-8 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 2h2m-2 2h-4m-4-2H5m4 0V5m12 0V5m-4 0h4M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-[#94a3b8] text-sm">Obras</p>
                  <p className="text-white font-bold">50+ proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <svg className="w-16 h-16 mx-auto text-[#3b82f6] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-[#94a3b8] text-xl">
              Experiencia en desarrollo de software y gestión de proyectos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f172a] rounded-3xl p-8 hover:bg-[#1e293b] transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">LIMS Labcivil</h3>
              <p className="text-[#94a3b8] mb-4">
                Sistema de gestión de laboratorios ISO 17025:2017 con 37 API endpoints y 14 dashboards
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm">Next.js 14</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm">Tailwind</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm">Prisma 6</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm">SQLite</span>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 hover:bg-[#1e293b] transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Claude Code Marketplace</h3>
              <p className="text-[#94a3b8] mb-4">
                19 plugins para desarrollo con Agent Teams, Audio Instructions y generadores de CV
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm">Claude Code</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm">Whisper</span>
                <span className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <svg className="w-16 h-16 mx-auto text-[#3b82f6] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-3.197A2.67 2.67 0 0010.138 7.5l-1.921 1.92-3.197 3.197a2.67 2.67 0 003.195 3.195l2.631.383 2.631-.383a2.67 2.67 0 003.195-3.195z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 19h6a1 1 0 001-1v-4a1 1 0 00-1-1H18a1 1 0 00-1 1v4a1 1 0 001 1z" />
            </svg>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-[#94a3b8] text-xl">
              Expertise en desarrollo y gestión de proyectos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1e293b] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">React</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Next.js 14</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">TypeScript</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Tailwind CSS</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1e293b] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Backend</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Node.js</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Prisma ORM</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">PostgreSQL</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">SQLite</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1e293b] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">DevOps</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">Docker</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                  <span className="text-[#e2e8f0]">CI/CD</span>
                </li>
                <li className="flex items-center gap-3">
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
          <div className="text-center mb-16">
            <svg className="w-16 h-16 mx-auto text-[#3b82f6] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Conecta conmigo
            </h2>
            <p className="text-[#94a3b8] text-xl">
              Estoy disponible para colaborar en proyectos interesantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6">
              <svg className="w-10 h-10 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-[#94a3b8] text-sm">Email</p>
                <p className="text-white font-bold">luishueicha</p>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6">
              <svg className="w-10 h-10 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-[#94a3b8] text-sm">WhatsApp/Telegram</p>
                <p className="text-white font-bold">luishueicha</p>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6">
              <svg className="w-10 h-10 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <p className="text-[#94a3b8] text-sm">LinkedIn</p>
                <p className="text-white font-bold">linkedin.com/in/luishueicha</p>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-8 flex items-center gap-6">
              <svg className="w-10 h-10 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1a5.07 5.07 0 00-1.94 5.51c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
              <div>
                <p className="text-[#94a3b8] text-sm">GitHub</p>
                <p className="text-white font-bold">github.com/luishueicha</p>
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
    </div>
  )
}

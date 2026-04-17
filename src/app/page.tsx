"use client"

import Link from "next/link"

export default function LuisHueichaWeb() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-6 py-20 border-b border-gray-100">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Luis Hueicha
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-10">
            Ingeniero Civil en Obras Civiles • Máster en Ingeniería Geotécnica
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-500 text-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Coyhaique, Aysén, Chile</span>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
            <div className="w-16 h-1 bg-gray-900 mx-auto" />
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ingeniero Civil especializado en obras civiles con un Máster en Ingeniería Geotécnica. 
              Apasionado por la construcción sostenible y el desarrollo de infraestructuras resilientes.
              Actualmente colaboro en proyectos de desarrollo tecnológico que transforman la gestión 
              de laboratorios y la ingeniería civil.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
            <div className="w-16 h-1 bg-gray-900 mx-auto" />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">LIMS Labcivil</h3>
              <p className="text-gray-600 mb-4">
                Sistema de gestión de laboratorios ISO 17025:2017 con 37 API endpoints y 14 dashboards
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Next.js 14</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Tailwind</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Prisma 6</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">SQLite</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Claude Code Marketplace</h3>
              <p className="text-gray-600 mb-4">
                19 plugins para desarrollo con Agent Teams, Audio Instructions y generadores de CV
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Claude Code</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Whisper</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Habilidades Técnicas</h2>
            <div className="w-16 h-1 bg-gray-900 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">React</li>
                <li className="text-gray-600">Next.js 14</li>
                <li className="text-gray-600">TypeScript</li>
                <li className="text-gray-600">Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">Node.js</li>
                <li className="text-gray-600">Prisma ORM</li>
                <li className="text-gray-600">PostgreSQL</li>
                <li className="text-gray-600">SQLite</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">Docker</li>
                <li className="text-gray-600">CI/CD</li>
                <li className="text-gray-600">NGINX</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conecta conmigo</h2>
            <div className="w-16 h-1 bg-gray-900 mx-auto" />
          </div>

          <div className="space-y-4">
            <a href="mailto:luishueicha" className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Email</p>
                  <p className="text-gray-600">luishueicha</p>
                </div>
              </div>
            </a>

            <a href="https://wa.me/luishueicha" className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">WhatsApp/Telegram</p>
                  <p className="text-gray-600">luishueicha</p>
                </div>
              </div>
            </a>

            <a href="https://linkedin.com/in/luishueicha" className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">LinkedIn</p>
                  <p className="text-gray-600">linkedin.com/in/luishueicha</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/luishueicha" className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1a5.07 5.07 0 00-1.94 5.51c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">GitHub</p>
                  <p className="text-gray-600">github.com/luishueicha</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">LUIS HUEICHA</h2>
          <p className="text-gray-400 mb-2">
            Ingeniero Civil en Obras Civiles • Máster en Ingeniería Geotécnica
          </p>
          <p className="text-gray-500">
            Coyhaique, Aysén, Chile
          </p>
          <p className="text-gray-600 mt-8">
            © 2026 Luis Hueicha. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

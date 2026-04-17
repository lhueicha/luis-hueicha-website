"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Stars } from "@react-three/drei"
import * as THREE from "three"

// 3D Hero Component
function Hero3D() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#0a0a1a]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial 
              color="#3b82f6" 
              emissive="#1e40af"
              emissiveIntensity={0.5}
              wireframe={false}
            />
          </mesh>
        </Float>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
        <OrbitControls enableZoom={true} enablePan={false} minDistance={3} maxDistance={10} />
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            Luis Hueicha
          </h1>
          <p className="text-2xl md:text-3xl text-[#eff6ff] mb-8 max-w-3xl mx-auto">
            Ingeniero Civil en Obras Civiles • <span className="text-[#3b82f6]">Máster en Ingeniería Geotécnica</span>
          </p>
          <div className="flex items-center justify-center gap-4 text-[#eff6ff]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xl">Coyhaique, Aysén, Chile</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// 3D Card Component
function Card3D({ children, color = "#1e40af" }) {
  return (
    <div 
      className="group cursor-default"
      onMouseEnter={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(10deg) rotateY(10deg) translateY(-10px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)"}
    >
      <div className={`bg-[#1e293b]/90 backdrop-blur-xl border border-${color}/30 rounded-2xl p-6 shadow-2xl shadow-${color}/20`}>
        {children}
      </div>
    </div>
  )
}

export default function LuisHueichaWeb3D() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] font-sans">
      {/* 3D Hero */}
      <section className="min-h-screen relative overflow-hidden">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh>
              <dodecahedronGeometry args={[2, 0]} />
              <meshStandardMaterial 
                color="#3b82f6" 
                emissive="#1e3a8a"
                emissiveIntensity={0.3}
                wireframe={true}
              />
            </mesh>
          </Float>
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
          <OrbitControls enableZoom={true} enablePan={false} minDistance={5} maxDistance={15} />
        </Canvas>
        
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center px-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#94a3b8] mb-6 tracking-tight drop-shadow-2xl animate-pulse">
              Luis Hueicha
            </h1>
            <p className="text-2xl md:text-4xl lg:text-5xl text-[#94a3b8] font-light mb-10 drop-shadow-lg">
              Ingeniero Civil en Obras Civiles <span className="text-[#3b82f6] drop-shadow-lg">•</span> <span className="text-[#06b6d4] drop-shadow-lg">Máster en Ingeniería Geotécnica</span>
            </p>
            <div className="flex items-center justify-center gap-6 text-[#94a3b8] drop-shadow-lg bg-black/40 backdrop-blur-md rounded-full px-8 py-4 inline-block">
              <svg className="w-8 h-8 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-2xl">Coyhaique, Aysén, Chile</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre <span className="text-[#3b82f6]">Mí</span></h2>
            <div className="w-20 h-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] mx-auto rounded-full" />
            <p className="text-[#94a3b8] mt-6 max-w-2xl mx-auto">
              Profesional con experiencia en construcción sostenible e infraestructura resiliente
            </p>
          </div>

          <Card3D color="3b82f6">
            <p className="text-[#e2e8f0] text-lg leading-relaxed mb-8">
              Ingeniero Civil especializado en obras civiles con un Máster en Ingeniería Geotécnica. 
              Apasionado por la construcción sostenible y el desarrollo de infraestructuras resilientes.
              Actualmente colaboro en proyectos de desarrollo tecnológico que transforman la gestión 
              de laboratorios y la ingeniería civil.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {[
                { label: "Años de experiencia", value: "10+" },
                { label: "Proyectos ejecutados", value: "50+" },
                { label: "Especialización", value: "Geotécnica" },
                { label: "Ubicación", value: "Coyhaique" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#3b82f6] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#94a3b8]">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card3D>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Proyectos <span className="text-[#3b82f6]">Destacados</span></h2>
            <div className="w-20 h-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] mx-auto rounded-full" />
            <p className="text-[#94a3b8] mt-6 max-w-2xl mx-auto">Iniciativas tecnológicas que transforman la ingeniería civil</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card3D color="3b82f6">
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-6">LIMS Labcivil</h3>
              <p className="text-[#94a3b8] mb-6">Sistema de gestión de laboratorios ISO 17025:2017 con 37 API endpoints y 14 dashboards interactivos</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-semibold">Next.js 14</span>
                <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-semibold">Tailwind CSS</span>
                <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-semibold">Prisma 6</span>
                <span className="px-4 py-2 bg-[#3b82f6]/10 text-[#3b82f6] rounded-xl text-sm font-semibold">SQLite</span>
              </div>
            </Card3D>

            <Card3D color="06b6d4">
              <h3 className="text-2xl font-bold text-[#06b6d4] mb-6">Claude Code Marketplace</h3>
              <p className="text-[#94a3b8] mb-6">19 plugins para desarrollo con Agent Teams, Audio Instructions y generadores de CV automatizados</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-xl text-sm font-semibold">Claude Code</span>
                <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-xl text-sm font-semibold">Whisper</span>
                <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-xl text-sm font-semibold">Python</span>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-[#0a0a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Habilidades <span className="text-[#10b981]">Técnicas</span></h2>
            <div className="w-20 h-2 bg-gradient-to-r from-[#10b981] to-[#059669] mx-auto rounded-full" />
            <p className="text-[#94a3b8] mt-6 max-w-2xl mx-auto">Experiencia en desarrollo y gestión de proyectos tecnológicos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card3D color="3b82f6">
              <h3 className="text-xl font-bold text-[#3b82f6] mb-6">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#94a3b8]">React</li>
                <li className="flex items-center gap-3 text-[#94a3b8]">Next.js 14</li>
                <li className="flex items-center gap-3 text-[#94a3b8]">TypeScript</li>
                <li className="flex items-center gap-3 text-[#94a3b8]">Tailwind CSS</li>
              </ul>
            </Card3D>

            <Card3D color="06b6d4">
              <h3 className="text-xl font-bold text-[#06b6d4] mb-6">Backend</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#94a3b8]">Node.js</li>
                <li className="flex items-center gap-3 text-[#94a3b8]">Prisma ORM</li>
                <li className="flex items-center gap-3 text-[#94a3b8]">PostgreSQL</li>
                <li className="flex items-center gap-3 text-[#94a3b8]">SQLite</li>
              </ul>
            </Card3D>

            <Card3D color="10b981">
              <h3 className="text-xl font-bold text-[#10b981] mb-6">DevOps</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#94a3b8]">Docker</li>
                <li className="flex items-center gap-3 text-[#94a3b8]">CI/CD</li>
                <li className="flex items-center gap-3 text-[#94a3b8]">NGINX</li>
              </ul>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Conecta <span className="text-[#f59e0b]">Conmigo</span></h2>
            <div className="w-20 h-2 bg-gradient-to-r from-[#f59e0b] to-[#d97706] mx-auto rounded-full" />
            <p className="text-[#94a3b8] mt-6 max-w-2xl mx-auto">Estoy disponible para colaborar en proyectos interesantes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Email", value: "luishueicha", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, color: "3b82f6" },
              { label: "WhatsApp/Telegram", value: "luishueicha", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, color: "06b6d4" },
              { label: "LinkedIn", value: "linkedin.com/in/luishueicha", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>, color: "f59e0b" },
              { label: "GitHub", value: "github.com/luishueicha", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1a5.07 5.07 0 00-1.94 5.51c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg>, color: "10b981" }
            ].map((contact, i) => (
              <a key={i} href={contact.label === "Email" ? `mailto:${contact.value}` : `https://${contact.label.toLowerCase()}/${contact.value}`} target="_blank" rel="noopener noreferrer">
                <Card3D color={contact.color}>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-[${contact.color}] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[${contact.color}]/30`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{contact.label}</p>
                      <p className="text-[#94a3b8]">{contact.value}</p>
                    </div>
                  </div>
                </Card3D>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-12 border-t border-[#1e40af]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">LUIS HUEICHA</h2>
          <p className="text-[#eff6ff] mb-4 text-lg">
            Ingeniero Civil en Obras Civiles • <span className="text-[#3b82f6]">Máster en Ingeniería Geotécnica</span>
          </p>
          <p className="text-[#94a3b8]">Coyhaique, Aysén, Chile</p>
          <p className="text-[#94a3b8] mt-8">© 2026 Luis Hueicha. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-30px) translateX(-5px); }
          75% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transform: none !important; }
        }
      `}</style>
    </div>
  )
}

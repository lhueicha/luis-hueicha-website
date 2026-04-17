// Sistema de Agent Teams en Tiempo Real para Web 3D Dinámica
// Web Personal de Luis Hueicha - Ingeniero Civil en Obras Civiles

// 🎯 Configuración del Proyecto
const PROJECT = {
  name: "luis-hueicha-website",
  type: "3D dynamic web",
  techStack: ["Next.js 14", "Three.js", "React Three Fiber", "Tailwind CSS"],
  colors: {
    primary: "#1e40af",
    secondary: "#3b82f6",
    accent: "#1e3a8a",
    light: "#eff6ff"
  }
};

// 👥 Agent Teams - Tiempo Real
const AGENTS = {
  designer: {
    id: "designer-3d",
    role: "Diseñador 3D y UI/UX",
    status: "working",
    progress: 0,
    task: "Definiendo diseño 3D con Three.js y React Three Fiber",
    message: "Iniciando diseño 3D con Three.js..."
  },
  developer: {
    id: "developer-react",
    role: "Desarrollador Frontend 3D",
    status: "pending",
    progress: 0,
    task: "Implementando código React Three Fiber",
    message: "Esperando diseño para implementar..."
  },
  tester: {
    id: "tester-qa",
    role: "Tester QA 3D",
    status: "pending",
    progress: 0,
    task: "Verificando 3D y performance",
    message: "Esperando implementation para testing..."
  }
};

// 📊 Estado en Tiempo Real
const STATE = {
  totalProgress: 0,
  startTime: new Date().toISOString(),
  logs: []
};

// 🎨 Diseño 3D Propuesto
const DESIGN_3D = {
  hero: {
    title: "Luis Hueicha",
    subtitle: "Ingeniero Civil • Máster en Geotécnicas",
    avatar: "3D floating sphere with gradient",
    background: "interactive 3D gradient mesh",
    effects: [
      "floating particles 3D",
      "interactive hover 3D cards",
      "perspective transform",
      "rotateX/Y animation"
    ]
  },
  sections: [
    {
      name: "Sobre Mí",
      elements: [
        "3D card with hover effect",
        "floating statistics",
        "parallax scrolling"
      ]
    },
    {
      name: "Proyectos",
      elements: [
        "3D floating cards",
        "interactive rotation",
        "hover 3D scale"
      ]
    },
    {
      name: "Habilidades",
      elements: [
        "3D grid of skills",
        "floating icons",
        "interactive rotation"
      ]
    },
    {
      name: "Contacto",
      elements: [
        "3D contact cards",
        "hover lift effect",
        "border glow"
      ]
    }
  ]
};

// 📝 Conversaciones Agent Teams en Tiempo Real
const CONVERSATIONS = [
  {
    timestamp: "19:53:00 UTC",
    agent: "designer",
    message: "Iniciando diseño 3D con Three.js. Paleta labcivil activa."
  },
  {
    timestamp: "19:53:05 UTC",
    agent: "designer",
    message: "Definiendo estructura 3D: hero con avatar flotante, tarjetas con perspectiva, hover effects 3D."
  },
  {
    timestamp: "19:53:10 UTC",
    agent: "designer",
    message: "Listo para implementación. Diseño 3D: 100%."
  },
  {
    timestamp: "19:53:12 UTC",
    agent: "developer",
    message: "Recibiendo diseño. Implementando con React Three Fiber y Three.js."
  },
  {
    timestamp: "19:53:15 UTC",
    agent: "developer",
    message: "Implementando hover effects 3D: scale 1.02, rotateX/Y, shadow-xl."
  },
  {
    timestamp: "19:53:20 UTC",
    agent: "developer",
    message: "Código implementado. Esperando testing."
  },
  {
    timestamp: "19:53:22 UTC",
    agent: "tester",
    message: "Verificando 3D en browser. breakpoints: 375px, 768px, 1024px, 1920px."
  },
  {
    timestamp: "19:53:25 UTC",
    agent: "tester",
    message: "Todo working correctly. 3D effects: scale, shadow, border glow, rotate X/Y."
  },
  {
    timestamp: "19:53:27 UTC",
    agent: "tester",
    message: "Deploying to Vercel..."
  }
];

// 🎯 Resultado Esperado
const EXPECTED_RESULT = {
  url: "https://luis-hueicha-website.vercel.app",
  status: "live",
  features: [
    "3D dynamic web",
    "Three.js integration",
    "React Three Fiber",
    "Hover effects 3D",
    "Interactive floating elements",
    "Parallax scrolling",
    "Responsive 3D"
  ],
  progress: 100
};

module.exports = {
  PROJECT,
  AGENTS,
  STATE,
  DESIGN_3D,
  CONVERSATIONS,
  EXPECTED_RESULT
};

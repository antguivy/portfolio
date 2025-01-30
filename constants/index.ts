export const technologies = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", logo: "https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg" },
  { name: "Tableau", logo: "https://www.svgrepo.com/show/354428/tableau-icon.svg" },
  { name: "Power BI", logo: "https://its.ucr.edu/sites/default/files/styles/form_preview/public/powerbi%20logo%201.png?itok=yYXO-S-V" },
  { name: "Excel", logo: "https://www.svgrepo.com/show/373589/excel.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS EC2", logo: "https://www.svgrepo.com/show/448268/aws-ec2.svg" },

]


export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://avatar.iran.liara.run/public/1",
    content: "John's ability to transform our vision into reality was exceptional. His technical expertise and attention to detail made our project a huge success.",
  },
  {
    name: "Michael Chen",
    role: "CTO at InnovateLabs",
    image: "https://avatar.iran.liara.run/public/2",
    content: "Working with John was a game-changer for our startup. His full-stack expertise and problem-solving skills are truly remarkable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at DevCorp",
    image: "https://avatar.iran.liara.run/public/3",
    content: "John not only delivered outstanding code but also brought innovative solutions to our challenges. His collaborative approach made him a valuable team member.",
  },
];

 export const projects = [
  {
    title: "Web Scraping BVL (Bolsa de Valores de Lima)",
    description: "Extracción de datos públicos para un estudio realizado por otra persona, cuyo objetivo fue estimar la eficiencia financiera de las empresas listadas en la BVL.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bolsa_de_Valores_de_Lima_logo.png",
    technologies: ["Python", "Selenium"],
    liveUrl: "",
    githubUrl: "",
    mediumUrl: "https://medium.com/@avyllesca/web-scraping-the-lima-stock-exchange-bvl-7a80b89990da",
    features: [
      "Automatización de Navegación Web",
      "Extracción de datos financieros",
      "Procesamiento y limpieza de datos",
      // "Order management"
    ]
  },
  {
    title: "EDA for Top Games on Google Play",
    description: "Análisis Exploratorio de Datos (EDA) de los mejores juegos en Google Play, revelando información sobre categorías, calificaciones, instalaciones y popularidad.",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Ia9V_nJ6za0viVMaqyiZRg.png",
    technologies: ["Python", "Streamlit", "Plotly", "Pandas"],
    liveUrl: "https://eda-top-games.streamlit.app/",
    githubUrl: "",
    mediumUrl: "https://medium.com/analytics-vidhya/top-games-google-play-store-dashboard-with-plotly-and-streamlit-5cae418fd915",
    features: [
      "Dashboard interactivo para exploración de datos",
      "Análisis de juegos gratis vs de pago",
      "Análisis de calificaciones e instalaciones por categoría",
      "Sistema de puntuación ponderado para identificar los mejores juegos",
    ]
  },
  {
    title: "Dashboard Recursos Humanos",
    description: "Dashboard interactivo para la gestión de Recursos Humanos, proporcionando métricas clave sobre ausencias, rotación de personal y descuentos por sucursal.",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*hhWa3gl8a_jPVmJN7lBBgg.png",
    technologies: ["Tableau", "Python"],
    liveUrl: "https://public.tableau.com/views/Book2_17380410342780/Dashboard1?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    githubUrl: "",
    mediumUrl: "",
    features: [
      "Visualización de ausencias por sucursal",
      "Seguimiento de la rotación de personal",
      "Comparación de colaboradores activos por mes",
      "Mapa de calor de descuentos",
      "Filtros interactivos por mes y sucursal"
    ]
  }
];
import { Project, Categories } from "./types";

export const projects: Project[] = [
  {
    id: "etl-falabella-playa-2025",
    title: "ETL para Análisis de Descripciones de Productos de Falabella",
    category: "data-engineering",
    description:
      "Pipeline ETL para el análisis de datos de productos de temporada de playa.",
    technologies: ["Python", "Análisis de Datos", "Gemini AI", "Web Scraping"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Falabella.svg/320px-Falabella.svg.png",
    demoUrl: "https://customer-churn-demo.streamlit.app",
    githubUrl: "https://github.com/antguivy/etl-falabella-playa-2025",
    linkedinUrl:null,
    date: "2025-02-19",
    featured: true,
    status: "deployed",
  },
  {
    id: "segmentacion-productos-kmeans-2025",
    title: "Segmentación de Productos con K-means",
    category: "data-analysis",
    description:
      "Análisis de segmentación de productos en comercio electrónico mediante K-means, proporcionando estrategias optimizadas para marketing, gestión de inventarios y precios.",
    technologies: [
      "Sklearn",
      "Pandas",
      "SqlServer"
    ],
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3P8J9su-2v5M0kniOaH7ow.png",
    demoUrl: "",
    githubUrl: "",
    linkedinUrl:null,
    date: "2025-02-10",
    featured: true,
    status: "deployed",
  },
  {
    id: "dashboard-recursos-humanos-2022",
    title: "Dashboard para Recursos Humanos",
    category: "data-analysis",
    description:
      "Dashboard interactivo para la gestión de Recursos Humanos, proporcionando métricas clave sobre ausencias, rotación de personal y descuentos por sucursal.",
    technologies: ["Python","Pandas", "Tableau"],
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*hhWa3gl8a_jPVmJN7lBBgg.png",
    demoUrl: "https://public.tableau.com/views/Book2_17380410342780/Dashboard1?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    githubUrl: "",
    linkedinUrl:null,
    date: "2025-01-28",
    featured: false,
    status: "deployed",
  },
  {
    id: "web-scraping-bvl-2025",
    title: "Web Scraping BVL (Bolsa de Valores de Lima)",
    category: "data-analysis",
    description:
      "Extracción de datos públicos para un estudio externo, cuyo objetivo fue estimar la eficiencia financiera de las empresas listadas en la BVL.",
      technologies: ["Selenium", "Pandas"],
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bolsa_de_Valores_de_Lima_logo.png",
    demoUrl: "",
    githubUrl: "",
    linkedinUrl:null,
    date: "2025-01-26",
    featured: true,
    status: "deployed",
  },
  {
    id: "eda-juegos-google-play-2021",
    title: "EDA para juegos en Google Play",
    category: "data-analysis",
    description:
      "Análisis Exploratorio de Datos (EDA) de los mejores juegos en Google Play, revelando información sobre categorías, calificaciones, instalaciones y popularidad.",
    technologies: [
"Python", "Streamlit", "Plotly", "Pandas"
    ],
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Ia9V_nJ6za0viVMaqyiZRg.png",
    demoUrl: "",
    githubUrl: "",
    linkedinUrl:null,
    date: "2021-05-05",
    featured: true,
    status: "deployed",
  }
  
  //   {
  //   id: "etl-pipeline-airflow",
  //   title: "ETL Pipeline con Apache Airflow",
  //   category: "data-engineering",
  //   description:
  //     "Pipeline automatizado de ETL para procesar datos de múltiples fuentes con orquestación en Airflow y almacenamiento en Data Lake.",
  //   technologies: [
  //     "Apache Airflow",
  //     "Python",
  //     "Docker",
  //     "PostgreSQL",
  //     "AWS S3",
  //   ],
  //   image: "/projects/etl-pipeline.jpg",
  //   demoUrl: "https://etl-demo.herokuapp.com",
  //   githubUrl: "https://github.com/username/etl-airflow-pipeline",
  //   linkedinUrl:null,
  //   date: "2024-02-28",
  //   featured: true,
  //   status: "deployed",
  // },
  // {
  //   id: "ai-document-classifier",
  //   title: "Clasificador de Documentos con IA",
  //   category: "ai-development",
  //   description:
  //     "Sistema de clasificación automática de documentos usando NLP y modelos transformer con interfaz web para pruebas.",
  //   technologies: ["Python", "Transformers", "FastAPI", "React", "Docker"],
  //   image: "/projects/document-classifier.jpg",
  //   demoUrl: "https://doc-classifier-ai.vercel.app",
  //   githubUrl: "https://github.com/username/ai-document-classifier",
  //   linkedinUrl:null,
  //   date: "2024-04-10",
  //   featured: true,
  //   status: "deployed",
  // },
  // {
  //   id: "sales-forecasting",
  //   title: "Predicción de Ventas con Time Series",
  //   category: "data-analysis",
  //   description:
  //     "Modelo de forecasting para predicción de ventas usando ARIMA y Prophet con dashboard interactivo.",
  //   technologies: ["Python", "Prophet", "ARIMA", "Dash", "Plotly"],
  //   image: "/projects/sales-forecast.jpg",
  //   demoUrl: "https://sales-forecast-demo.herokuapp.com",
  //   githubUrl: "https://github.com/username/sales-forecasting",
  //   linkedinUrl:null,
  //   date: "2024-01-20",
  //   featured: false,
  //   status: "deployed",
  // },
  // {
  //   id: "realtime-data-streaming",
  //   title: "Sistema de Streaming de Datos en Tiempo Real",
  //   category: "data-engineering",
  //   description:
  //     "Arquitectura de streaming con Kafka y Spark para procesamiento de datos en tiempo real con dashboard de monitoreo.",
  //   technologies: [
  //     "Apache Kafka",
  //     "Apache Spark",
  //     "Python",
  //     "Grafana",
  //     "Docker",
  //   ],
  //   image: "/projects/streaming-system.jpg",
  //   demoUrl: "https://streaming-demo.herokuapp.com",
  //   githubUrl: "https://github.com/username/realtime-streaming",
  //   linkedinUrl:null,
  //   date: "2024-05-05",
  //   featured: true,
  //   status: "deployed",
  // },
  // {
  //   id: "chatbot-customer-service",
  //   title: "Chatbot de Atención al Cliente",
  //   category: "ai-development",
  //   description:
  //     "Chatbot inteligente con procesamiento de lenguaje natural para automatizar atención al cliente con integración a CRM.",
  //   technologies: [
  //     "Python",
  //     "OpenAI GPT",
  //     "LangChain",
  //     "FastAPI",
  //     "PostgreSQL",
  //   ],
  //   image: "/projects/chatbot-service.jpg",
  //   demoUrl: "https://chatbot-demo.vercel.app",
  //   githubUrl: "https://github.com/username/ai-chatbot-service",
  //   linkedinUrl:null,
  //   date: "2024-03-30",
  //   featured: false,
  //   status: "deployed",
  // },
  // {
  //   id: "fraud-detection-ml",
  //   title: "Detección de Fraudes con Machine Learning",
  //   category: "data-analysis",
  //   description:
  //     "Sistema de detección de transacciones fraudulentas usando algoritmos de anomaly detection y redes neuronales.",
  //   technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "Redis"],
  //   image: "/projects/fraud-detection.jpg",
  //   demoUrl: "https://fraud-detection-demo.herokuapp.com",
  //   githubUrl: "https://github.com/username/fraud-detection-ml",
  //   linkedinUrl:null,
  //   date: "2024-04-25",
  //   featured: true,
  //   status: "deployed",
  // },
  // {
  //   id: "data-lakehouse-architecture",
  //   title: "Arquitectura Data Lakehouse",
  //   category: "data-engineering",
  //   description:
  //     "Implementación completa de Data Lakehouse usando Delta Lake con pipelines de procesamiento batch y streaming.",
  //   technologies: ["Delta Lake", "Apache Spark", "Python", "AWS", "Terraform"],
  //   image: "/projects/data-lakehouse.jpg",
  //   demoUrl: "https://lakehouse-demo.aws.com",
  //   githubUrl: "https://github.com/username/data-lakehouse",
  //   linkedinUrl:null,
  //   date: "2024-02-15",
  //   featured: false,
  //   status: "deployed",
  // },
]

export const categories:Categories = {
  "data-analysis": {
    name: "Análisis de Datos",
    description: "Proyectos de análisis, visualización y modelado de datos",
    color: "#3B82F6",
    icon: "📊",
  },
  "data-engineering": {
    name: "Data Engineering",
    description:
      "Pipelines, ETL, arquitecturas de datos y sistemas distribuidos",
    color: "#10B981",
    icon: "⚙️",
  },
  "ai-development": {
    name: "Desarrollo con IA",
    description: "Aplicaciones con inteligencia artificial y machine learning",
    color: "#8B5CF6",
    icon: "🤖",
  },
}

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
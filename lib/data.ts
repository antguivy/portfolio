import { Project, Categories, Technology } from "./types";

export const projects: Project[] = [
  {
    id: "elt-opensky-flydata",
    title: "Pipeline de Datos de Vuelos - Arquitectura ELT",
    category: ["data-engineering"],
    description:
      "Pipeline de datos robusto que ingesta información de vuelos actuales desde OpenSky Network API utilizando procesamiento por lotes. Implementa patrones ELT modernos con Airflow para orquestación, dbt para transformaciones, SODA para validación de calidad y BigQuery como almacén analítico, optimizado para el contexto peruano.",
    technologies: [
      "Python",
      "Apache Airflow",
      "dbt",
      "SODA",
      "BigQuery",
      "Astronomer Cosmos",
      "Google Cloud Platform",
      "OpenSky API",
      "SQL"
    ],
    image:
      "https://media.licdn.com/dms/image/v2/D4E22AQF9Wnu9sYXrBA/feedshare-shrink_800/B4EZdtX0ZMHsAg-/0/1749886650861?e=1752710400&v=beta&t=Sk5ko78JGDG74e1AYqcdfWwvR4wNZlbScF4mFD_D8FU",
    demoUrl: "",
    githubUrl: "https://github.com/antguivy/elt-opensky-flydata",
    linkedinUrl: "https://www.linkedin.com/posts/antguivy_dataengineering-airflow-dbt-activity-7339652839704612864-B_gZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABz9KywBfbARP0fv_uE6vyPpQVzkEMm3jyo",
    date: "14-06-2025",
    featured: true,
    status: "deployed",
    public: false,
  },
  {
    id: "conversational-chat-db-bigquery",
    title: "Chat Conversacional + Bigquery + IA",
    category: ["ai-development"],
    description:
      "Chat inteligente que permite a usuarios no técnicos explorar datos de salud pública con IA generativa. El sistema convierte preguntas en lenguaje natural a SQL optimizado, analiza millones de registros en BigQuery y genera visualizaciones automáticas con alto rendimiento y manejo de casos complejos.",
    technologies: [
      "Python",
      "Streamlit",
      "BigQuery",
      "Gemini AI",
      "Plotly",
      "pandas",
      "Google Cloud Platform",
      "SQL",
      "Prompt Engineering",
    ],
    image:
      "https://github.com/antguivy/conversational-chat-db-bigquery/blob/main/docs/ss-bg.png?raw=true",
    demoUrl: "",
    githubUrl:
      "https://github.com/antguivy/conversational-chat-db-bigquery/tree/main",
    linkedinUrl:
      "https://www.linkedin.com/posts/antguivy_inteligenciaartificial-bigquery-geminiai-activity-7337840993506918400-J-ug?utm_source=share&utm_medium=member_desktop&rcm=ACoAABz9KywBfbARP0fv_uE6vyPpQVzkEMm3jyo",
    date: "06-06-2025",
    featured: true,
    status: "deployed",
    public: true,
  },
  {
    id: "anomalies-detection-realtime-quix",
    title: "Detección de Anomalías en la Bolsa en Tiempo Real",
    category: ["data-engineering", "machine-learning"],
    description:
      "Sistema avanzado de detección de anomalías en tiempo real para datos financieros de NASDAQ. Implementa un pipeline completo con streaming de datos, modelos de ML ensemble y visualización interactiva para identificar patrones anómalos en trades de acciones.",
    technologies: [
      "Python",
      "Quix",
      "Redpanda",
      "Docker",
      "Plotly",
      "scikit-learn",
      "Streamlit",
      "pandas",
    ],
    image:
      "https://res.cloudinary.com/dbo6tkhor/image/upload/v1749098927/projects/Screenshot_2025-06-04_225856_ywosd9.png",
    demoUrl: "",
    githubUrl: "https://github.com/antguivy/anomalies-detection-realtime-quix",
    linkedinUrl:
      "https://www.linkedin.com/posts/antguivy_powerbi-dashboard-datavisualization-activity-7306000340183646210-UPmE?utm_source=share&utm_medium=member_desktop&rcm=ACoAABz9KywBfbARP0fv_uE6vyPpQVzkEMm3jyo",
    date: "04-06-2025",
    featured: true,
    status: "deployed",
    public: false,
  },
  {
    id: "dashboard-logistics-insights",
    title: "Logistics and Revenue Insights",
    category: ["data-analysis"],
    description:
      "Dashboard enfocado en conocimientos logísticos y de ingresos en distintas regiones. Este proyecto fue inspirado por una publicación en LinkedIn de Injae Park y fue desarrollado utilizando datos históricos de Kaggle.",
    technologies: ["Power BI", "Figma", "Tabular Editor"],
    image:
      "https://github.com/antguivy/dashboard-logistics-insights/blob/main/dashboard.png?raw=true",
    demoUrl: "",
    githubUrl: "https://github.com/antguivy/dashboard-logistics-insights",
    linkedinUrl:
      "https://www.linkedin.com/posts/antguivy_powerbi-dashboard-datavisualization-activity-7306000340183646210-UPmE?utm_source=share&utm_medium=member_desktop&rcm=ACoAABz9KywBfbARP0fv_uE6vyPpQVzkEMm3jyo",
    date: "13-03-2025",
    featured: true,
    status: "deployed",
    public: true,
  },
  {
    id: "dashboard-ipd-peru-2025",
    title: "Data Storytelling IPD",
    category: ["data-analysis"],
    description:
      "Dashboard Interactivo que analiza el desempeño internacional de las federaciones deportivas peruanas durante el periodo 2014-2023.",
    technologies: ["Power BI", "Figma"],
    image:
      "https://github.com/antguivy/dashboard-ipd-peru-2025/blob/main/docs/dashboard_ss.png?raw=true",
    demoUrl: "",
    githubUrl: "https://github.com/antguivy/dashboard-ipd-peru-2025/tree/main",
    linkedinUrl:
      "https://www.linkedin.com/posts/antguivy_datastorytelling-powerbi-dashboarddesign-activity-7300050819893084161-OuB3?utm_source=share&utm_medium=member_desktop&rcm=ACoAABz9KywBfbARP0fv_uE6vyPpQVzkEMm3jyo",
    date: "25-02-2025",
    featured: true,
    status: "deployed",
    public: true,
  },
  {
    id: "etl-falabella-playa-2025",
    title: "ETL para Análisis de Descripciones de Productos de Falabella",
    category: ["data-engineering"],
    description:
      "Pipeline ETL para el análisis de datos de productos de temporada de playa.",
    technologies: ["Python", "Gemini AI", "Web Scraping"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Falabella.svg/320px-Falabella.svg.png",
    demoUrl: "",
    githubUrl: "https://github.com/antguivy/etl-falabella-playa-2025",
    linkedinUrl:
      "https://www.linkedin.com/posts/antguivy_etl-dataanalysis-webscraping-activity-7298021334402420738-pUhi?utm_source=share&utm_medium=member_desktop&rcm=ACoAABz9KywBfbARP0fv_uE6vyPpQVzkEMm3jyo",
    date: "19-02-2025",
    featured: true,
    status: "deployed",
    public: true,
  },
  {
    id: "segmentacion-productos-kmeans-2025",
    title: "Segmentación de Productos con K-means",
    category: ["data-analysis", "machine-learning"],
    description:
      "Análisis de segmentación de productos en comercio electrónico mediante K-means, proporcionando estrategias optimizadas para marketing, gestión de inventarios y precios.",
    technologies: ["Sklearn", "Pandas", "SqlServer"],
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*3P8J9su-2v5M0kniOaH7ow.png",
    demoUrl: "",
    githubUrl: "https://github.com/antguivy/segmentacion-productos-kmeans-2025",
    linkedinUrl: null,
    date: "10-02-2025",
    featured: true,
    status: "deployed",
    public: true,
  },
  {
    id: "dashboard-recursos-humanos-2022",
    title: "Dashboard para Recursos Humanos",
    category: ["data-analysis"],
    description:
      "Dashboard interactivo para la gestión de Recursos Humanos, proporcionando métricas clave sobre ausencias, rotación de personal y descuentos por sucursal.",
    technologies: ["Python", "Pandas", "Tableau"],
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*hhWa3gl8a_jPVmJN7lBBgg.png",
    demoUrl:
      "https://public.tableau.com/views/Book2_17380410342780/Dashboard1?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    githubUrl: "",
    linkedinUrl: null,
    date: "28-01-2025",
    featured: false,
    status: "deployed",
    public: true,
  },
  {
    id: "web-scraping-bvl-2025",
    title: "Web Scraping BVL (Bolsa de Valores de Lima)",
    category: ["data-analysis"],
    description:
      "Extracción de datos públicos para un estudio externo, cuyo objetivo fue estimar la eficiencia financiera de las empresas listadas en la BVL.",
    technologies: ["Selenium", "Pandas"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bolsa_de_Valores_de_Lima_logo.png",
    demoUrl: "",
    githubUrl: "https://github.com/antguivy/web-scraping-bvl-2025",
    linkedinUrl: null,
    date: "26-01-2025",
    featured: true,
    status: "deployed",
    public: true,
  },
  {
    id: "eda-juegos-google-play-2021",
    title: "EDA para juegos en Google Play",
    category: ["data-analysis"],
    description:
      "Análisis Exploratorio de Datos (EDA) de los mejores juegos en Google Play, revelando información sobre categorías, calificaciones, instalaciones y popularidad.",
    technologies: ["Python", "Streamlit", "Plotly", "Pandas"],
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Ia9V_nJ6za0viVMaqyiZRg.png",
    demoUrl: "",
    githubUrl: "https://github.com/antguivy/eda-juegos-google-play-2021",
    linkedinUrl: null,
    date: "05-05-2021",
    featured: true,
    status: "deployed",
    public: true,
  },

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
];

export const categories: Categories = {
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
  "machine-learning": {
    name: "Machine Learning",
    description:
      "Modelos, entrenamiento y aplicaciones de aprendizaje automático",
    color: "#F59E0B",
    icon: "🧠",
  },
};

export const technologies: Technology[] = [
  {
    name:"n8n",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png",
    categories: ["ai-development"] // Útil para Data data-engineering
  },
  {
    name: "Snowflake",
    logo: "https://cdn.brandfetch.io/idJz-fGD_q/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    categories: ["data-engineering"] // Útil para ambos roles
  },
  {
    name: "dbt",
    logo: "https://images.seeklogo.com/logo-png/43/2/dbt-logo-png_seeklogo-431111.png",
    categories: ["data-engineering"] // Útil para Data data-engineering
  },
  {
    name: "SODA",
    logo: "https://avatars.githubusercontent.com/u/45313710?v=4",
    categories: ["data-engineering"] // Útil para Data data-engineering
  },
  {
    name: "Astronomer Cosmos",
    logo: "https://astronomer.io/favicon.ico",
    categories: ["data-engineering"] // Útil para Data data-engineering
  },
  {
    name: "BigQuery",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    categories: ["data-engineering", "data-analysis"] // Útil para ambos roles
  },
  {
    name: "Redpanda",
    logo: "https://cdn.brandfetch.io/id-QtFxwCg/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    categories: ["data-engineering"] // Útil para Data data-engineering y AI data-engineering
  },
  {
    name: "Apache Airflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg",
    categories: ["data-engineering"]
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    categories: ["data-analysis", "others"]
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    categories: ["data-engineering", "ai-development", "data-analysis"] // Puede ser tanto Data data-engineering como AI data-engineering
  },
  {
    name: "SQL",
    logo: "https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg",
    categories: ["data-analysis", "data-engineering"] // Útil para ambos roles
  },
  {
    name: "Tableau",
    logo: "https://www.svgrepo.com/show/354428/tableau-icon.svg",
    categories: ["data-analysis"]
  },
  {
    name: "Power BI",
    logo: "https://its.ucr.edu/sites/default/files/styles/form_preview/public/powerbi%20logo%201.png?itok=yYXO-S-V",
    categories: ["data-analysis"]
  },
  {
    name: "Excel",
    logo: "https://www.svgrepo.com/show/373589/excel.svg",
    categories: ["data-analysis"]
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    categories: ["others"]
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    categories: ["others"]
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    categories: ["others"] // Útil para desarrollo y ingeniería
  },
  {
    name: "Tailwind",
    logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
    categories: ["others"]
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    categories: ["data-engineering", "others", "data-analysis"] // Útil para todos los desarrollos
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    categories: ["data-engineering", "ai-development", "data-analysis", "others"] // Útil para todos los desarrollos
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    categories: ["data-engineering", "ai-development"] // Útil para Data data-engineering y AI data-engineering
  },
  {
    name: "AWS EC2",
    logo: "https://www.svgrepo.com/show/448268/aws-ec2.svg",
    categories: ["others"] // Infraestructura para ambos roles
  }
];

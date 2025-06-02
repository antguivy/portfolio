// Tipo para el estado del proyecto
export type ProjectStatus = "deployed" | "in-progress" | "planned" | "archived";

// Tipo para las categorías disponibles
export type ProjectCategory = "data-analysis" | "data-engineering" | "ai-development";

// Tipo para un proyecto individual
export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  linkedinUrl: string | null;
  date: string; // Podrías usar Date si prefieres
  featured: boolean;
  status: ProjectStatus;
}

// Tipo para la información de una categoría
export interface CategoryInfo {
  name: string;
  description: string;
  color: string;
  icon: string;
}

// Tipo para el objeto de categorías
export type Categories = Record<ProjectCategory, CategoryInfo>;

// Tipos derivados útiles
export type FeaturedProject = Project & { featured: true };
export type ProjectsByCategory = Record<ProjectCategory, Project[]>;

// Tipo para filtros de proyecto
export interface ProjectFilters {
  category?: ProjectCategory;
  status?: ProjectStatus;
  featured?: boolean;
  technologies?: string[];
}
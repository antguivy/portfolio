"use client";
import React, { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import {
  getCategoryIcon
} from "@/components/functions";
import { ProjectCategory } from "@/lib/types";
import ListProjects from "@/components/list-projects";

export function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Memoizar proyectos filtrados
  const filteredProjects = useMemo(() => {
    const filtered = selectedCategory
      ? projects.filter((p) => p.category.includes(selectedCategory))
      : projects;
    return filtered.slice(0, 3);
  }, [selectedCategory]);

  // Simplificar variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };
  // Función para obtener las categorías a mostrar según el filtro activo
  const getDisplayCategories = useCallback(
    (projectCategories: ProjectCategory[]) => {
      if (selectedCategory) {
        // Si hay una categoría seleccionada, solo mostrar esa categoría si el proyecto la tiene
        return projectCategories.includes(selectedCategory)
          ? [selectedCategory]
          : [];
      }
      // Si no hay filtro, mostrar todas las categorías del proyecto
      return projectCategories;
    },
    [selectedCategory]
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const handleCategoryChange = useCallback(
    (category: ProjectCategory | null) => {
      setSelectedCategory(category);
    },
    []
  );

  const handleProjectHover = useCallback((projectTitle: string | null) => {
    setHoveredProject(projectTitle);
  }, []);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-foreground">Proyectos</span>
            <br />
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recientes
            </span>
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-12"
        >
          <Button
            onClick={() => handleCategoryChange(null)}
            className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 cursor-pointer ${
              selectedCategory === null
                ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-background hover:bg-accent text-colortext border border-border shadow-xs"
            }`}
          >
            Todos
          </Button>
          {Object.entries(categories).map(([key, category]) => (
            <Button
              key={key}
              onClick={() => handleCategoryChange(key as ProjectCategory)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                selectedCategory === key
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-background hover:bg-accent text-colortext border border-border shadow-xs"
              }`}
            >
              {getCategoryIcon(key as ProjectCategory)}
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => {
              // Obtener las categorías a mostrar según el filtro
              const displayCategories = getDisplayCategories(project.category);

              return (
                <motion.div
                  key={`${project.id}-${selectedCategory || "all"}`}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8 }}
                  onHoverStart={() => handleProjectHover(project.title)}
                  onHoverEnd={() => handleProjectHover(null)}
                  className="group"
                >
                  <ListProjects
                    project={project}
                    displayCategories={displayCategories}
                    hoveredProject={hoveredProject}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          // Estado vacío cuando no hay resultados
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="mx-auto max-w-md">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                No se encontraron proyectos
              </h3>
              <p className="text-gray-600 mb-6">
                Aún no se han agregado proyectos a esta categoría
              </p>
            </div>
          </motion.div>
        )}

        {/* Ver Más Proyectos Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/project" prefetch={false}>
            <Button className="cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Ver Todos mis Proyectos
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import React, { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  getCategoryIcon
} from "@/components/functions";
import { ProjectCategory } from "@/lib/types";
import ListProjects from "@/components/list-projects";
import { Input } from "@/components/ui/input";

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Nuevo estado para búsqueda

  // Memoizar proyectos filtrados con búsqueda
  const filteredProjects = useMemo(() => {
    let filtered: (typeof projects)[number][] = [...projects];

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category.includes(selectedCategory));
    }

    // Filtrar por término de búsqueda
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter((project) => {
        const categoryMatches = project.category.some((cat) =>
          categories[cat].name.toLowerCase().includes(searchLower)
        );

        return (
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchLower)
          ) ||
          categoryMatches
        );
      });
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

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

  // Simplificar variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

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

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  // Función para limpiar la búsqueda
  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background simplificado */}

      <div className="container mx-auto px-6 relative">
        {/* Search and Filters */}
        <div className="bg-card p-4 mb-4 shadow-xs rounded-xl">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Búsqueda y Filtro Móvil */}
            <div className="flex-1 w-full">
              <div className="flex gap-3 items-center justify-between">
                {/* Campo de búsqueda */}
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Buscar proyectos..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-12 py-3 border border-border rounded-xl focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      aria-label="Limpiar búsqueda"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Select de filtros en móvil - mejorado */}
                <div className="block lg:hidden relative">
                  <Select
                    value={selectedCategory || "all"}
                    onValueChange={(value) =>
                      handleCategoryChange(value === "all" ? null : (value as ProjectCategory))
                    }
                  >
                    <SelectTrigger className="w-12 h-9 border-0 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 px-2 [&>span]:hidden">
                      <div className="w-full h-full flex items-center justify-center relative">
                        {/* Icono principal */}
                        <div className="text-gray-600">
                          {selectedCategory ? (
                            getCategoryIcon(selectedCategory)
                          ) : (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Indicador de filtro activo */}
                        {selectedCategory && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                    </SelectTrigger>

                    <SelectContent className="min-w-[200px]">
                      <SelectItem value="all">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                          <span>Todos</span>
                        </div>
                      </SelectItem>

                      {Object.entries(categories).map(([key, category]) => (
                        <SelectItem key={key} value={key}>
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(key as ProjectCategory)}
                            <span>{category.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Filtros en desktop (botones) */}
            <div className="hidden lg:flex flex-wrap gap-2">
              <Button
                onClick={() => handleCategoryChange(null)}
                className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 cursor-pointer ${selectedCategory === null
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
                  className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${selectedCategory === key
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-background hover:bg-accent text-colortext border border-border shadow-xs"
                    }`}
                >
                  {getCategoryIcon(key as ProjectCategory)}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Resultados de búsqueda y filtros activos */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-colortext">
            <span>
              {filteredProjects.length} proyecto
              {filteredProjects.length !== 1 ? "s" : ""} encontrado
              {filteredProjects.length !== 1 ? "s" : ""}
            </span>

            {/* Filtros activos */}
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-md">
                  <span>Búsqueda: "{searchTerm}"</span>
                  <button
                    onClick={clearSearch}
                    className="hover:bg-blue-200 rounded p-0.5 transition-colors"
                    aria-label="Quitar filtro de búsqueda"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {selectedCategory && categories[selectedCategory as keyof typeof categories] && (
                <div className="flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-md">
                  <span>
                    Categoría:{""}
                    {categories[selectedCategory as keyof typeof categories]?.name}
                  </span>
                  <button
                    onClick={() => handleCategoryChange(null)}
                    className="hover:bg-purple-200 rounded p-0.5 transition-colors"
                    aria-label="Quitar filtro de categoría"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => {
                // Obtener las categorías a mostrar según el filtro
                const displayCategories = getDisplayCategories(
                  project.category
                );

                return (
                  <motion.div
                    key={`${project.id}-${selectedCategory || "all"
                      }-${searchTerm}`}
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
                  No hay proyectos que coincidan con tu búsqueda
                  {selectedCategory ? " y filtro" : ""}.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Limpiar búsqueda
                    </button>
                  )}
                  {selectedCategory && (
                    <button
                      onClick={() => handleCategoryChange(null)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Mostrar todos los proyectos
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

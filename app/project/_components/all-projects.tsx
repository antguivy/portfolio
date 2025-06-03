"use client";
import React, { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, categories } from "@/lib/data";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Brain,
  Calendar,
  Check,
  Code,
  Database,
  ExternalLink,
  Eye,
  Grid3X3,
  List,
  Play,
  Star,
  Tag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaMedium } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getCategoryBadgeClass,
  getCategoryColor,
  getCategoryIcon,
} from "@/components/functions";

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<String | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Nuevo estado para búsqueda

  // Memoizar proyectos filtrados con búsqueda
  const filteredProjects = useMemo(() => {
    let filtered: (typeof projects)[number][] = [...projects];

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filtrar por término de búsqueda
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchLower)
          ) ||
          categories[project.category].name.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

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

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
  }, []);

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
            <div className="flex-1 max-w-md w-full">
              <div className="flex gap-3 items-center">
                {/* Campo de búsqueda */}
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Buscar proyectos..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
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
                  <div className="relative">
                    <select
                      value={selectedCategory || ""}
                      onChange={(e) =>
                        handleCategoryChange(e.target.value || null)
                      }
                      className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                      title="Filtrar por categoría"
                    >
                      <option value="">Todos</option>
                      {Object.entries(categories).map(([key, category]) => (
                        <option key={key} value={key}>
                          {category.name}
                        </option>
                      ))}
                    </select>

                    {/* Botón visual */}
                    <div className="w-12 h-12 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-xl transition-all duration-200 flex items-center justify-center relative">
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

                      {/* Flecha dropdown */}
                      <div className="absolute bottom-1 right-1">
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {/* Indicador de filtro activo */}
                      {selectedCategory && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filtros en desktop (botones) */}
            <div className="hidden lg:flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === null
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                Todos
              </button>
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    selectedCategory === key
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {getCategoryIcon(key)}
                  {category.name}
                </button>
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

              {selectedCategory && (
                <div className="flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-md">
                  <span>
                    Categoría:{" "}
                    {
                      categories[selectedCategory as keyof typeof categories]
                        .name
                    }
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
              {filteredProjects.map((project) => (
                <motion.div
                  key={`${project.id}-${
                    selectedCategory || "all"
                  }-${searchTerm}`}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8 }}
                  onHoverStart={() => handleProjectHover(project.title)}
                  onHoverEnd={() => handleProjectHover(null)}
                  className="group"
                >
                  <Card className="relative overflow-hidden bg-card backdrop-blur-xs border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-video bg-linear-to-br from-gray-100 to-gray-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={450}
                        height={225}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                        loading="lazy"
                      />

                      {/* Category Badge */}
                      <div className="absolute bottom-2 left-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground backdrop-blur-xs shadow-md">
                          <div
                            className={`p-1 rounded-full text-white bg-linear-to-r ${getCategoryColor(
                              project.category
                            )}`}
                          >
                            {getCategoryIcon(project.category)}
                          </div>
                          <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                            {categories[project.category].name}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.demoUrl && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-white/95 hover:bg-white text-slate-800 shadow-lg rounded-full p-2"
                          >
                            <Link
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Play className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-white/95 hover:bg-white text-slate-800 shadow-lg rounded-full p-2"
                          >
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGithub className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2 text-colortext group-hover:text-primary transition-colors duration-200 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-colortext/90 leading-relaxed text-sm">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge
                              key={tech}
                              // variant="outline"
                              className={`border font-medium text-xs px-2 py-1 rounded-full transition-colors duration-200 ${getCategoryBadgeClass(
                                project.category
                              )}`}
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge
                              className={`border font-medium text-xs px-2 py-1 rounded-full ${getCategoryBadgeClass(
                                project.category
                              )}`}
                            >
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-colortext">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium text-sm">
                            {project.date}
                          </span>
                        </div>
                        <Link
                          href={`/project/${project.id}`}
                          className="block h-full"
                          prefetch={false}
                        >
                          <div className="flex items-center gap-1.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer hover:underline hover:underline-offset-4">
                            {hoveredProject === project.title && (
                              <span className="text-sm font-medium">Abrir</span>
                            )}
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
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

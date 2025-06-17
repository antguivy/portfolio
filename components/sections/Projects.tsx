"use client";
import React, { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, categories } from "@/lib/data";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
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
import { Badge } from "../ui/badge";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getCategoryBadgeClass,
  getCategoryColor,
  getCategoryIcon,
} from "../functions";
import { ProjectCategory } from "@/lib/types";

export function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory | null>(null);
  const [hoveredProject, setHoveredProject] = useState<String | null>(null);

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
            className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 ${
              selectedCategory === null
                ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-xs"
            }`}
          >
            Todos
          </Button>
          {Object.entries(categories).map(([key, category]) => (
            <Button
              key={key}
              onClick={() => handleCategoryChange(key as ProjectCategory)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === key
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-xs"
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
                  <Card className="relative overflow-hidden bg-card backdrop-blur-xs border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
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

                      {/* Category Badge - Mostrar según el filtro */}
                      <div className="absolute bottom-2 left-2">
                        <div className="flex gap-2 flex-wrap max-w-[200px]">
                          {displayCategories.map((cat) => (
                            <div
                              key={cat}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground backdrop-blur-xs shadow-md"
                            >
                              <div
                                className={`p-1 rounded-full text-white bg-linear-to-r ${getCategoryColor(
                                  cat
                                )}`}
                              >
                                {getCategoryIcon(cat)}
                              </div>
                              <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                                {categories[cat].name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.linkedinUrl && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-white/95 hover:dark:bg-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-800 shadow-lg rounded-full p-2"
                          >
                            <Link
                              href={project.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaLinkedin className="w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && project.public && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-white/95 hover:dark:bg-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 text-slate-800 shadow-lg rounded-full p-2"
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

                    {/* Content - Ahora con flex-grow para que ocupe el espacio disponible */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-4 flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-colortext group-hover:text-primary transition-colors duration-200 leading-tight">
                          <Link href={`/project/${project.id}`}>
                            {project.title}
                          </Link>
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
                              className={`border font-medium text-xs px-2 py-1 rounded-full transition-colors duration-200 ${getCategoryBadgeClass(
                                displayCategories[0] || project.category[0]
                              )}`}
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge
                              className={`border font-medium text-xs px-2 py-1 rounded-full ${getCategoryBadgeClass(
                                displayCategories[0] || project.category[0]
                              )}`}
                            >
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Footer - Siempre al final */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
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
            <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Ver Todos mis Proyectos
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

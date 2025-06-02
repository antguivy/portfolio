"use client";
import React, { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, categories } from "@/data/projects";
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
import { FaGithub, FaMedium } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCategoryBadgeClass, getCategoryColor, getCategoryIcon } from "../functions";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<String | null>(null);
  const [hoveredProject, setHoveredProject] = useState<String | null>(null);

  // Memoizar proyectos filtrados
  const filteredProjects = useMemo(() => {
    const filtered = selectedCategory
      ? projects.filter((p) => p.category === selectedCategory)
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

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background simplificado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Proyectos
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm"
            }`}
          >
            Todos
          </Button>
          {Object.entries(categories).map(([key, category]) => (
            <Button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm"
              }`}
            >
              {getCategoryIcon(key)}
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={`${project.id}-${selectedCategory || "all"}`}
                variants={itemVariants}
                layout
                whileHover={{ y: -8 }}
                onHoverStart={() => handleProjectHover(project.title)}
                onHoverEnd={() => handleProjectHover(null)}
                className="group"
              >
                <Card className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
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
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                        <div
                          className={`p-1 rounded-full text-white bg-gradient-to-r ${getCategoryColor(
                            project.category
                          )}`}
                        >
                          {getCategoryIcon(project.category)}
                        </div>
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
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
                      <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-700 transition-colors duration-200 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
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
                      <div className="flex items-center gap-2 text-slate-500">
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
                        <div className="flex items-center gap-1.5 text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer hover:underline hover:underline-offset-4">
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
          </AnimatePresence>
        </motion.div>

        {/* Ver Más Proyectos Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/project" prefetch={false}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Ver Todos los Proyectos
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

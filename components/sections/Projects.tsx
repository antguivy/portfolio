"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Check, ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import { FaGithub, FaMedium } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Proyectos <span className="text-primary">Relevantes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Explora mis proyectos más recientes, donde he aplicado técnicas de análisis de datos, desde la extracción y 
          limpieza de datos hasta la creación de visualizaciones interactivas y dashboards.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border-border/5 bg-card hover:shadow-xl transition-all duration-300 ">
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <Button asChild variant={"secondary"} size={"sm"}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant={"secondary"} size={"sm"}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <FaGithub className="w-4 h-4" />
                        Ver Código
                      </a>
                    </Button>
                  )}
                  {project.mediumUrl && (
                    <Button asChild variant={"secondary"} size={"sm"}>
                      <a
                        href={project.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <FaMedium className="w-4 h-4" />
                        Ver en Medium
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant={"secondary"}
                        className="bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

"use client";
import React, { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import Image from "next/image";
import { technologies } from "@/lib/data";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<String | null>(null);

  // Memoizar variantes de animación
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.1 },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      },
    }),
    []
  );

  const handleSkillHover = useCallback((skillName: string | null) => {
    setHoveredSkill(skillName);
  }, []);

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-foreground">Skills</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-3 bg-clip-text text-transparent">
              & Tecnologías
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              onHoverStart={() => handleSkillHover(tech.name)}
              onHoverEnd={() => handleSkillHover(null)}
              className="group"
            >
              <Card className="relative overflow-hidden bg-card backdrop-blur-sm border border-border shadow-lg hover:shadow-xl dark:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center h-full">
                {/* Gradient overlay animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-1/5 to-chart-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Borde animado */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-chart-1 to-chart-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                  <div className="w-full h-full bg-card rounded-xl" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-2xl bg-gradient-to-br from-muted/50 to-muted transition-all duration-300">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent mb-2">
              {technologies.length}+
            </div>
            <p className="text-muted-foreground font-medium">
              Tecnologías Dominadas
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent mb-2">
              2+
            </div>
            <p className="text-muted-foreground font-medium">
              Años de Experiencia
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-chart-3 to-primary bg-clip-text text-transparent mb-2">
              Auto
            </div>
            <p className="text-muted-foreground font-medium">Didacta</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

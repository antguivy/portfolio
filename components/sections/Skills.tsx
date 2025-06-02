"use client";
import React, { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { technologies } from "@/constants";
import { Card } from "../ui/card";
import Image from "next/image";

export function Skills () {
 const [hoveredSkill, setHoveredSkill] = useState<String | null>(null);

  // Memoizar variantes de animación
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    }
  }), []);

  const handleSkillHover = useCallback((skillName:string|null) => {
    setHoveredSkill(skillName);
  }, []);

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background decorativo similar a Projects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Skills
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              & Tecnologías
            </span>
          </h2>
          {/* <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Herramientas y tecnologías con las que trabajo para crear{" "}
            <span className="font-semibold text-purple-600">soluciones innovadoras</span>{" "}
            y{" "}
            <span className="font-semibold text-blue-600">experiencias excepcionales</span>.
          </p> */}
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
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              onHoverStart={() => handleSkillHover(tech.name)}
              onHoverEnd={() => handleSkillHover(null)}
              className="group"
            >
              <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center h-full">
                {/* Gradient overlay animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Borde animado */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                  <div className="w-full h-full bg-white rounded-xl" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm font-bold text-slate-700 group-hover:text-purple-700 transition-colors duration-300">
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
            <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              {technologies.length}+
            </div>
            <p className="text-slate-600 font-medium">Tecnologías Dominadas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              2+
            </div>
            <p className="text-slate-600 font-medium">Años de Experiencia</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-slate-600 font-medium">Aprendizaje Continuo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
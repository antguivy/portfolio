"use client";
import React, { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "../ui/card";
import Image from "next/image";
import { technologies } from "@/lib/data";
import { Badge } from "../ui/badge";
import { ChevronDown } from "lucide-react";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);

  // Categorías simplificadas
  const skillCategories = {
    all: 'Todos',
    "data-analysis": 'Data Analytics',
    "data-engineering": 'Data Engineer',
    "ai-development": 'AI Engineer',
    others: 'Otros'
  };

  // Filtrar tecnologías por categoría usando includes y ordenado
  const filteredTechnologies = useMemo(() => {
    if (activeCategory === 'all') return technologies.sort((a, b) => a.name.localeCompare(b.name));
    return technologies.filter(tech => tech.categories.includes(activeCategory));
  }, [activeCategory]);

  // Contar tecnologías por categoría
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: technologies.length };
    Object.keys(skillCategories).forEach(key => {
      if (key !== 'all') {
        counts[key] = technologies.filter(tech => tech.categories.includes(key)).length;
      }
    });
    return counts;
  }, []);

  // Variantes de animación optimizadas
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03,
          delayChildren: 0.1
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 15, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25
        },
      },
      exit: {
        opacity: 0,
        y: -15,
        scale: 0.9,
        transition: { duration: 0.2 }
      }
    }),
    []
  );

  const handleSkillHover = useCallback((skillName: string | null) => {
    setHoveredSkill(skillName);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setShowCategoryMenu(false);
  }, []);

  const toggleCategoryMenu = useCallback(() => {
    setShowCategoryMenu(prev => !prev);
  }, []);

  return (
    <section id="skills" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-6 ">
   {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            <span className="text-foreground">Skills</span>{' '}
            <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-3 bg-clip-text text-transparent">
              & Tecnologías
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Herramientas y tecnologías que domino para crear soluciones completas
          </p>

          {/* Filtro Discreto - Posicionado absolutamente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute top-0 right-0 hidden sm:block"
          >
            <div className="relative">
              <button
                onClick={toggleCategoryMenu}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted/50 rounded-lg transition-all duration-200 border border-border/50"
              >
                <span>{skillCategories[activeCategory as keyof typeof skillCategories]}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {filteredTechnologies.length}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showCategoryMenu ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {showCategoryMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 min-w-48"
                  >
                    {Object.entries(skillCategories).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => handleCategoryChange(key)}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center justify-between ${
                          activeCategory === key ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'
                        }`}
                        disabled={categoryCounts[key] === 0}
                      >
                        <span>{label}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          activeCategory === key 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {categoryCounts[key]}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Filtro para móviles - Centrado debajo del párrafo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="sm:hidden mt-6 flex justify-center"
          >
            <div className="relative">
              <button
                onClick={toggleCategoryMenu}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted/50 rounded-lg transition-all duration-200 border border-border/50"
              >
                <span>{skillCategories[activeCategory as keyof typeof skillCategories]}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  {filteredTechnologies.length}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showCategoryMenu ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu para móviles */}
              <AnimatePresence>
                {showCategoryMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 min-w-48"
                  >
                    {Object.entries(skillCategories).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => handleCategoryChange(key)}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center justify-between ${
                          activeCategory === key ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'
                        }`}
                        disabled={categoryCounts[key] === 0}
                      >
                        <span>{label}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          activeCategory === key 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {categoryCounts[key]}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>


        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-12 gap-3 md:gap-4"
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                onHoverStart={() => handleSkillHover(tech.name)}
                onHoverEnd={() => handleSkillHover(null)}
                className="group"
              >
                <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg transition-all duration-300 p-3 flex flex-col items-center justify-center text-center h-24 md:h-28">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-1/5 to-chart-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-chart-1 to-chart-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                    <div className="w-full h-full bg-card rounded-xl" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-1 md:mb-2">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-card-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {tech.name}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-6"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-chart-1 to-chart-3 bg-clip-text text-transparent mb-1">
              2+
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Años de Experiencia
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-chart-3 to-primary bg-clip-text text-transparent mb-1">
              Auto
            </div>
            <p className="text-sm text-muted-foreground font-medium">Didacta</p>
          </div>
        </motion.div>

        {/* Click outside to close menu */}
        {showCategoryMenu && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowCategoryMenu(false)}
          />
        )}
      </div>
    </section>
  );
}
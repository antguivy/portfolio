"use client";
import { motion } from "framer-motion";
import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const handleContactClick = useCallback(() => {
    // Opcional: agregar analytics tracking aquí
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 pt-20 pb-20 relative z-10">
        <div className="flex items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 text-center max-w-5xl mx-auto"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-6xl font-black leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-foreground mb-2"
                >
                  Hola, soy
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  Anthony
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4"
              >
                <p className="text-2xl md:text-3xl font-bold text-slate-700 leading-relaxed">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    Data Engineer & Analytics Engineer
                  </span>
                </p>
                <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
                  Con background en{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Ingeniería Industrial y Desarrollo SaaS
                  </span>
                  . Especializado en pipelines de datos, visualizaciones avanzadas y soluciones de ML end-to-end.
                </p>


                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="pt-4"
                >
                  <Link href="/#contact">
                    <Button
                      className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-10 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 text-xl group border-0 overflow-hidden"
                      onClick={handleContactClick}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      <Mail className="w-6 h-6 mr-3" />
                      Contáctame
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex items-center justify-center gap-6 pt-2"
                >
                  <div className="flex gap-4">
                    <Link
                      href="https://www.linkedin.com/in/antguivy/"
                      target="_blank"
                      className="p-3 rounded-2xl bg-white/80 backdrop-blur-xs shadow-lg border border-white/20 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                    >
                      <FaLinkedin className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                    </Link>
                    <Link
                      href="https://github.com/antguivy"
                      target="_blank"
                      className="p-3 rounded-2xl bg-white/80 backdrop-blur-xs shadow-lg border border-white/20 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                    >
                      <FaGithub className="w-5 h-5 text-slate-700 group-hover:text-slate-900" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-3 text-foreground">
                <span className="text-sm font-medium tracking-wide">Scroll para explorar</span>
                <div className="relative w-6 h-12 border-2 border-slate-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
                  <motion.div
                    className="w-1.5 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
                    animate={{ y: [0, 16, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

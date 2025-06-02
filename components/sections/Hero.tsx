"use client";
import { motion } from "framer-motion";
import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const handleContactClick = useCallback(() => {
    // Opcional: agregar analytics tracking aquí
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.06),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.06),transparent_50%)]" />

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-white/20"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-slate-700">
                Disponible para proyectos
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-black leading-tight"
              >
                <span className="block text-slate-900">Hola, soy</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Anthony
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl"
              >
                <span className="font-semibold text-blue-600">
                  Analista de Datos Junior
                </span>{" "}
                con experiencia en{" "}
                <span className="font-semibold text-purple-600">
                  Desarrollo Web
                </span>
                . Transformo datos en insights y código en experiencias.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/#contact">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
                  onClick={handleContactClick}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contáctame
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>

              {/* <Link href="/cv.pdf" target="_blank">
                <Button
                  variant="outline"
                  className="px-8 py-4 rounded-full font-semibold border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar CV
                </Button>
              </Link> */}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-slate-500 font-medium">Sígueme:</span>
              <div className="flex gap-3">
                <Link
                  href="https://www.linkedin.com/in/antguivy/"
                  target="_blank"
                  className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-white/20 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                >
                  <FaLinkedin className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                </Link>
                <Link
                  href="https://github.com/antguivy"
                  target="_blank"
                  className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-white/20 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                >
                  <FaGithub className="w-5 h-5 text-slate-700 group-hover:text-slate-900" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

              {/* Main image container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <Image
                  src="/hero.png"
                  alt="Anthony - Data Analyst & Web Developer"
                  width={450}
                  height={450}
                  priority
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-sm font-medium">Scroll para explorar</span>
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

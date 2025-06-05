'use client'
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card } from "../ui/card";
import ContactForm from "../contact-form";
import Image from "next/image";

export function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState<String | null>(null);

  const handleSocialHover = useCallback((social: string | null) => {
    setHoveredSocial(social);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/antguivy",
      icon: FaGithub,
      color: "hover:bg-gray-900 hover:text-white",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/antguivy/",
      icon: FaLinkedin,
      color: "hover:bg-blue-600 hover:text-white",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      name: "Email",
      href: "mailto:antguivy@gmail.com",
      icon: Mail,
      color: "hover:bg-red-500 hover:text-white",
      gradient: "from-red-500 to-red-700",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "antguivy@gmail.com",
      href: "mailto:antguivy@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "930217050",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className="block text-foreground">Conéctate</span>
            <span className="block bg-linear-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
              Conmigo
            </span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-colortext text-lg leading-relaxed max-w-2xl"
              >
                Estoy siempre abierto a explorar{" "}
                <span className="font-semibold text-green-600">
                  nuevos proyectos
                </span>{" "}
                e intercambiar{" "}
                <span className="font-semibold text-blue-600">ideas.</span>{" "}
                {/* u oportunidades para ser parte de tus{" "}
                <span className="font-semibold text-purple-600">visiones</span>. */}
              </motion.p>
            </div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="relative overflow-hidden bg-card backdrop-blur-xs border-0 shadow-xl p-8">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-linear-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300 p-[2px] rounded-xl">
                  <div className="w-full h-full bg-card rounded-xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-linear-to-r from-green-500 to-blue-500">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-colortext">
                      Envíame un mensaje
                    </h3>
                  </div>
                  <ContactForm />
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center lg:mt-20"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4 mb-10 w-full max-w-[500px] mx-auto">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={`${info.label}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="p-4 bg-white/80 backdrop-blur-xs border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-linear-to-br from-gray-50 to-gray-100 group-hover:from-green-50 group-hover:to-blue-50 transition-all duration-300">
                        <info.icon className="w-5 h-5 text-slate-600 group-hover:text-green-600 transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-slate-600 hover:text-green-600 transition-colors duration-200 flex items-center gap-1"
                          >
                            {info.value}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <p className="text-slate-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Decorative & Image Section */}
            <div className="relative">
              {/* Decorative blobs */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-linear-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000" />

              {/* Image container */}
              <div className="relative bg-white/10 backdrop-blur-xs rounded-3xl p-8 shadow-2xl border border-white/20">
                <Image
                  src="/contact.svg"
                  alt="Contact Illustration"
                  width={500}
                  height={500}
                  className="relative z-10 drop-shadow-lg"
                  loading="lazy"
                />
              </div>

              {/* Floating Mail icon */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-10 p-3 bg-white/90 backdrop-blur-xs rounded-full shadow-lg border border-white/20"
              >
                <Mail className="w-6 h-6 text-green-600" />
              </motion.div>

              {/* Floating Send icon */}
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-10 left-10 p-3 bg-white/90 backdrop-blur-xs rounded-full shadow-lg border border-white/20"
              >
                <Send className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating background elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-linear-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-linear-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/4 w-16 h-16 bg-linear-to-r from-purple-400/10 to-green-400/10 rounded-full blur-xl animate-pulse delay-2000" />
      </div>
    </section>
  );
}

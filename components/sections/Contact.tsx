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
import Link from "next/link";
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
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-green-50/30" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                  <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                    Conéctate
                  </span>
                  <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent pb-2">
                    Conmigo
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-lg leading-relaxed max-w-2xl"
              >
                Estoy siempre abierto a explorar{" "}
                <span className="font-semibold text-green-600">
                  nuevos proyectos
                </span>
                 {" "}e intercambiar{" "}
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
              <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl p-8">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300 p-[2px] rounded-xl">
                  <div className="w-full h-full bg-white rounded-xl" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
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
                  <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-green-50 group-hover:to-blue-50 transition-all duration-300">
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
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000" />

              {/* Image container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
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
                className="absolute top-10 right-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20"
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
                className="absolute bottom-10 left-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20"
              >
                <Send className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="relative overflow-hidden bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 p-[2px] shadow-2xl mx-auto max-w-4xl">
            <div className="bg-white rounded-xl p-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="space-y-6"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                  ¿Listo para crear algo{" "}
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    increíble
                  </span>
                  ?
                </h3>

                <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  No importa si tienes una idea clara o solo una chispa de
                  inspiración. Hagamos que suceda juntos y construyamos el
                  futuro digital.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <Button
                    size="lg"
                    asChild
                    className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Link href="mailto:antguivy@gmail.com">
                      <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Hablemos ahora
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="px-8 py-4 border-2 border-slate-300 hover:border-green-500 text-slate-700 hover:text-green-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="#projects">Ver mis proyectos</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div> */}

        {/* Floating background elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/10 to-green-400/10 rounded-full blur-xl animate-pulse delay-2000" />
      </div>
    </section>
  );
}

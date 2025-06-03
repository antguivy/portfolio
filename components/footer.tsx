"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  Code,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card } from "./ui/card";
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    // { href: '/', label: 'Acerca de mí' },
    { href: "/", hash: "#skills", label: "Habilidades" },
    { href: "/", hash: "project", label: "Proyectos" },
    { href: "/", hash: "#contact", label: "Contacto" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/antguivy",
      icon: FaGithub,
      color: "hover:bg-gray-900 hover:text-white hover:border-gray-900",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/antguivy/",
      icon: FaLinkedin,
      color: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    },
    {
      name: "Email",
      href: "mailto:antguivy@gmail.com",
      icon: Mail,
      color: "hover:bg-green-600 hover:text-white hover:border-green-600",
    },
  ];

  const contactInfo = [
    // {
    //   icon: MapPin,
    //   text: 'Huancayo, Junín, Perú',
    //   href: null
    // },
    {
      icon: Mail,
      text: "antguivy@gmail.com",
      href: "mailto:antguivy@gmail.com",
    },
    {
      icon: Phone,
      text: "+51 930 217 050",
      href: "tel:+51930217050",
    },
  ];

  return (
    <footer className="relative bg-card/40 overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sección Principal */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-black mb-3">
                <span className="bg-linear-to-r from-colortext/70 via-green-600 to-blue-600 bg-clip-text text-transparent">
                  Anthony Villazana
                </span>
              </h3>

            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-colortext uppercase tracking-wider">
                Conecta conmigo
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="lg"
                    asChild
                    className={`p-3 rounded-xl border-2 border-slate-200  backdrop-blur-xs shadow-lg hover:shadow-xl transition-all duration-300 group ${social.color}`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar mi perfil de ${social.name}`}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-colortext uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <a
                    href={`${link.href}${link.hash || ""}`}
                    className="text-colortext hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-colortext group-hover:bg-green-600 group-hover:scale-150 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-colortext uppercase tracking-wider">
              Información
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-200 text-primary mt-1">
                    <info.icon className="w-4 h-4" />
                  </div>
                  <div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-colortext hover:text-green-600 transition-colors duration-300 text-sm leading-relaxed"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-colortext text-sm leading-relaxed">
                        {info.text}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-slate-200/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-colortext text-sm text-center">
              <span>© {currentYear} Anthony Villazana. </span>
              <div className="flex gap-2 items-center">
                <span>Hecho con </span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span> y mucho </span>
                <Code className="w-4 h-4 text-chart-1" />
              </div>
            </div>

            {/* Scroll to top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="backdrop-blur-xs dark:hover:text-gray-700 dark:hover:border-green-500 dark:hover:bg-green-50 hover:border-green-500 hover:bg-green-50 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="ml-2 hidden sm:inline">Volver arriba</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

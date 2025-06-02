"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Download, Mail, Menu, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const menuItems = [
  { 
    label: "Skills", 
    href: "/",     // cambias el href
    hash: "#skills",
    icon: Code,
    color: "text-green-600"
  },
  {
    label: "Proyectos",
    href: "/project",
    icon: Sparkles,
    color: "text-blue-600"
  },
  {
    label: "Contacto",
    href: "/",
    hash: "#contact",
    icon: Mail,
    color: "text-purple-600"
  }
];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg shadow-slate-900/5" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <Link 
            href="/" 
            className={`relative group transition-all duration-300 ${
              isScrolled ? "scale-95" : "scale-100"
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 p-[2px] shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <span className="text-lg font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      AV
                    </span>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </div>
              
              {/* Name */}
              <div className="hidden sm:block">
                <h1 className="text-xl font-black text-slate-900 group-hover:text-green-600 transition-colors duration-300">
                  Anthony Villazana
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={`${item.href}-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={`${item.href}${item.hash || ""}`}>
                  <Button
                    variant="ghost"
                    className="group relative h-11 px-4 rounded-xl hover:bg-slate-50 transition-all duration-300"
                  >
                    <item.icon className={`w-4 h-4 mr-2 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="font-semibold text-slate-700 group-hover:text-slate-900">
                      {item.label}
                    </span>
                    
                    {/* Hover underline */}
                    <div className={`absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-8 group-hover:left-4 transition-all duration-300 rounded-full`} />
                  </Button>
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="ml-4"
            >
              <Button
                variant="default"
                size="default"
                className="h-11 px-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Descargar CV
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-11 w-11 rounded-xl hover:bg-slate-100 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-600" />
              ) : (
                <Menu className="w-6 h-6 text-slate-600" />
              )}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-xl"
          >
            <nav className="container mx-auto px-6 py-6">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={`${item.href}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={`${item.href}${item.hash || ""}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 group"
                    >
                      <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="font-semibold text-slate-700 group-hover:text-slate-900">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4 border-t border-slate-200/50"
                >
                  <Button
                    variant="default"
                    size="default"
                    className="w-full h-12 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Descargar CV
                  </Button>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background blur overlay when mobile menu is open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[-1] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
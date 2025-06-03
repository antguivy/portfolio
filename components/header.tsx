"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Mail, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

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
      href: "/",
      hash: "#skills",
      icon: Code,
      color: "text-green-600",
    },
    {
      label: "Proyectos",
      href: "/project",
      icon: Sparkles,
      color: "text-blue-600",
    },
    {
      label: "Contacto",
      href: "/",
      hash: "#contact",
      icon: Mail,
      color: "text-purple-600",
    },
  ];
  const { theme, setTheme } = useTheme();
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-chart-2 to-chart-1 p-[2px] shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                    <span className="text-lg font-black bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                      AV
                    </span>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-chart-2 to-chart-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </div>

              {/* Name */}
              <div className="hidden sm:block">
                <h1 className="text-xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
                  Anthony Villazana
                </h1>
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
                    className="group relative h-11 px-4 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <item.icon
                      className={`w-4 h-4 mr-2 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="font-semibold text-muted-foreground group-hover:text-accent-foreground">
                      {item.label}
                    </span>
                    {/* Hover underline */}
                    <div
                      className={`absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-chart-1 group-hover:w-8 group-hover:left-4 transition-all duration-300 rounded-full`}
                    />
                  </Button>
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-11 w-11 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 relative"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-11 w-11 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-muted-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-muted-foreground" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden border-t border-border bg-card/95 backdrop-blur-xl"
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
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                  >
                    <item.icon
                      className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="font-semibold text-card-foreground group-hover:text-accent-foreground">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <div className="border-t border-border my-4" />

              {/* Additional mobile actions can go here */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Modo {theme === "dark" ? "Oscuro" : "Claro"} activado
                </p>
              </div>
            </div>
          </nav>
        </motion.div>
      )}

      {/* Background blur overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[-1] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hola, soy <span className="text-primary">Anthony</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Analista de Datos con experiencia en Desarrollo Web.
          </p>
          <div className="flex gap-4">
            <Link href={"/#contact"}>
              <Button variant={"default"} className="gap-2">
                <Mail className="w-4 h-4" />
                Contáctame
              </Button>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/anthonygy/"}
              target="_blank"
            >
              <Button variant={"outline"} className="gap-2">
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src={"/hero.png"}
            alt="Developer Illustration"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import {Contact} from "@/components/sections/Contact";
import {Hero} from "@/components/sections/Hero";
import {Projects} from "@/components/sections/Projects";
import {Skills} from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      {/* <Testimonials/> */}
      <Projects />
      <Contact />
    </main>
  );
}

import {Contact} from "@/components/sections/Contact";
import {Hero} from "@/components/sections/Hero";
import {Projects} from "@/components/sections/Projects";
import {Skills} from "@/components/sections/Skills";
import { Suspense } from 'react';



export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
        <Contact />
      </Suspense>
    </main>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Tag,
  Globe,
  Code,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { categories } from "@/lib/data";
import {
  getCategoryBadgeClass,
  getCategoryColor,
  getCategoryIcon,
} from "@/components/functions";
import { Project } from "@/lib/types";

export default function ProjectDetail({
  project,
  markdownContent,
}: {
  project: Project;
  markdownContent: string | null;
}) {
  return (
    <div className="min-h-screen">
      {/* Header con navegación */}
      <header className="sticky h-20 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/project"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver a proyectos</span>
            </Link>

            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <Button
                  asChild
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              )}
              {project.linkedinUrl && (
                <Button asChild size="sm" variant="outline">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 w-full">
        {/* Hero Section */}
        <div className="mx-auto mb-12">
          {!markdownContent && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
            </>
          )}

          {/* Category Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-md border">
              <div
                className={`p-1 rounded-full text-white bg-gradient-to-r ${getCategoryColor(
                  project.category
                )}`}
              >
                {getCategoryIcon(project.category)}
              </div>
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{project.date}</span>
            </div>

            {project.status && (
              <div>
                <Badge
                variant="outline"
                  className={`${
                    project.status === "deployed"
                      ? "bg-green-100 text-green-800"
                      : project.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {project.status === "deployed"
                    ? "Desplegado"
                    : project.status === "in-progress"
                    ? "En desarrollo"
                    : project.status}
                </Badge>
              </div>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies?.map((tech: string) => (
              <Badge
                key={tech}
                className={`font-medium px-3 py-1 ${getCategoryBadgeClass(
                  project.category
                )}`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          {/* <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Ver Demo en Vivo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="lg" variant="outline">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Ver Código
                </Link>
              </Button>
            )}
          </div> */}
        </div>

        <div className="mx-auto gap-12">
          {/* Markdown Content */}
          {markdownContent ? (
            <Card className="p-0 overflow-hidden border-0 shadow-lg ">
              {/* Header estilo GitHub */}
              <div className="bg-gray-50  border-b px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaGithub className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">README.md</span>
                </div>
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver en GitHub
                    </Link>
                  </Button>
                )}
              </div>

              {/* Contenido del README */}
              <div className="p-8">
                <div
                  className="github-markdown-body"
                  dangerouslySetInnerHTML={{ __html: markdownContent }}
                />
              </div>

              {/* Footer con info de sincronización */}
              <div className="bg-blue-50 border-t px-8 py-4">
                <div className="text-sm text-blue-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Contenido sincronizado automáticamente desde GitHub
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-8 text-center">
              <div className="text-gray-500">
                <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">
                  Documentación en desarrollo
                </p>
                <p>
                  El contenido detallado de este proyecto estará disponible
                  pronto.
                </p>
                {project.githubUrl && (
                  <div className="mt-4">
                    <Button asChild variant="outline">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-4 h-4 mr-2" />
                        Ver en GitHub mientras tanto
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>
      </main>
      <style jsx global>{`
        /* Importar estilos de KaTeX para matemáticas */
        @import url("https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css");

        /* Importar estilos de highlight.js para sintaxis */
        @import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css");

        .github-markdown-body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Noto Sans", Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          word-wrap: break-word;
          color: #1f2328;
        }

        .github-markdown-body h1 {
          font-size: 2rem;
          font-weight: 600;
          padding-bottom: 0.3em;
          border-bottom: 1px solid #d1d9e0;
          margin-bottom: 16px;
          margin-top: 24px;
        }

        .github-markdown-body h2 {
          font-size: 1.5rem;
          font-weight: 600;
          padding-bottom: 0.3em;
          border-bottom: 1px solid #d1d9e0;
          margin-bottom: 16px;
          margin-top: 24px;
        }

        .github-markdown-body h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 16px;
          margin-top: 24px;
        }

        .github-markdown-body h4,
        .github-markdown-body h5,
        .github-markdown-body h6 {
          font-weight: 600;
          margin-bottom: 16px;
          margin-top: 24px;
        }

        .github-markdown-body p {
          margin-bottom: 16px;
          color: #656d76;
        }

        .github-markdown-body a {
          color: #0969da;
          text-decoration: none;
        }

        .github-markdown-body a:hover {
          text-decoration: underline;
        }

        .github-markdown-body code {
          background-color: rgba(175, 184, 193, 0.2);
          padding: 0.2em 0.4em;
          border-radius: 6px;
          font-size: 85%;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas,
            "Liberation Mono", Menlo, monospace;
        }

        .github-markdown-body pre {
          background-color: #f6f8fa;
          border-radius: 6px;
          font-size: 85%;
          line-height: 1.45;
          overflow: auto;
          padding: 16px;
          margin-bottom: 16px;
        }

        .github-markdown-body pre code {
          background-color: transparent;
          border: 0;
          display: inline;
          line-height: inherit;
          margin: 0;
          overflow: visible;
          padding: 0;
          word-wrap: normal;
        }

        .github-markdown-body blockquote {
          border-left: 0.25em solid #d1d9e0;
          color: #656d76;
          padding: 0 1em;
          margin: 0 0 16px 0;
        }

        .github-markdown-body ul,
        .github-markdown-body ol {
          margin-bottom: 16px;
          padding-left: 2em;
        }

        .github-markdown-body li {
          margin-bottom: 0.25em;
        }

        .github-markdown-body table {
          border-collapse: collapse;
          border-spacing: 0;
          display: block;
          max-width: 100%;
          overflow: auto;
          width: max-content;
          margin-bottom: 16px;
        }

        .github-markdown-body table th,
        .github-markdown-body table td {
          border: 1px solid #d1d9e0;
          padding: 6px 13px;
        }

        .github-markdown-body table th {
          background-color: #f6f8fa;
          font-weight: 600;
        }

        .github-markdown-body img {
          max-width: 100%;
          height: auto;
          border-radius: 6px;
          margin: 16px 0;
        }

        .github-markdown-body hr {
          background-color: #d1d9e0;
          border: 0;
          height: 0.25em;
          margin: 24px 0;
          padding: 0;
        }

        /* Alertas de GitHub */
        .github-alert {
          padding: 8px 16px;
          margin-bottom: 16px;
          border: 1px solid transparent;
          border-radius: 6px;
        }

        .github-alert-note {
          border-color: #0969da;
          background-color: #ddf4ff;
        }

        .github-alert-tip {
          border-color: #1a7f37;
          background-color: #dcffe4;
        }

        .github-alert-important {
          border-color: #8250df;
          background-color: #fbf0ff;
        }

        .github-alert-warning {
          border-color: #bf8700;
          background-color: #fff8c5;
        }

        .github-alert-caution {
          border-color: #cf222e;
          background-color: #ffebe9;
        }

        .github-alert-title {
          font-weight: 600;
          margin-bottom: 4px;
        }

        /* Checkbox lists */
        .github-markdown-body input[type="checkbox"] {
          margin-right: 8px;
        }

        /* Enlaces a issues y PRs */
        .github-markdown-body a[href*="/issues/"],
        .github-markdown-body a[href*="/pull/"] {
          color: #0969da;
          font-weight: 500;
        }

        /* Menciones de usuarios */
        .github-markdown-body a[href^="https://github.com/"]:not([href*="/issues/"]):not([href*="/pull/"])
        {
          color: #0969da;
          font-weight: 500;
        }

        /* Matemáticas con KaTeX */
        .katex {
          font-size: 1.1em;
        }

        .katex-display {
          margin: 16px 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

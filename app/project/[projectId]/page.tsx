import { notFound } from "next/navigation";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { projects } from "@/lib/data";
import ProjectDetail from "./_components/project-detail";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

function convertRelativeUrls(content: string, githubUrl: string): string {
  const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) return content;

  const [, owner, repo] = match;
  const baseUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main`;
  // Convertir imágenes con rutas relativas
  content = content.replace(
    /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
    `![$1](${baseUrl}/$2)`
  );

  // Convertir enlaces a archivos con rutas relativas
  content = content.replace(
    /<video[^>]src=["'](?!https?:\/\/)([^"']+)["'][^>]>.*?<\/video>/g,
    (match, src) => {
      return match.replace(src, `${baseUrl}/${src}`);
    }
  );

  return content;
}

async function getGitHubReadme(githubUrl: string) {
  try {
    const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return null;

    const [, owner, repo] = match;
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;

    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) return null;

    const data = await response.json();
    let markdownContent = Buffer.from(data.content, "base64").toString("utf8");

    // Procesar URLs relativas y contenido especial
    markdownContent = convertRelativeUrls(markdownContent, githubUrl);

    // Procesar markdown con todos los plugins
    const { unified } = await import("unified");
    const remarkParse = (await import("remark-parse")).default;
    const remarkRehype = (await import("remark-rehype")).default;
    const rehypeStringify = (await import("rehype-stringify")).default;

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeKatex)
      .use(rehypeStringify)
      .process(markdownContent);

    return processedContent.toString();
  } catch (error) {
    console.error("Error fetching GitHub README:", error);
    return null;
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const markdownContent = await getGitHubReadme(project.githubUrl);

  return <ProjectDetail project={project} markdownContent={markdownContent} />;
}

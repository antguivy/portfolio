"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	ArrowUpRight,
	Calendar,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import {
	getCategoryBadgeClass,
	getCategoryColor,
	getCategoryIcon,
} from "@/components/functions";
import { Project, ProjectCategory } from "@/lib/types";
import { categories } from "@/lib/data";

interface ListProjectsProps {
	project: Project;
	displayCategories: ProjectCategory[];
	hoveredProject: string | null;
}

export default function ListProjects({
	project,
	displayCategories,
	hoveredProject
}: ListProjectsProps) {
	return (
		<Card className="relative overflow-hidden bg-card backdrop-blur-xs border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
			{/* Image Container */}
			<div className="relative overflow-hidden aspect-video bg-linear-to-br from-gray-100 to-gray-200">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="group-hover:scale-105 transition-transform duration-500"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority={false}
					loading="lazy"
				/>

				{/* Category Badge - Mostrar según el filtro */}
				<div className="absolute bottom-2 left-2">
					<div className="flex gap-2 flex-wrap max-w-[200px]">
						{displayCategories.map((cat) => (
							<div
								key={cat}
								className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground backdrop-blur-xs shadow-md"
							>
								<div
									className={`p-1 rounded-full text-white bg-linear-to-r ${getCategoryColor(
										cat
									)}`}
								>
									{getCategoryIcon(cat)}
								</div>
								<span className="text-xs font-bold text-gray-600 uppercase tracking-wide">
									{categories[cat].name}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Action Buttons */}
				<div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					{project.linkedinUrl && (
						<Button
							asChild
							size="sm"
							className="bg-white/95 hover:dark:bg-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-800 shadow-lg rounded-full w-8 h-8 p-0 flex items-center justify-center"
						>
							<Link
								href={project.linkedinUrl}
								target="_blank"
								rel="noopener noreferrer"
								onClick={(e) => e.stopPropagation()}
							>
								<FaLinkedin size={16} />
							</Link>
						</Button>
					)}
					{project.githubUrl && project.public && (
						<Button
							asChild
							size="sm"
							className="bg-white/95 hover:dark:bg-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 text-slate-800 shadow-lg rounded-full w-8 h-8 p-0 flex items-center justify-center"
						>
							<Link
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								onClick={(e) => e.stopPropagation()}
							>
								<FaGithub size={16} />
							</Link>
						</Button>
					)}
				</div>
			</div>

			{/* Content - Ahora con flex-grow para que ocupe el espacio disponible */}
			<Link href={`/project/${project.id}`} className="flex-1 flex flex-col">
				<div className="p-6 flex-1 flex flex-col">
					{/* Contenido principal */}
					<div className="flex-1">
						<div className="mb-4">
							<h3 className="text-xl font-bold mb-2 text-colortext group-hover:text-primary transition-colors duration-200 leading-tight">
								{project.title}
							</h3>
							<p className="text-colortext/90 leading-relaxed text-sm">
								{project.description}
							</p>
						</div>

						{/* Technologies */}
						<div className="mb-6">
							<div className="flex flex-wrap gap-1.5">
								{project.technologies.slice(0, 4).map((tech) => (
									<Badge
										key={tech}
										className={`border font-medium text-xs px-2 py-1 rounded-full transition-colors duration-200 ${getCategoryBadgeClass(
											displayCategories[0] || project.category[0]
										)}`}
									>
										{tech}
									</Badge>
								))}
								{project.technologies.length > 4 && (
									<Badge
										className={`border font-medium text-xs px-2 py-1 rounded-full ${getCategoryBadgeClass(
											displayCategories[0] || project.category[0]
										)}`}
									>
										+{project.technologies.length - 4}
									</Badge>
								)}
							</div>
						</div>
					</div>

					{/* Footer - Siempre al final */}
					<div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
						<div className="flex items-center gap-2 text-colortext">
							<Calendar className="w-4 h-4" />
							<span className="font-medium text-sm">
								{project.date}
							</span>
						</div>

						<div className="flex items-center gap-1.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer hover:underline hover:underline-offset-4">
							{hoveredProject === project.title && (
								<span className="text-sm font-medium">Abrir</span>
							)}
							<ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
						</div>
					</div>
				</div>
			</Link>
		</Card>
	);
}
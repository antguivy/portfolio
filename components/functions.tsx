"use client";

import { ProjectCategory } from "@/lib/types";
import { Brain, Code, Database, Tag, Zap } from "lucide-react";
import { FaRobot } from "react-icons/fa";

export function getCategoryIcon(category: ProjectCategory) {
  const iconProps = { className: "w-5 h-5" };
  switch (category) {
    case "data-analyst":
      return <Database {...iconProps} />;
    case "data-engineer":
      return <Code {...iconProps} />;
    case "ai-engineer":
      return <FaRobot {...iconProps} />;
    case "ml-engineer":
      return <Brain {...iconProps} />;
    default:
      return <Tag {...iconProps} />;
  }
}

export function getCategoryColor(category: ProjectCategory): string {
  switch (category) {
    case "data-analyst":
      return "from-blue-500 to-cyan-500";
    case "data-engineer":
      return "from-green-500 to-emerald-500";
    case "ai-engineer":
      return "from-purple-500 to-pink-500";
    case "ml-engineer":
      return "from-yellow-500 to-orange-500";
    default:
      return "from-gray-500 to-slate-500";
  }
}

export function getCategoryBadgeClass(category: ProjectCategory): string {
  switch (category) {
    case "data-analyst":
      return "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200";
    case "data-engineer":
      return "bg-green-100 text-green-800 border-green-200 hover:bg-green-200";
    case "ai-engineer":
      return "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200";
    case "ml-engineer":
      return "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200";
  }
}

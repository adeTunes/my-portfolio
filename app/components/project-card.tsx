"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Technology from "./technology";
import { cn } from "../lib/utils";

interface ProjectCardProps {
  project: {
    name: string;
    image: string;
    description: string | JSX.Element;
    technologies: string[];
    liveLink?: string;
    codeLink?: string;
    objectFit?: string;
  };
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md transition-all hover:shadow-xl border border-gray-100"
    >
      <div className="aspect-[16/10] overflow-hidden bg-gray-50">
        <Image
          src={project.image}
          alt={project.name}
          width={600}
          height={400}
          className={cn(
            "h-full w-full transition-transform duration-500 group-hover:scale-105",
            project.objectFit === "contain"
              ? "object-contain p-4"
              : "object-cover"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
          <span className="text-white font-semibold text-lg">
            View Details →
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600 font-medium">
          {typeof project.description === "string"
            ? project.description
            : "View details to see more"}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-[10px] font-bold text-gray-400 bg-gray-50 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

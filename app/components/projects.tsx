"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constants/project-list";
import {
  CATEGORIES,
  ProjectCategory,
  projectToCategoryMap,
} from "../constants/project-categories";
import ProjectCard from "./project-card";
import ProjectModal from "./project-modal";
import { cn } from "../lib/utils";

function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => {
      const categories = projectToCategoryMap[project.name] || [];
      return categories.includes(activeCategory);
    });
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 md:py-40 bg-gray-50/50">
      <div className="app-container flex flex-col gap-16 md:gap-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <h3 className="section-heading tracking-[0.2em] font-black underline decoration-blue-500 decoration-4 underline-offset-8">
            PORTFOLIO
          </h3>
          <h4 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight max-w-2xl">
            Each project is a unique piece of development 🧩
          </h4>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-1.5 bg-white/50 backdrop-blur-sm rounded-2xl w-fit mx-auto border border-gray-100 shadow-sm">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative px-6 py-2.5 text-sm md:text-base font-bold transition-all duration-300 rounded-xl",
                activeCategory === category
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              )}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-xl z-0"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.name + idx}
                project={project as any}
                onClick={() => setSelectedProject(project as any)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <p className="text-xl font-semibold">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject as any}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;

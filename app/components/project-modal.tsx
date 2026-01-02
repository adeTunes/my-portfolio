"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import Technology from "./technology";
import ProjectLink from "./project-link";

interface ProjectModalProps {
  project: {
    name: string;
    image: string;
    description: string | JSX.Element;
    technologies: string[];
    liveLink?: string;
    codeLink?: string;
    objectFit?: string;
    info?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10 flex h-full max-h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl md:flex-row"
          >
            {/* Close Button Mobile */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 text-gray-800 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 md:hidden"
            >
              <MdClose size={20} />
            </button>

            {/* Left: Project Image */}
            <div className="relative h-[40%] w-full bg-gray-50 flex items-center justify-center p-4 md:h-auto md:w-[60%] md:p-8">
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 to-transparent md:hidden" />
            </div>

            {/* Right: Project Details */}
            <div className="flex flex-1 flex-col overflow-y-auto px-6 py-8 md:px-10 md:py-12 border-l border-gray-50">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-3xl font-black text-gray-900 md:text-4xl tracking-tight">
                  {project.name}
                </h3>
                {/* Close Button Desktop */}
                <button
                  onClick={onClose}
                  className="hidden md:flex rounded-full bg-gray-100 p-2.5 text-gray-500 transition-all hover:bg-gray-200 hover:text-gray-900"
                >
                  <MdClose size={24} />
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.technologies.map((tech, idx) => (
                  <Technology key={idx} tech={tech} variant="compact" />
                ))}
              </div>

              <div className="flex-1">
                <div className="text-base md:text-lg leading-relaxed text-gray-600 font-medium whitespace-pre-line">
                  {project.description}
                </div>
                {project.info && (
                  <div className="mt-6 rounded-2xl bg-blue-50/50 p-5 text-sm font-semibold text-blue-800 border border-blue-100/50 flex items-start gap-3">
                    <span className="text-xl">💡</span>
                    <span>{project.info}</span>
                  </div>
                )}
              </div>

              <div className="mt-10 flex items-center gap-4 pt-8 border-t border-gray-100">
                <ProjectLink
                  sourceCode={project.codeLink}
                  live={project.liveLink}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

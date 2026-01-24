import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  const Icon = project.icon;
  
  return (
    <button
      onClick={onClick}
      className="group relative bg-slate-900 rounded-lg border border-slate-800 p-6 cursor-pointer transition-all duration-300 hover:border-cyan-400 glow-cyan-hover overflow-hidden w-full text-left"
      aria-label={`View details for ${project.title} - ${project.subtitle}`}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon and Category */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-900/30 transition-colors duration-300">
            <Icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
          <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
            {project.category}
          </span>
        </div>

        {/* Title and Subtitle */}
        <h3 className="text-xl font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mb-3">{project.subtitle}</p>

        {/* Description - truncated to 3 lines */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span className="font-mono">Complexity:</span>
              <span className="text-cyan-400 font-medium">{project.stats.complexity}</span>
            </span>
          </div>
          <span className="font-mono text-slate-500">{project.stats.stack}</span>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;

import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

const Modal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const Icon = project.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-slate-900 rounded-xl border border-cyan-400/30 max-w-3xl w-full p-8 glow-cyan animate-scaleIn">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-4 bg-slate-800 rounded-lg">
              <Icon className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h2 id="modal-title" className="text-3xl font-bold text-white">{project.title}</h2>
                <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                  {project.category}
                </span>
              </div>
              <p className="text-lg text-slate-400">{project.subtitle}</p>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">The Mission</h3>
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">Complexity</div>
              <div className="text-xl font-bold text-cyan-400">{project.stats.complexity}</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-1">Tech Stack</div>
              <div className="text-xl font-bold text-cyan-400">{project.stats.stack}</div>
            </div>
          </div>

          {/* Key Impact */}
          {project.details && project.details.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Key Impact</h3>
              <ul className="space-y-2">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span className="text-slate-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Button */}
          <button 
            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 glow-cyan"
            aria-label={`View source artifacts for ${project.title}`}
          >
            <span>View Source Artifacts</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

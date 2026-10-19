import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#0B0F17] py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-900">
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="h-8 px-2.5 rounded-lg bg-blue-950/60 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 whitespace-nowrap shadow-sm">
                <span className="text-cyan-400">&lt;</span>
                <span className="text-white mx-0.5">BC</span>
                <span className="text-cyan-400"> /&gt;</span>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                {personalData.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              {personalData.professionalTitle} • {personalData.educationStatus}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">
              INICIO
            </a>
            <a href="#perfil-profesional" className="hover:text-cyan-400 transition-colors">
              PERFIL
            </a>
            <a href="#proyectos" className="hover:text-cyan-400 transition-colors">
              PROYECTOS
            </a>
            <a href="#noticias" className="hover:text-cyan-400 transition-colors">
              NOTICIAS
            </a>
            <a href="#contactos" className="hover:text-cyan-400 transition-colors">
              CONTACTOS
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-all cursor-pointer"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {personalData.fullName}. Marca personal y portafolio profesional para TECSUP.
          </p>
          <p className="font-mono text-slate-400">
            Desarrollado con React 19 + TypeScript + Vite + Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  );
};

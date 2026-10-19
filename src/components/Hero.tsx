import React from 'react';
import { ArrowRight, MessageSquare, ExternalLink, ShieldCheck, FileDown } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import profilePhoto from '../assets/foto-portafolio.png';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B0F17] via-[#0F172A] to-[#0B0F17]"
    >
      {/* Background Code / Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Radiant Glowing Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Monogram & Status Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="px-3.5 py-1 rounded-full bg-blue-950/70 border border-cyan-500/40 font-mono text-xs font-bold text-cyan-300 shadow-sm whitespace-nowrap">
                <span className="text-cyan-400">&lt;</span>
                <span className="text-white mx-0.5">BC</span>
                <span className="text-cyan-400"> /&gt;</span>
              </span>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium text-slate-200">{personalData.institution}</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                {personalData.fullName}
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                {personalData.professionalTitle}
              </div>
            </div>

            {/* Subtitle / Education Status */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {personalData.educationStatus}. Experiencia en proyectos full stack (.NET, React, Docker, Spring Boot) y desarrollo de soluciones eficientes, escalables y orientadas a la calidad.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explorar Proyectos</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="/CV-Bryan-Coronel.pdf"
                download="CV-Bryan-Coronel.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-cyan-500/40 hover:border-cyan-400 font-semibold text-sm shadow-md shadow-cyan-500/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FileDown size={17} className="text-cyan-400" />
                <span>Descargar CV</span>
              </a>

              <a
                href="#contactos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all transform hover:-translate-y-0.5 group"
              >
                <MessageSquare size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Contactar</span>
              </a>
            </div>

            {/* Direct Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Enlaces directos:
              </span>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all text-xs font-medium"
                aria-label="Perfil de LinkedIn de Bryan Coronel Paz"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ExternalLink size={11} className="opacity-60" />
              </a>

              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all text-xs font-medium"
                aria-label="Perfil de GitHub de Bryan Coronel Paz"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ExternalLink size={11} className="opacity-60" />
              </a>
            </div>
          </div>

          {/* Profile Photo Presentation Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Radiant Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-blue-600/40 via-cyan-400/30 to-blue-800/20 blur-xl opacity-70 pointer-events-none" />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl bg-[#0F172A] border border-blue-500/40 shadow-2xl overflow-hidden group">
                {/* Image Container with Natural Ratio and Gradient Fade */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src={profilePhoto}
                    alt="Fotografía profesional de Bryan Coronel Paz"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top Header Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300 shadow-lg">
                      <ShieldCheck size={14} className="text-cyan-400" />
                      Perfil Verificado
                    </span>
                    <span className="font-mono text-xs text-slate-200 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/80">
                      TECSUP
                    </span>
                  </div>

                  {/* Smooth Gradient blend at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent pointer-events-none" />
                </div>

                {/* Card Bottom Details */}
                <div className="p-6 pt-2 bg-[#0F172A] border-t border-slate-800/80 space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {personalData.fullName}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">
                      {personalData.professionalTitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-[10px] font-mono uppercase text-slate-400">Especialidad</div>
                      <div className="text-xs font-bold text-white mt-0.5">Backend & Mobile</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-[10px] font-mono uppercase text-slate-400">Institución</div>
                      <div className="text-xs font-bold text-cyan-400 mt-0.5">TECSUP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

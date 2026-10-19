import React, { useState } from 'react';
import {
  FolderGit2,
  Building2,
  Smartphone,
  ExternalLink,
  Sparkles,
  Layers,
  Database,
  Server,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { internships, sumaqProject, mobileProjects, personalData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { EvidenceModal } from './EvidenceModal';

export const Projects: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    category?: string;
    description: string;
    placeholderText: string;
    imageUrl?: string;
    externalLink?: string;
  }>({
    isOpen: false,
    title: '',
    category: '',
    description: '',
    placeholderText: '',
  });

  const openEvidence = (
    title: string,
    category: string,
    description: string,
    placeholderText: string,
    externalLink?: string,
    imageUrl?: string
  ) => {
    setModalState({
      isOpen: true,
      title,
      category,
      description,
      placeholderText,
      imageUrl,
      externalLink,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="proyectos" className="py-24 relative z-10 border-t border-slate-900 bg-[#0F172A]/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/60 mb-3 shadow-sm">
            <FolderGit2 size={14} />
            <span>Evidencias & Desarrollo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            PROYECTOS & EXPERIENCIA PROFESIONAL
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Prácticas pre-profesionales y pasantía en entornos reales, sistemas empresariales integradores y aplicaciones móviles nativas.
          </p>
        </div>

        {/* 1. PRÁCTICAS PRE-PROFESIONALES & PASANTÍA */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <Building2 className="text-cyan-400" size={22} />
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Prácticas Pre-Profesionales & Pasantía Empresarial
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internships.map((internship) => {
              const isPracticas = internship.id === 'ntt-data';
              return (
                <div
                  key={internship.id}
                  className="rounded-2xl bg-[#0F172A]/80 border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/60">
                          {internship.company}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                          {isPracticas ? 'Prácticas Pre-Profesionales' : 'Pasantía Empresarial'}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {internship.period}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">
                      {internship.role}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">
                      {internship.description}
                    </p>

                    <div>
                      <div className="text-xs font-mono font-semibold uppercase text-slate-400 mb-2">
                        Funciones y aportes desempeñados:
                      </div>
                      <ul className="space-y-2.5">
                        {internship.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. PROYECTO DESTACADO (INTEGRADOR) - SUMAQ */}
        <div className="mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#161F36] to-[#0B0F17] border-2 border-blue-600/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Badge & Title */}
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/60 text-xs font-bold uppercase tracking-wider text-cyan-300">
                  <Sparkles size={14} />
                  {sumaqProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Spring Boot + React + PostgreSQL
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                {sumaqProject.title}
              </h3>
              <p className="text-cyan-400 font-medium text-sm sm:text-base mb-6">
                {sumaqProject.subtitle}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mb-8">
                {sumaqProject.description}
              </p>

              {/* Technologies Badges */}
              <div className="mb-8">
                <div className="text-xs font-mono font-semibold uppercase text-slate-400 mb-2.5">
                  Stack Tecnológico Implementado:
                </div>
                <div className="flex flex-wrap gap-2">
                  {sumaqProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-xs font-semibold text-cyan-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture & DB Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wide mb-1.5">
                    <Server size={14} />
                    <span>Patrón Arquitectónico</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sumaqProject.architecture}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wide mb-1.5">
                    <Database size={14} />
                    <span>Persistencia Relacional</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sumaqProject.database}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-10">
                <div className="text-xs font-mono font-semibold uppercase text-slate-400 mb-3">
                  Funcionalidades Principales del Sistema:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {sumaqProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Galería de Capturas del Sistema / Endpoints / Base de Datos */}
              <div className="pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Layers size={16} className="text-cyan-400" />
                    <span>Galería de Evidencias Técnicas de SUMAQ</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    3 slots de captura
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sumaqProject.screenshots.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-slate-950/80 border border-slate-800 p-4 flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
                    >
                      {item.imageUrl ? (
                        <div className="aspect-video rounded-lg overflow-hidden bg-slate-900 border border-slate-700 mb-3">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video rounded-lg bg-slate-900 border border-dashed border-cyan-500/30 flex flex-col items-center justify-center p-3 text-center mb-3 group-hover:border-cyan-400/60 transition-colors">
                          <FolderGit2 size={24} className="text-cyan-400 mb-2" />
                          <span className="text-[11px] font-semibold text-slate-300">
                            {item.title}
                          </span>
                          <span className="text-[9px] text-slate-500 mt-1">
                            (Click para ampliar evidencia)
                          </span>
                        </div>
                      )}

                      <div>
                        <h5 className="text-xs font-bold text-white mb-1">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-slate-400 line-clamp-2 mb-3">
                          {item.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          openEvidence(
                            item.title,
                            'SUMAQ - Sistema Empresarial',
                            item.description,
                            item.placeholderText,
                            undefined,
                            item.imageUrl
                          )
                        }
                        className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Eye size={12} />
                        <span>Ver Captura / Detalle</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. PROYECTOS MÓVILES Y COLABORATIVOS */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <Smartphone className="text-cyan-400" size={22} />
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Desarrollo Móvil Nativo & Colaboraciones
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Mobile Project Card */}
            {mobileProjects.map((mobile) => (
              <div
                key={mobile.id}
                className="lg:col-span-8 p-7 rounded-2xl bg-[#0F172A]/80 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold uppercase text-cyan-400 bg-blue-950/70 border border-blue-800/60 px-2.5 py-1 rounded">
                      {mobile.platform} • {mobile.language}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Arquitectura MVVM
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">
                    {mobile.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {mobile.description}
                  </p>

                  <div className="mb-5">
                    <div className="text-xs font-mono font-semibold uppercase text-slate-400 mb-2">
                      Aspectos Arquitectónicos Destacados:
                    </div>
                    <ul className="space-y-2">
                      {mobile.highlights.map((high, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {mobile.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-800">
                  <span className="text-xs text-slate-400">
                    Código modular y desacoplado listo para producción móvil
                  </span>
                </div>
              </div>
            ))}

            {/* Repositorios Colaborativos Card */}
            <div className="lg:col-span-4 p-7 rounded-2xl bg-[#0F172A]/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 mb-4">
                  <GithubIcon size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Repositorios & Código Abierto
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Participación activa en proyectos grupales de TECSUP, solución de retos de algoritmia y repositorios de arquitecturas limpias disponibles para revisión técnica.
                </p>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2 mb-6">
                  <div className="text-slate-400 font-mono text-[11px]">USUARIO GITHUB:</div>
                  <div className="text-cyan-400 font-bold font-mono">@brui4n</div>
                  <div className="text-slate-500 text-[11px]">
                    Proyectos en Java, Kotlin, Python y React
                  </div>
                </div>
              </div>

              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-100 border border-slate-700 hover:border-cyan-400 text-xs font-semibold uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
              >
                <GithubIcon size={16} />
                <span>Explorar GitHub</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Global Evidence Modal */}
      <EvidenceModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        category={modalState.category}
        description={modalState.description}
        placeholderText={modalState.placeholderText}
        imageUrl={modalState.imageUrl}
        externalLink={modalState.externalLink}
      />
    </section>
  );
};

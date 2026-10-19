import React, { useState } from 'react';
import {
  FileDown,
  ExternalLink,
  Award,
  Layers,
  Sparkles,
  CheckCircle2,
  RotateCw,
} from 'lucide-react';
import { personalData, technicalSkills, achievements } from '../data/portfolioData';
import { LinkedinIcon, QrCodeIcon } from './Icons';

export const Profile: React.FC = () => {
  const [cardFlipped, setCardFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'Lenguajes' | 'Frameworks' | 'Bases de Datos' | 'Patrones & Herramientas'>('all');

  const categories = [
    'all',
    'Lenguajes',
    'Frameworks',
    'Bases de Datos',
    'Patrones & Herramientas',
  ] as const;

  const filteredSkills = activeTab === 'all'
    ? technicalSkills
    : technicalSkills.filter((s) => s.category === activeTab);

  return (
    <section id="perfil-profesional" className="py-24 relative z-10 border-t border-slate-900 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/60 mb-3 shadow-sm">
            <Layers size={14} />
            <span>Trayectoria & Habilidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            PERFIL PROFESIONAL
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Fundamentos de ingeniería, objetivos de carrera, stack tecnológico y credenciales.
          </p>
        </div>

        {/* Narrative & Objective Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Extracto y Objetivo */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0F172A]/70 border border-slate-800/90 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3">
                <Sparkles size={14} />
                <span>Extracto Profesional</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                Desarrollo Full Stack con Enfoque en Resultados, Escalabilidad y Calidad
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                {personalData.aboutExcerpt}
              </p>

              <div className="pt-5 border-t border-slate-800/80">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2">
                  Objetivo Profesional
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  "{personalData.careerObjective}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  href="/CV-Bryan-Coronel.pdf"
                  download="CV-Bryan-Coronel.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wide uppercase shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <FileDown size={17} />
                  <span>Descargar CV (PDF)</span>
                </a>

                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-700 hover:border-cyan-400 font-semibold text-xs tracking-wide uppercase transition-all transform hover:-translate-y-0.5"
                >
                  <LinkedinIcon size={17} />
                  <span>Ver perfil de LinkedIn</span>
                  <ExternalLink size={13} className="opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Digital Business Card Mockup (Anverso y Reverso con Código QR) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">
                  Tarjeta de Presentación Digital
                </span>
                <button
                  onClick={() => setCardFlipped(!cardFlipped)}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium py-1 px-2.5 rounded-md bg-slate-900 border border-slate-800 transition-colors"
                >
                  <RotateCw size={13} />
                  <span>{cardFlipped ? 'Ver Anverso' : 'Girar Reverso'}</span>
                </button>
              </div>

              {/* Card Container */}
              <div className="relative min-h-[260px] rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0B0F17] border-2 border-cyan-500/40 p-6 sm:p-7 shadow-2xl flex flex-col justify-between overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                {!cardFlipped ? (
                  /* Anverso (Front) */
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="h-10 px-3.5 rounded-xl bg-gradient-to-r from-blue-600/30 via-slate-900 to-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                        <span className="font-mono font-bold text-sm tracking-tight whitespace-nowrap select-none">
                          <span className="text-cyan-400">&lt;</span>
                          <span className="text-white font-extrabold mx-0.5">BC</span>
                          <span className="text-cyan-400"> /&gt;</span>
                        </span>
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-700/50 text-cyan-300">
                        TECSUP CREDENTIAL
                      </span>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xl font-extrabold text-white tracking-tight">
                        {personalData.fullName}
                      </h4>
                      <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                        {personalData.professionalTitle}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        TECSUP - Diseño y Desarrollo de Software
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div>
                        <span className="text-slate-500 block text-[10px]">CORREO:</span>
                        <span className="font-mono truncate block">{personalData.email}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px]">WHATSAPP:</span>
                        <span className="font-mono">{personalData.phone}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Reverso (Back con Código QR simulado) */
                  <div className="animate-fadeIn flex flex-col items-center justify-center text-center space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                      Escanear para Conectar
                    </span>
                    <div className="w-28 h-28 rounded-xl bg-white p-2.5 shadow-xl flex items-center justify-center">
                      <QrCodeIcon size={88} className="text-slate-950" />
                    </div>
                    <div className="text-xs font-semibold text-slate-200">
                      bryan-coronel-paz
                    </div>
                    <p className="text-[10px] text-slate-400 max-w-xs">
                      Enlace directo a LinkedIn & Portafolio Digital de Bryan Coronel Paz
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Competencias Técnicas Badges & Categories */}
        <div className="mb-16">
          <div className="p-8 rounded-2xl bg-[#0F172A]/50 border border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Competencias Técnicas Clave</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Dominio clasificado por stack tecnológico, herramientas y metodologías
                </p>
              </div>

              {/* Filter pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === cat
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {cat === 'all' ? 'Ver Todas' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {filteredSkills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-tight">
                      {skill.category}
                    </span>
                    <CheckCircle2 size={12} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </div>
                  {skill.level && (
                    <span className="text-[10px] text-slate-400 mt-1">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logros & Reconocimientos Académicos */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0F172A]/70 border border-slate-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Award size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  Trayectoria Institucional
                </span>
                <h4 className="text-xl font-bold text-white">
                  Logros & Reconocimientos Académicos
                </h4>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-400">
              TECSUP • 2023 - 2025
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((ach, aIdx) => (
              <div
                key={aIdx}
                className="p-6 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                      {ach.institution}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {ach.period}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors pt-1">
                    {ach.title}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

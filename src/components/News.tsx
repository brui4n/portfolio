import React, { useState } from 'react';
import {
  Newspaper,
  BookOpen,
  Calendar,
  User,
  Quote,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Bookmark,
} from 'lucide-react';
import { technicalArticles, personalBrandNews } from '../data/portfolioData';

export const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  return (
    <section id="noticias" className="py-24 relative z-10 border-t border-slate-900 bg-[#0B0F17]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/60 mb-3 shadow-sm">
            <Newspaper size={14} />
            <span>Investigación & Actualidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            NOTICIAS & ARTÍCULOS TÉCNICOS
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Análisis de tendencias tecnológicas contemporáneas, fuentes académicas formales y reflexiones sobre la práctica profesional.
          </p>
        </div>

        {/* Noticia Alusiva a Mi Marca Personal (Featured Editorial) */}
        <div className="mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#162238] to-[#0B0F17] border-2 border-cyan-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-600/60 text-xs font-bold uppercase tracking-wider text-cyan-300">
                  <Sparkles size={14} />
                  {personalBrandNews.category}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar size={13} />
                  {personalBrandNews.date}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
                {personalBrandNews.title}
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {personalBrandNews.content.map((paragraph, idx) => (
                  <p key={idx} className="font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Takeaways */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                  <Bookmark size={14} />
                  <span>Conclusiones & Principios de Trabajo</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {personalBrandNews.takeaways.map((takeaway, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300"
                    >
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tres Artículos Técnicos con Citación Formal */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <BookOpen className="text-cyan-400" size={22} />
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Artículos Técnicos & Fuentes Académicas Citadas
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Formato de citación estandarizado (APA)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalArticles.map((article) => {
              const isExpanded = selectedArticle === article.id;
              return (
                <article
                  key={article.id}
                  className="rounded-2xl bg-[#0F172A]/80 border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group"
                >
                  <div>
                    {/* Header: Language & Date */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-700/60 text-cyan-300">
                        {article.language === 'ES' ? 'Español (ES)' : 'English (EN)'}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar size={12} />
                        {article.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                      {article.title}
                    </h4>

                    {/* Author & Source */}
                    <div className="space-y-1 mb-4 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                        <User size={13} className="text-cyan-400" />
                        <span>{article.author}</span>
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        Fuente: <span className="text-slate-300">{article.source}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {article.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Summary */}
                    <div className="text-slate-300 text-xs leading-relaxed mb-6 font-normal">
                      <div className="text-[10px] font-mono font-bold uppercase text-slate-500 mb-1">
                        Resumen del Artículo:
                      </div>
                      <p className={isExpanded ? '' : 'line-clamp-4'}>
                        {article.summary}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSelectedArticle(isExpanded ? null : article.id)}
                        className="text-cyan-400 hover:text-cyan-300 text-[11px] font-semibold mt-1 inline-block"
                      >
                        {isExpanded ? 'Ver menos' : 'Leer resumen completo...'}
                      </button>
                    </div>
                  </div>

                  {/* Formal Citation Box */}
                  <div className="pt-4 border-t border-slate-800/90">
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-cyan-400 mb-1.5">
                        <Quote size={11} />
                        <span>Citación Formal de Fuente:</span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-400 leading-normal italic select-all">
                        {article.formalCitation}
                      </p>
                    </div>

                    {article.sourceUrl && (
                      <div className="mt-3 flex justify-end">
                        <a
                          href={article.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          <span>Acceder a fuente original</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

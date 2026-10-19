import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'El nombre completo es requerido.';
    }
    if (!formData.email.trim()) {
      errs.email = 'El correo electrónico es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Ingrese un correo electrónico válido.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'El asunto o motivo es requerido.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Por favor ingrese su mensaje o propuesta.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'El mensaje debe tener al menos 10 caracteres.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // Clean after timeout
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contactos" className="py-24 relative z-10 border-t border-slate-900 bg-[#0F172A]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/60 mb-3 shadow-sm">
            <Mail size={14} />
            <span>Comunicación Directa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            CONTACTOS
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-sm sm:text-base">
            Canales directos de comunicación profesional, correo y formulario de contacto.
          </p>
        </div>

        {/* Canales Directos & Formulario Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0F172A]/80 border border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Canales Directos de Comunicación
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                Disponible para oportunidades profesionales, pasantías avanzadas, colaboraciones en proyectos de software y networking técnico.
              </p>

              {/* Data Cards */}
              <div className="space-y-4 mb-8">
                {/* WhatsApp / Teléfono */}
                <a
                  href={`https://wa.me/${personalData.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Teléfono / WhatsApp Directo
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {personalData.phone}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-slate-500 ml-auto" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">
                      Correo Electrónico
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                      {personalData.email}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-slate-500 ml-auto" />
                </a>
              </div>

              {/* Redes Profesionales Buttons */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Perfiles Profesionales Oficiales:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-blue-500 text-slate-200 text-xs font-semibold transition-all transform hover:-translate-y-0.5"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500 text-slate-200 text-xs font-semibold transition-all transform hover:-translate-y-0.5"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto Funcional */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0F172A]/80 border border-slate-800 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                <MessageSquare size={15} />
                <span>Formulario Interactivo</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Envíame un Mensaje Directo
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Completa los campos a continuación para consultas laborales o propuestas de proyectos.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-600/70 text-emerald-300 flex items-start gap-3 text-sm animate-fadeIn">
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">¡Mensaje Enviado con Éxito!</span>
                    <span>
                      Gracias por comunicarte, Bryan Coronel te responderá a la brevedad posible.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-mono font-semibold text-slate-300 mb-2 uppercase"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                          : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-mono font-semibold text-slate-300 mb-2 uppercase"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="correo@empresa.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                          : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="form-subject"
                    className="block text-xs font-mono font-semibold text-slate-300 mb-2 uppercase"
                  >
                    Asunto o Motivo de Contacto *
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="Oportunidad laboral / Proyecto Full Stack / Consulta técnica"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-mono font-semibold text-slate-300 mb-2 uppercase"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Escriba aquí los detalles de su mensaje o requerimiento..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500/20'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Enviar Mensaje</span>
                  <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

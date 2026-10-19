import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'perfil-profesional', 'proyectos', 'noticias', 'contactos'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INICIO', href: '#inicio', id: 'inicio' },
    { label: 'PERFIL PROFESIONAL', href: '#perfil-profesional', id: 'perfil-profesional' },
    { label: 'PROYECTOS', href: '#proyectos', id: 'proyectos' },
    { label: 'NOTICIAS', href: '#noticias', id: 'noticias' },
    { label: 'CONTACTOS', href: '#contactos', id: 'contactos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Ir a Inicio"
        >
          <div className="h-10 px-3.5 rounded-xl bg-gradient-to-r from-blue-600/30 via-slate-900 to-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400 group-hover:shadow-cyan-400/20 transition-all">
            <span className="font-mono font-bold text-sm tracking-tight whitespace-nowrap select-none">
              <span className="text-cyan-400">&lt;</span>
              <span className="text-white font-extrabold mx-0.5">BC</span>
              <span className="text-cyan-400"> /&gt;</span>
            </span>
          </div>
          <div className="hidden sm:block text-left">
            <span className="text-base font-bold text-white tracking-tight block leading-tight">
              {personalData.fullName}
            </span>
            <span className="text-[11px] font-mono text-cyan-400 block leading-tight">
              TECSUP Software Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Quick CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contactos"
            className="px-4 py-2 text-xs font-bold tracking-wide uppercase text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg shadow-md shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
          >
            Contáctame
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F17]/98 border-b border-slate-800/90 px-6 py-6 space-y-3 backdrop-blur-2xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-800/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contactos"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg"
            >
              Iniciar Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

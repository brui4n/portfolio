import React, { useEffect } from 'react';
import { X, FileText, CheckCircle2, ExternalLink } from 'lucide-react';

interface EvidenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  description: string;
  placeholderText: string;
  imageUrl?: string;
  externalLink?: string;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  description,
  placeholderText,
  imageUrl,
  externalLink,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <div>
            {category && (
              <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                {category}
              </span>
            )}
            <h3 className="text-lg font-bold text-white">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          <p className="text-slate-300 text-sm leading-relaxed">{description}</p>

          {/* Visual slot / Real Image or Placeholder preview */}
          {imageUrl ? (
            <div className="rounded-xl overflow-hidden border border-cyan-500/40 bg-slate-950 shadow-xl">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto max-h-[500px] object-contain mx-auto"
              />
            </div>
          ) : (
            <div className="relative rounded-xl border-2 border-dashed border-cyan-500/40 bg-slate-950/70 p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[220px]">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                <FileText size={32} />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-300 mb-3">
                <CheckCircle2 size={13} />
                <span>Espacio de Evidencia Acreditada</span>
              </div>
              <p className="text-sm font-medium text-slate-200 max-w-md">{placeholderText}</p>
              <span className="text-xs text-slate-500 mt-2">
                (Coloca tu archivo en <code>public/images/projects/</code> para visualizarlo aquí directamente)
              </span>
            </div>
          )}

          {externalLink && (
            <div className="flex justify-end pt-2">
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/20 transition-colors"
              >
                <span>Verificar enlace externo</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

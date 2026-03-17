import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    let rafId: number;

    if (isOpen) {
      setIsMounted(true);

      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);

      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 300);

      return () => clearTimeout(timer);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isMounted || !isBrowser) return null;

  const modalContent = (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6">
      <div
        className={`absolute inset-0 bg-secondary/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col transform transition-all duration-300 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        } ${className}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b border-secondary/20">
          {title ? (
            <h3 className="text-xl font-semibold text-secondary/90">{title}</h3>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="p-1.5 text-secondary/60 hover:bg-danger/10 hover:text-danger rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-danger/20"
            aria-label="Bağla"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 overflow-y-auto max-h-[70vh]">{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

Modal.displayName = "Modal";

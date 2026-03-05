import { useState, useEffect, useCallback, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface DrawerProps {
  children: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right"; // Dörd istiqamət əlavə edildi
  width?: string;
}

export const Drawer = ({
  children,
  content,
  position = "right",
  width,
}: DrawerProps) => {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, close]);

  const drawerVariants = {
    top: `top-0 left-0 right-0 w-full max-h-[85vh] rounded-b-2xl ${
      open ? "translate-y-0" : "-translate-y-full"
    }`,
    bottom: `bottom-0 left-0 right-0 w-full max-h-[85vh] rounded-t-2xl ${
      open ? "translate-y-0" : "translate-y-full"
    }`,
    left: `top-0 bottom-0 left-0 w-full sm:w-[400px] rounded-none sm:rounded-r-2xl  ${
      open ? "translate-x-0" : "-translate-x-full"
    }`,
    right: `top-0 bottom-0 right-0 w-full sm:w-[400px] rounded-none sm:rounded-l-2xl  ${
      open ? "translate-x-0" : "translate-x-full"
    }`,
  };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="inline-block cursor-pointer"
      >
        {children}
      </div>

      {createPortal(
        <div
          className={`fixed inset-0 z-50 transition-all duration-300 ${
            open ? "visible" : "invisible pointer-events-none delay-300"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={close}
          />

          <div
            className={`absolute bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out 
            ${drawerVariants[position]}`}
            style={{
              width: width,
            }}
          >
            {content}
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};

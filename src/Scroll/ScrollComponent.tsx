import React, { useEffect, useState } from "react";

export interface ScrollProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  textSize?: number;
  position?: "right" | "left";
  className?: string;
  children?: React.ReactNode;
}

const ScrollComponent = ({
  textSize,
  className = "",
  position = "right",
  children,
  ...props
}: ScrollProps) => {
  const [visible, setVisible] = useState(false);
  
  const base =
    "fixed flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 hover:translate-y-[-5px] z-50";

  const positionClass =
    position === "right" ? "bottom-5 right-5" : "bottom-5 left-5";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset >= 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {visible && (
        <div
          className={`${base} ${className} ${positionClass}`}
          onClick={scrollToTop}
          {...props}
        >
          <button style={{ fontSize: textSize, cursor: "pointer" }}>
            {children}
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollComponent;

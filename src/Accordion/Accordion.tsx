import { ChevronDown } from "lucide-react";
import React, {
  forwardRef,
  useState,
  Children,
  isValidElement,
  cloneElement,
} from "react";

interface AccordionHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

export const AccordionHeader = forwardRef<
  HTMLButtonElement,
  AccordionHeaderProps
>(({ children, className = "", isOpen, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={isOpen}
      className={`flex w-full items-center justify-between px-5 py-4 text-left font-medium text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500  ${
        isOpen ? "border-b border-neutral-100 dark:border-neutral-800" : ""
      } ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown
        className={`transition-transform duration-300 ease-in-out text-neutral-400 dark:text-neutral-500 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
});
AccordionHeader.displayName = "AccordionHeader";

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, isOpen, className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      } ${className}`}
      {...props}
    >
      <div className="overflow-hidden">
        <div className="px-5 py-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900 ">
          {children}
        </div>
      </div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export const Accordion = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className = "", ...props }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      ref={ref}
      className={`border border-neutral-200 dark:border-neutral-800  shadow-sm overflow-hidden ${className}`}
      {...props}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        if (child.type === AccordionHeader) {
          return cloneElement(child as React.ReactElement<any>, {
            onClick: () => setIsOpen((prev) => !prev),
            isOpen,
          });
        }
        if (child.type === AccordionContent) {
          return cloneElement(child as React.ReactElement<any>, {
            isOpen,
          });
        }

        return child;
      })}
    </div>
  );
});
Accordion.displayName = "Accordion";

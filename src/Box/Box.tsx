import React, { forwardRef } from "react";

export interface ProductBoxProps extends React.HTMLAttributes<HTMLElement> {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description?: string;
  price: string | number;
  oldPrice?: string | number;
  badge?: string;
  buttonText?: string;
  onActionClick?: () => void;
  as?: React.ElementType;
}

export const ProductBox = forwardRef<HTMLElement, ProductBoxProps>(
  (
    {
      imageSrc,
      imageAlt = "",
      title,
      description,
      price,
      oldPrice,
      badge,
      buttonText = "Səbətə at",
      onActionClick,
      as: Component = "article",
      className = "",
      ...props
    },
    ref,
  ) => {
    const containerClasses =
      "group max-w-100 flex flex-col bg-white dark:bg-secondary/10 dark:backdrop-blur-xl rounded-3xl overflow-hidden border border-secondary/20 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 ease-out";

    return (
      <Component
        ref={ref}
        className={`${containerClasses} ${className}`.trim()}
        {...props}
      >
        <div className="relative aspect-4/5 w-full overflow-hidden bg-secondary/5 dark:bg-secondary/20">
          {badge && (
            <span className="absolute top-4 left-4 z-20 bg-accent text-white text-xs font-bold tracking-wide px-3.5 py-1.5 rounded-full shadow-sm">
              {badge}
            </span>
          )}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500 z-10 pointer-events-none" />

          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col grow p-6">
          <h3
            className="text-lg font-semibold tracking-tight text-gray-900 line-clamp-1 group-hover:text-primary transition-colors duration-200"
            title={title}
          >
            {title}
          </h3>
          {description && (
            <p className="text-sm text-secondary mt-2 line-clamp-2 leading-relaxed">
              {description.length > 100
                ? description.slice(0, 100)
                : description}
            </p>
          )}

          <div className="mt-auto pt-6 flex items-center justify-between">
            <div className="flex flex-col">
              {oldPrice && (
                <span className="text-xs font-medium text-secondary/70 line-through mb-1">
                  {oldPrice}
                </span>
              )}
              <span className="text-xl font-bold tracking-tight text-primary">
                {price}
              </span>
            </div>

            {onActionClick && (
              <button
                onClick={onActionClick}
                className="bg-primary/10 text-primary hover:bg-primary hover:text-white dark:bg-primary/10 dark:hover:bg-primary dark:hover:text-white transition-all duration-300 text-sm font-semibold px-5 py-2.5 rounded-xl active:scale-95"
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </Component>
    );
  },
);

ProductBox.displayName = "ProductBox";

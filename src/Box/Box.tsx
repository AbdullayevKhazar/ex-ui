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
      "group flex flex-col w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg dark:shadow-gray-950/50 dark:hover:shadow-xl transition-all duration-300 ease-out";

    return (
      <Component
        ref={ref}
        className={`${containerClasses} ${className}`.trim()}
        {...props}
      >
        <div className="relative aspect-[4/5] w-full min-h-[200px] overflow-hidden bg-gray-100 dark:bg-gray-800">
          {badge && (
            <span className="absolute top-3 left-3 z-20 bg-accent text-white text-xs font-bold tracking-wide px-3 py-1 rounded-full shadow-md">
              {badge}
            </span>
          )}

          <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300 z-10 pointer-events-none" />

          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-3 p-5">
          <h3
            className="text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-primary transition-colors duration-200 min-h-[2.5rem]"
            title={title}
          >
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
              {description.length > 100
                ? `${description.slice(0, 100)}…`
                : description}
            </p>
          )}

          <div className="mt-1 flex items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              {oldPrice && (
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500 line-through">
                  {oldPrice}
                </span>
              )}
              <span className="text-lg font-bold text-primary">
                {price}
              </span>
            </div>

            {onActionClick && (
              <button
                type="button"
                onClick={onActionClick}
                className="shrink-0 bg-primary/10 text-primary hover:bg-primary hover:text-white dark:bg-primary/20 dark:text-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-200 text-sm font-semibold px-4 py-2 rounded-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/30"
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

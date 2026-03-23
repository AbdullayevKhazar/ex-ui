import React, { forwardRef } from "react";

export type TableVariant = "default" | "striped" | "borderless";
export type TableSize = "sm" | "md" | "lg";

const sizeMap: Record<TableSize, string> = {
  sm: "px-2 py-2 ",
  md: "px-4 py-3 ",
  lg: "px-6 py-4 ",
};
const textSizeMap: Record<TableSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

export const Table = forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & {
    variant?: TableVariant;
    size?: TableSize;
  }
>(({ className = "", variant = "default", size = "md", ...props }, ref) => (
  <div
    className={`w-full overflow-auto rounded-lg ${
      variant !== "borderless"
        ? "border border-gray-200 shadow-sm dark:border-gray-700"
        : ""
    }
        ${textSizeMap[size]}
    `}
  >
    <table
      ref={ref}
      className={`w-full text-left text-gray-700 dark:text-gray-200 ${className}`}
      {...props}
    />
  </div>
));

export const TableHeader = (
  props: React.HTMLAttributes<HTMLTableSectionElement>,
) => (
  <thead
    className="bg-gray-50 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700"
    {...props}
  />
);

export const TableBody = ({
  variant = "default",
  className = "",
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & {
  variant?: TableVariant;
}) => {
  return (
    <tbody
      className={`bg-white dark:bg-gray-950 ${
        variant === "striped" ? "" : "divide-y divide-gray-200 dark:divide-gray-800"
      } ${className}`}
      {...props}
    />
  );
};

export const TableRow = ({
  variant = "default",
  className = "",
  ...props
}: React.HTMLAttributes<HTMLTableRowElement> & {
  variant?: TableVariant;
}) => {
  const rowStyle =
    variant === "striped"
      ? "even:bg-gray-50 hover:bg-gray-100 dark:even:bg-gray-900 dark:hover:bg-gray-800"
      : "hover:bg-gray-50 dark:hover:bg-gray-900";
  return (
    <tr className={`${rowStyle} transition-colors ${className}`} {...props} />
  );
};

interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  size?: TableSize;
}

export const TableHead = ({
  size = "md",
  children,
  className = "",
  ...props
}: TableHeadProps) => {
  return (
    <th
      className={`font-semibold text-gray-900 dark:text-gray-100 ${sizeMap[size]} ${className}`}
      {...props}
    >
      {children}
    </th>
  );
};

export const TableCell = ({
  size = "md",
  className = "",
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement> & { size?: TableSize }) => {
  return (
    <td className={`align-middle ${sizeMap[size]} ${className}`} {...props} />
  );
};

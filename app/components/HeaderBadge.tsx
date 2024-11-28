import React from "react";

// interface HeaderBadgeProps extends React.ComponentPropsWithoutRef<'span'> {}

const HeaderBadge = React.forwardRef<HTMLSpanElement, any>(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className="z-10 block w-fit rounded-lg border border-lime-200/20 bg-lime-50/50 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tighter dark:border-lime-800/30 dark:bg-lime-900/20 sm:text-sm"
        {...props}
      >
        <span className="bg-gradient-to-b from-lime-500 to-lime-600 bg-clip-text text-transparent dark:from-lime-200 dark:to-lime-400">
          {children}
        </span>
      </span>
    );
  }
);

HeaderBadge.displayName = "Badge";

export { HeaderBadge };

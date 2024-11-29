// Tremor Button [v0.2.0]

import { Slot } from "@radix-ui/react-slot";
import { RiLoader2Fill } from "@remixicon/react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cx, focusRing } from "../lib/utils";

const buttonVariants = tv({
  base: [
    // base
    "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg border px-3 py-2 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out",
    // disabled
    "disabled:pointer-events-none disabled:shadow-none",
    // focus
    focusRing,
  ],
  variants: {
    variant: {
      primary: [
        // border
        "border-transparent",
        // text color
        "text-white dark:text-white",
        // background color
        "bg-lime-600 dark:bg-lime-500",
        // hover color
        "hover:bg-lime-700 dark:hover:bg-lime-400",
        // disabled
        "disabled:bg-lime-100 disabled:text-lime-400",
        "disabled:dark:bg-lime-800 disabled:dark:text-lime-600",
      ],
      secondary: [
        // border
        "border-zinc-300 dark:border-zinc-800",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // background color
        "bg-white dark:bg-zinc-950",
        //hover color
        "hover:bg-zinc-50 dark:hover:bg-zinc-900/60",
        // disabled
        "disabled:text-zinc-400",
        "disabled:dark:text-zinc-600",
      ],
      light: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // background color
        "bg-zinc-200 dark:bg-zinc-900",
        // hover color
        "hover:bg-zinc-300/70 dark:hover:bg-zinc-800/80",
        // disabled
        "disabled:bg-zinc-100 disabled:text-zinc-400",
        "disabled:dark:bg-zinc-800 disabled:dark:text-zinc-600",
      ],
      ghost: [
        // base
        "shadow-none",
        // border
        "border-transparent",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // hover color
        "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800/80",
        // disabled
        "disabled:text-zinc-400",
        "disabled:dark:text-zinc-600",
      ],
      destructive: [
        // text color
        "text-white",
        // border
        "border-transparent",
        // background color
        "bg-red-600 dark:bg-red-700",
        // hover color
        "hover:bg-red-700 dark:hover:bg-red-600",
        // disabled
        "disabled:bg-red-300 disabled:text-white",
        "disabled:dark:bg-red-950 disabled:dark:text-red-400",
      ],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      children,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={forwardedRef}
        className={cx(buttonVariants({ variant }), className)}
        disabled={disabled || isLoading}
        tremor-id="tremor-raw"
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <RiLoader2Fill
              className="size-4 shrink-0 animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">
              {loadingText ? loadingText : "Loading"}
            </span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };

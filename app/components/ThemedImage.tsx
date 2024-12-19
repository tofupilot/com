import clsx from "clsx";
import Image from "next/image";

export function ThemedImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <>
      <Image
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        className={clsx("block dark:hidden", className)}
      />
      <Image
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        className={clsx("hidden dark:block", className)}
      />
    </>
  );
}

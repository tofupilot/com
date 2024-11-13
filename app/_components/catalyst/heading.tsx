import { clsx } from 'clsx';
import {
  AvailableChartColorsKeys,
  getColorClassName,
} from '../tremor/chartUtils';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: AvailableChartColorsKeys;
} & React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

export function Heading({
  className,
  level = 1,
  color,
  ...props
}: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(
        className,
        color
          ? getColorClassName(color, 'text')
          : 'text-zinc-950 dark:text-white',
        'text-2xl/8 font-semibold sm:text-xl/8'
      )}
    />
  );
}

export function Subheading({
  className,
  color,
  level = 2,
  ...props
}: HeadingProps) {
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(
        className,
        color
          ? getColorClassName(color, 'text')
          : 'text-zinc-950 dark:text-white',
        'text-base/7 font-semibold sm:text-sm/6'
      )}
    />
  );
}

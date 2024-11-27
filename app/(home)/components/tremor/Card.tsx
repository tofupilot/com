// Tremor Card [v0.0.2]

import { cx } from '@/app/(home)/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import React from 'react'

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'div'
    return (
      <Component
        ref={forwardedRef}
        className={cx(
          // base
          'relative w-full rounded-lg border p-6 text-left shadow-sm',
          // background color
          'bg-white dark:bg-zinc-900/5',
          // border color
          'border-zinc-200 dark:border-zinc-700',
          className,
        )}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  },
)

Card.displayName = 'Card'

export { Card, type CardProps }

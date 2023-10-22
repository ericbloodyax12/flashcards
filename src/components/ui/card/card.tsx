import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T>

export const Card = forwardRef(
  <T extends ElementType = 'div'>(
    props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>,
    ref: ElementRef<T>
  ) => {
    const { as: Component = 'div', className, ...rest } = props

    return (
      // @ts-expect-error todo: not sure how to type it
      <Component className={`${s.card} ${className}`} ref={ref} {...rest} />
    )
  }
) as <T extends ElementType = 'div'>(
  props: CardProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>> & { ref?: ForwardedRef<ElementRef<T>> }
) => ReactNode

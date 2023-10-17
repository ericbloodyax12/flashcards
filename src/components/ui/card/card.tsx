import { ComponentPropsWithoutRef, ElementType, LegacyRef, forwardRef } from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T>

export const Card = forwardRef(
  <T extends ElementType = 'div'>(
    props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) => {
    const { as: Component = 'div', className, ...rest } = props

    return <Component className={`${s.card} ${className}`} ref={ref} {...rest} />
  }
)

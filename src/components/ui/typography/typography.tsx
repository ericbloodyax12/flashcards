import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'
type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as: Tag = 'p', className, variant = 'body1', ...rest } = props

  return <Tag className={`${s[variant]} ${s.typography} ${className}`} {...rest}></Tag>
}

import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
    ref: ElementRef<T>
  ) => {
    const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

    return (
      // @ts-expect-error todo: not sure how to type it
      <Component
        className={clsx(
          s[variant],
          s.button,
          fullWidth ? s.fullWidth : '',
          className,
          props.disabled && clsx(s[variant + '_disabled'], s.disabled)
        )}
        ref={ref}
        {...rest}
      />
    )
  }
) as <T extends ElementType = 'button'>(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> & { ref?: ForwardedRef<ElementRef<T>> }
) => ReactNode

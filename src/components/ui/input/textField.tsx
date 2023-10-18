import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './input.module.scss'
// todo: 1. Сдделать сам инпут спервa: a) чтобы тип менялся от s.variant б)
export type InputProps = {
  fullWidth?: boolean
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(props => {
  const { className, fullWidth, placeholder, variant = 'default', ...rest } = props

  let type

  switch (variant) {
    case 'password':
      type = 'password'
      break
    case 'search':
      type = 'search'
      break
    case 'default':
    default:
      type = 'default'
      break
  }

  return (
    <input
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
  )
})

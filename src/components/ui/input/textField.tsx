import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { SearchIcon } from '@/assets/iconComponents/search.tsx'

import s from './input.module.scss'
// todo:  a) error logic б) icons c) label d) err messag
export type InputProps = {
  errorMessage?: string
  fullWidth?: boolean
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputProps>(props => {
  const { className, errorMessage, fullWidth, variant = 'default', ...rest } = props

  return (
    <div className={s.inputContainer}>
      <SearchIcon className={s.icon} />
      <input
        className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
        type={variant}
        {...rest}
      />
    </div>

    // <Typography className={classNames.error} variant={'error'}>
    //   {errorMessage}
    // </Typography>
  )
})

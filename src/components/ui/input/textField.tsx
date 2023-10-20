import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { EyeIcon } from '@/assets/iconComponents/eye'
import { EyeOffIcon } from '@/assets/iconComponents/eyeoff'
import { SearchIcon } from '@/assets/iconComponents/search'
import { Typography } from '@/components/ui/typography'

import s from './input.module.scss'
// todo
export type InputProps = {
  errorMessage?: string
  fullWidth?: boolean
  label?: string
  search?: boolean
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputProps>(props => {
  const { className, errorMessage, fullWidth, label, search, variant = 'default', ...rest } = props
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={`${s.inputContainer} ${fullWidth ? s.fullWidth : ''}`}>
      <Typography as={'label'} className={s.label} variant={'body2'}>
        {label}
      </Typography>
      {variant === 'search' && <SearchIcon className={s.icon} />}
      <input
        className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className} ${
          errorMessage ? s.error : ''
        }`}
        type={variant}
        {...rest}
      />

      <button
        onClick={() => {
          setShowPassword(value => !value)
        }}
        style={{ all: 'unset', backgroundColor: 'transparent' }}
      >
        {showPassword
          ? variant === 'password' && <EyeOffIcon className={s.eyeIconOff} />
          : variant === 'password' && <EyeIcon className={s.eyeIcon} />}
      </button>
      <Typography className={s.error} variant={'caption'}>
        {errorMessage}
      </Typography>
    </div>
  )
})

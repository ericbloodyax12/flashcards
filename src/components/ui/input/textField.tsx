import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { EyeIcon } from '@/assets/iconComponents/eye'
import { EyeOffIcon } from '@/assets/iconComponents/eyeoff'
import { SearchIcon } from '@/assets/iconComponents/search'

import s from './input.module.scss'
// todo:  a) icon for password
export type InputProps = {
  errorMessage?: string
  fullWidth?: boolean
  search?: boolean
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputProps>(props => {
  const { className, errorMessage, fullWidth, search, variant = 'default', ...rest } = props
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={s.inputContainer}>
      {variant === 'search' && <SearchIcon className={s.icon} />}

      <input
        className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
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
    </div>

    // <Typography className={classNames.error} variant={'error'}>
    //   {errorMessage}
    // </Typography>
  )
})

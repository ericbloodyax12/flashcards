import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { EyeIcon } from '@/assets/icons/eye'
import { EyeOffIcon } from '@/assets/icons/eyeoff'
import SearchIcon from '@/assets/icons/search'
import { ErrorMessage } from '@/components/ui/errorMessage'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './textField.module.scss'
export type InputProps = {
  errorMessage?: string
  fullWidth?: boolean
  label?: string
  search?: boolean
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, disabled, errorMessage, label, search, variant = 'default', ...rest } = props
  const [isShowPassword, setIsShowPassword] = useState(false)

  const classes = {
    container: clsx(
      s.inputContainer,
      errorMessage && s.errorMessage,
      label && s.marginTop,
      className
    ),
    error: clsx(s.error, disabled && s.disabled),
    iconButton: clsx(disabled ? s.disabled : s.iconButton),
    inputClassName: clsx(s.input, s[variant], errorMessage && s.errorMessage),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classes.container}>
      {label && (
        <Typography as={'label'} className={classes.label} htmlFor={label} variant={'body2'}>
          {label}
        </Typography>
      )}
      {variant === 'search' && <SearchIcon className={s.icon} disabled={disabled} />}
      <input
        className={classes.inputClassName}
        disabled={disabled}
        id={label}
        type={isShowPassword ? 'text' : variant}
        {...rest}
        ref={ref}
      />

      <button
        className={classes.iconButton}
        onClick={() => {
          setIsShowPassword(value => !value)
        }}
      >
        {isShowPassword
          ? variant === 'password' && <EyeOffIcon className={s.eyeIcon} disabled={disabled} />
          : variant === 'password' && <EyeIcon className={s.eyeIcon} disabled={disabled} />}
      </button>
      <ErrorMessage className={classes.error} error={errorMessage} />
    </div>
  )
})

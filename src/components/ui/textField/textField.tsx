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
  const { className, errorMessage, label, disabled, search, variant = 'default', ...rest } = props
  const [isShowPassword, setIsShowPassword] = useState(false)

  const classes = {
    container: clsx(
      s.inputContainer,
      errorMessage && clsx(s.errorMessage, s.marginBottom),
      label && s.marginTop
    ),
    error: disabled && s.disabled,
    inputClassName: clsx(s.input, s[variant], errorMessage && s.errorMessage, className),
    label: clsx(s.label, disabled && s.disabled),
    iconButton: clsx(disabled ? s.disabled : s.iconButton),
  }

  return (
    <div className={classes.container}>
      {label && (
        <Typography as={'label'} htmlFor={label} className={classes.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      {variant === 'search' && <SearchIcon className={s.icon} disabled={disabled} />}
      <input
        id={label}
        className={classes.inputClassName}
        type={isShowPassword ? 'text' : variant}
        disabled={disabled}
        {...rest}
        ref={ref}
      />

      <button
        className={classes.iconButton} // inputContainer--icon-button
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

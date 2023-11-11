import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { EyeIcon } from '@/assets/icons/eye'
import { EyeOffIcon } from '@/assets/icons/eyeoff'
import SearchIcon from '@/assets/icons/search'
import { ErrorMessage } from '@/components/ui/errorMessage'
import { Label } from '@/components/ui/label'
import { clsx } from 'clsx'

import s from './textField.module.scss'
export type TextFieldProps = {
  errorMessage?: string
  label?: string
  search?: boolean
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
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
    iconButton: clsx(s.iconButton, disabled && s.disabled),
    inputClassName: clsx(s.input, s[variant], errorMessage && s.errorMessage),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classes.container}>
      <Label className={classes.label} label={label} />
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
        onClick={() => setIsShowPassword(value => !value)}
        type={'button'}
      >
        {isShowPassword
          ? variant === 'password' && <EyeOffIcon className={s.eyeIcon} disabled={disabled} />
          : variant === 'password' && <EyeIcon className={s.eyeIcon} disabled={disabled} />}
      </button>
      <ErrorMessage className={classes.error} error={errorMessage} />
    </div>
  )
})

import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import CrossIcon from '@/assets/icons/cross'
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
  location?: 'fixed' | 'relative'
  onValueChange?: (value: string) => void
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    disabled,
    errorMessage,
    label,
    location = 'relative',
    onChange,
    onValueChange,
    variant = 'default',
    ...rest
  } = props
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const classes = {
    container: clsx(
      s.inputContainer,
      errorMessage && s.errorMessage,
      errorMessage && location === 'relative' && s.marginBottom,
      label && s.marginTop,
      className,
      disabled && s.disabled
    ),
    cross: clsx(s.cross, disabled && s.disabled),
    error: clsx(s.error, disabled && s.disabled),
    iconButton: clsx(s.iconButton, disabled && s.disabled),
    inputClassName: clsx(s.input, s[variant], errorMessage && s.errorMessage),
    label: clsx(s.label, disabled && s.disabled),
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    variant === 'search' && setInputValue(e.currentTarget.value)
    onChange?.(e)
    onValueChange?.(e.target.value)
  }
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => inputRef.current!, [])
  const handleClick = () => {
    !disabled && inputRef && inputRef.current && (inputRef.current.value = '')
    !disabled && setInputValue('')
  }

  return (
    <div className={classes.container}>
      <Label className={classes.label} label={label} />
      <div className={s.searchIcons}>
        {variant === 'search' && <SearchIcon className={s.icon} disabled={disabled} />}
        {variant === 'search' && inputValue && (
          <CrossIcon
            className={classes.cross}
            cleanSearchHandler={handleClick}
            disabled={disabled}
          />
        )}
      </div>
      <input
        className={classes.inputClassName}
        disabled={disabled}
        id={label}
        onChange={handleChange}
        type={isShowPassword || variant === 'search' ? 'text' : variant}
        {...rest}
        ref={inputRef}
      />

      <button
        className={classes.iconButton}
        onClick={() => !disabled && setIsShowPassword(value => !value)}
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

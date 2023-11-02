import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import { ErrorMessage } from '@/components/ui/errorMessage/errorMessage'
import { Typography, TypographyProps } from '@/components/ui/typography'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radioGroup.module.scss'

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...rest }, ref) => {
  const root = clsx(s.root, className)
  return <RadioGroupPrimitive.Root className={root} {...rest} ref={ref} />
})

RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName
export const RadioGroupItem = React.forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ children, className, ...props }, ref) => {
  const item = clsx(s.option, className)
  return (
    <RadioGroupPrimitive.Item className={item} ref={ref} {...props}>
      <div className={s.icon}></div>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
type Option = {
  label: string
  value: string
}
export type RadioGroupProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  errorMessage?: string
  fontVariant?: TypographyProps['variant']
  options?: Option[]
  variant?: 'default' | 'empty'
  position?: 'left' | 'right'
}
export const RadioGroup = React.forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>((props: RadioGroupProps, ref) => {
  const {
    children = undefined,
    defaultValue,
    errorMessage,
    fontVariant = 'body2',
    options,
    variant = 'default',
    position = 'right',
    ...rest
  } = props
  const defaultOption =
    options && options[0] && variant === 'default' ? options[0].value : undefined

  return (
    <RadioGroupRoot
      className={position === 'left' ? s.position : ''}
      defaultValue={defaultValue ?? defaultOption}
      {...rest}
      ref={ref}
    >
      {children ??
        (options
          ? options.map(option => (
              <div className={s.label} key={option.value}>
                <RadioGroupItem id={option.value} value={option.value} />
                <Typography as={'label'} htmlFor={option.value} variant={fontVariant}>
                  {option.label}
                </Typography>
              </div>
            ))
          : '')}
      <ErrorMessage error={errorMessage} />
    </RadioGroupRoot>
  )
})

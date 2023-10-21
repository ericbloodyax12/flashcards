import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import { Typography, TypographyProps } from '@/components/ui/typography'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radioGroup.module.scss'

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...rest }, ref) => {
  return <RadioGroupPrimitive.Root className={clsx(s.root, className)} {...rest} ref={ref} />
})

RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName
export const RadioGroupItem = React.forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item className={clsx(s.option, className)} ref={ref} {...props}>
      <div className={s.icon}></div>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName
type Option = {
  label: string
  value: string
}
type RadioGroupRadix = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  errorMessage?: string
  fontVariant?: TypographyProps['variant']
  options: Option[]
}
export const RadioGroup = React.forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupRadix
>((props: RadioGroupRadix, ref) => {
  const { children = undefined, errorMessage, fontVariant = 'body2', options, ...rest } = props

  return (
    <RadioGroupRoot defaultValue={options[0].value} {...rest} ref={ref}>
      {children
        ? children
        : options.map(option => (
            <div className={s.label} key={option.value}>
              <RadioGroupItem id={option.value} value={option.value} />
              <Typography as={'label'} htmlFor={option.value} variant={fontVariant}>
                {option.label}
              </Typography>
            </div>
          ))}
    </RadioGroupRoot>
  )
})

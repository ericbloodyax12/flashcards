import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import ArrowIcon from '@/assets/icons/arrow'
import { ErrorMessage } from '@/components/ui/errorMessage'
import { Label } from '@/components/ui/label'
import { Typography, TypographyProps } from '@/components/ui/typography'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

export const SelectItem = React.forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => {
  const item = clsx(s.select, s.item, className)

  return (
    <SelectPrimitive.Item className={item} {...props} ref={ref}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})

type Option = {
  label: string
  value: string
}
export type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  className?: string
  errorMessage?: string
  fontVariant?: TypographyProps['variant']
  id?: string
  location?: 'fixed' | 'relative'
  options?: Option[]
  placeholder?: string
  title?: string
}
export const Select = React.forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, SelectProps>(
  (props: SelectProps, ref) => {
    const {
      children = undefined,
      className,
      errorMessage,
      fontVariant = 'body1',
      location = 'relative',
      options,
      placeholder,
      title,
      ...rest
    } = props
    const classes = {
      content: clsx(s.border, s.content),
      title: clsx(s.title, rest.disabled && s.disabled),
      trigger: clsx(
        s.border,
        s.select,
        s.trigger,
        errorMessage && s.error,
        errorMessage && location === 'relative' && s.marginBottom,
        title && s.marginTop,
        className
      ),
    }

    return (
      <SelectPrimitive.Root {...rest}>
        <SelectPrimitive.Trigger
          aria-label={'Select-box'}
          className={classes.trigger}
          ref={ref}
          {...rest}
        >
          <div className={s.container}>
            <SelectPrimitive.Value placeholder={placeholder} />
            <ArrowIcon className={s.icon} disabled={rest.disabled} />
            <Label className={classes.title} label={title} />
            <ErrorMessage className={s.errorMessage} error={errorMessage} />
          </div>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Content className={classes.content} position={'popper'} {...rest}>
          <SelectPrimitive.Viewport>
            {children ??
              (options
                ? options.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      <Typography variant={fontVariant}>{option.label}</Typography>
                    </SelectItem>
                  ))
                : '')}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Root>
    )
  }
)

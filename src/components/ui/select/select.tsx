import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import ArrowIcon from '@/assets/icons/arrow'
import { Typography, TypographyProps } from '@/components/ui/typography'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'
import { ErrorMessage } from '@/components/ui/errorMessage'

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
  options?: Option[]
  title?: string
}
export const Select = React.forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, SelectProps>(
  (props: SelectProps, ref) => {
    const {
      children = undefined,
      className,
      defaultValue,
      errorMessage,
      fontVariant = 'body1',
      options,
      title,
      ...rest
    } = props
    const classes = {
      content: clsx(s.border, s.content),
      trigger: clsx(s.border, s.select, s.trigger, className, errorMessage && s.error),
      root: clsx(s.root, className),
    }

    return (
      <SelectPrimitive.Root defaultValue={defaultValue ?? (options && options[0].value)} {...rest}>
        <SelectPrimitive.Trigger
          aria-label={'Select-box'}
          className={classes.trigger}
          ref={ref}
          {...rest}
        >
          <div className={s.container}>
            <SelectPrimitive.Value />
            <ArrowIcon className={s.icon} disabled={rest.disabled} />
            {title && (
              <Typography className={s.title} variant={'body2'}>
                {title}
              </Typography>
            )}
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
        <ErrorMessage error={errorMessage} />
      </SelectPrimitive.Root>
    )
  }
)

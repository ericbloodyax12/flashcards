import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import ArrowIcon from '@/assets/icons/arrow'
import { Typography, TypographyProps } from '@/components/ui/typography'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

export const SelectItem = React.forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <SelectPrimitive.Item className={clsx(s.select, s.item, className)} {...props} ref={ref}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})

type Option = {
  label: string
  value: string
}
type SelectRadix = ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  className?: string
  errorMessage?: string
  fontVariant?: TypographyProps['variant']
  options?: Option[]
  title?: string
}
export const Select = React.forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, SelectRadix>(
  (props: SelectRadix, ref) => {
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
    const trigger = clsx(s.border, s.select, s.trigger, className)

    return (
      <div>
        {title && (
          <div className={s.title}>
            <Typography variant={'body2'}>{title}</Typography>
          </div>
        )}
        <SelectPrimitive.Root
          defaultValue={defaultValue ?? (options ? options[0].value : '')}
          {...rest}
        >
          <SelectPrimitive.Trigger
            aria-label={'Select-box'}
            className={trigger}
            ref={ref}
            {...rest}
          >
            <div className={s.container}>
              <SelectPrimitive.Value />
              <ArrowIcon className={s.icon} disabled={rest.disabled} />
            </div>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal {...rest}>
            <SelectPrimitive.Content className={s.border} {...rest}>
              {children ??
                (options
                  ? options.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        <Typography variant={fontVariant}>{option.label}</Typography>
                      </SelectItem>
                    ))
                  : '')}
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    )
  }
)

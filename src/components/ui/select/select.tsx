import React, { ComponentPropsWithoutRef, ElementRef, useState } from 'react'

import { ArrowIcon } from '@/assets/iconComponents/ArrowIcon'
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
type SelectRadix = ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  fontVariant?: TypographyProps['variant']
  items: string[]
  title?: string
}
export const Select = React.forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectRadix>(
  (props: SelectRadix, ref) => {
    const { children = undefined, fontVariant = 'body1', items, title, ...rest } = props
    const [open, setOpen] = useState(false)
    const onOpenHandler = (e: ((prevState: boolean) => boolean) | boolean) => setOpen(e)

    return (
      <div>
        {title && (
          <div className={s.title}>
            <Typography variant={'body2'}>{title}</Typography>
          </div>
        )}
        <SelectPrimitive.Root defaultValue={items[0]} onOpenChange={onOpenHandler} {...rest}>
          <SelectPrimitive.Trigger
            aria-label={'Select-box'}
            className={clsx(s.border, s.select, s.trigger)}
            ref={ref}
            {...rest}
          >
            <div className={s.container}>
              <SelectPrimitive.Value />
              <ArrowIcon className={clsx(s.icon, open ? s.rotate : '')} disabled={rest.disabled} />
            </div>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal {...rest}>
            <SelectPrimitive.Content className={s.border} {...rest}>
              {children
                ? children
                : items.map(item => (
                    <SelectItem key={item} value={item}>
                      <Typography variant={fontVariant}>{item}</Typography>
                    </SelectItem>
                  ))}
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>
    )
  }
)

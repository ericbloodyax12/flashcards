import React, { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'

import * as DropDownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropDown.module.scss'

type DropDownRadix = ComponentPropsWithoutRef<typeof DropDownMenu.Root> & {
  className?: string
  errorMessage?: string
  icon: ReactNode
  options?: ReactNode[]
}

export const DropDownItem = React.forwardRef<
  ElementRef<typeof DropDownMenu.Item>,
  ComponentPropsWithoutRef<typeof DropDownMenu.Item>
>(({ children, className, ...props }, ref) => {
  return (
    <DropDownMenu.Item className={clsx(s.item, className)} {...props} ref={ref}>
      {children}
    </DropDownMenu.Item>
  )
})

export const DropDownSeparator: React.FC<
  ComponentPropsWithoutRef<typeof DropDownMenu.Separator>
> = (className?, ...rest) => (
  <DropDownMenu.Separator className={clsx(s.separator, className)} {...rest} />
)
export const DropDown = React.forwardRef<ElementRef<typeof DropDownMenu.Trigger>, DropDownRadix>(
  (props: DropDownRadix, ref) => {
    const { children = undefined, className, errorMessage, icon, options, ...rest } = props
    const trigger = clsx(s.dropDown, s.trigger, className)

    return (
      <div className={s.dropDown}>
        <DropDownMenu.Root {...rest}>
          <DropDownMenu.Trigger
            aria-label={'Drop-down'}
            asChild
            className={trigger}
            ref={ref}
            {...rest}
          >
            {icon}
          </DropDownMenu.Trigger>
          <DropDownMenu.Portal>
            <DropDownMenu.Content sideOffset={5} {...rest}>
              <div className={s.content}>
                {children ??
                  (options
                    ? options.map((option, i) => (
                        <>
                          <div key={i}>{option}</div>
                          {i < options.length - 1 && <DropDownSeparator />}
                        </>
                      ))
                    : '')}
                <DropDownMenu.Arrow className={s.arrow} />
              </div>
            </DropDownMenu.Content>
          </DropDownMenu.Portal>
        </DropDownMenu.Root>
      </div>
    )
  }
)

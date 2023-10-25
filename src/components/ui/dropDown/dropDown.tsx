import React, { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropDown.module.scss'

type DropDownRadix = ComponentPropsWithoutRef<typeof DropdownMenu.Root> & {
  className?: string
  errorMessage?: string
  icon: ReactNode
  options?: ReactNode[]
}
export const DropDown = React.forwardRef<ElementRef<typeof DropdownMenu.Root>, DropDownRadix>(
  (props: DropDownRadix, ref) => {
    const { children = undefined, className, errorMessage, icon, options, ...rest } = props
    const trigger = clsx(s.dropDown, s.trigger, className)

    return (
      <div className={s.dropDown}>
        <DropdownMenu.Root {...rest}>
          <DropdownMenu.Trigger
            aria-label={'Drop-down'}
            asChild
            className={trigger}
            ref={ref}
            {...rest}
          >
            {icon}
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content sideOffset={5} {...rest}>
              <div className={s.content}>
                {children ??
                  (options
                    ? options.map((option, i) => (
                        <>
                          <DropdownMenu.Item className={s.option} key={i}>
                            {option}
                          </DropdownMenu.Item>
                          {i < options.length - 1 && (
                            <DropdownMenu.Separator className={s.separator} />
                          )}
                        </>
                      ))
                    : '')}
                <DropdownMenu.Arrow className={s.arrow} />
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    )
  }
)

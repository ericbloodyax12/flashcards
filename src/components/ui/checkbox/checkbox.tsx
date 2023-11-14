import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Check from '@/assets/icons/check'
import { Label } from '@/components/ui/label'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  className?: string
  label: string
  position?: 'left' | 'right'
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ checked, className, disabled, label, position = 'right', ...rest }, ref) => {
    const classes = {
      checkBlank: clsx(s.checkbox, s.checkBlank),
      icon: clsx(s.icon, s.background),
      label: disabled ? s.disabled : s.label,
      root: clsx(s.container, position === 'left' && s.position, className),
    }
    const fill = disabled ? 'var(--color-dark-100)' : 'var(--color-light-100)'

    return (
      <RadixCheckbox.Root
        checked={checked}
        className={classes.root}
        disabled={disabled}
        id={label}
        ref={ref}
        {...rest}
      >
        <div className={classes.icon}>
          {!checked && <div className={classes.checkBlank}></div>}
          {checked && (
            <RadixCheckbox.Indicator className={s.checkbox}>
              <Check fill={fill} />
            </RadixCheckbox.Indicator>
          )}
        </div>
        <Label className={classes.label} label={label} />
      </RadixCheckbox.Root>
    )
  }
)

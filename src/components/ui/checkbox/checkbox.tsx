import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Check from '@/assets/icons/check'
import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type Props = {
  classname?: string
  label?: string
  position?: 'left' | 'right'
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, Props>(
  ({ checked, classname, disabled, label, position = 'left', ...rest }, ref) => {
    const classes = {
      checkBlank: clsx(s.checkbox, s.checkBlank),
      icon: clsx(s.icon, s.background),
      label: disabled ? s.disabled : s.label,
      root: clsx(s.container, position === 'left' && s.position, classname),
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
        {label && (
          <Typography as={'label'} className={classes.label} htmlFor={label} variant={'body2'}>
            {label}
          </Typography>
        )}
      </RadixCheckbox.Root>
    )
  }
)

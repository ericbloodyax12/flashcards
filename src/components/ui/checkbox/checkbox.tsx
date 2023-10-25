import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Check from '@/assets/icons/check'
import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type Props = {
  checked?: boolean
  classname?: string
  disabled: boolean
  id: string
  label?: string
  onChange: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, Props>(
  ({ checked, classname, disabled, id, label, onChange }, ref) => {
    const classes = {
      checkbox: s.checkbox,
      root: clsx(s.label, disabled && s.disabled, classname),
    }

    return (
      <div className={classes.root}>
        {label && (
          <Typography as={'label'} className={s.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <RadixCheckbox.Root
          checked={checked}
          className={classes.checkbox}
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
          ref={ref}
        >
          {checked && (
            <RadixCheckbox.Indicator className={s.indicator}>
              <Check />
            </RadixCheckbox.Indicator>
          )}
        </RadixCheckbox.Root>
      </div>
    )
  }
)

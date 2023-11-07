import { ComponentPropsWithoutRef, ElementType, FC } from 'react'

import Check from '@/assets/iconComponents/check'
import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type Props = {
  checked?: boolean
  classname?: string
  disabled: boolean
  id: string
  label?: string
  onChange: (checked: boolean) => void
} & ComponentPropsWithoutRef<ElementType>
export const Checkbox: FC<Props> = (
  props: Props & Omit<ComponentPropsWithoutRef<ElementType>, keyof Props>
) => {
  const { checked, disabled, id, label, onChange, ...rest } = props
  const containerClassName = `${s.container}${props.disabled ? s.disabled : ''}`
  const rootClassName = `${s.checkbox} ${checked ? s.checked : ''}`

  return (
    <div className={containerClassName}>
      {label && (
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <RadixCheckbox.Root
        checked={checked}
        className={rootClassName}
        disabled={disabled}
        id={id}
        onCheckedChange={onChange}
        {...rest}
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

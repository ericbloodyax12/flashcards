import { FC, useState } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type Props = {
  checked?: boolean
  classname?: string
  label?: string
  onChange: (checked: boolean) => void
} & CheckboxProps
export const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(props.defaultChecked)
  const rootClassName = `${s.checkbox} ${checked ? s.checked : ''}`

  return (
    <div className={s.container}>
      <RadixCheckbox.Root
        checked={props.checked}
        className={rootClassName}
        onChange={() => setChecked}
        {...props}
      ></RadixCheckbox.Root>
    </div>
  )
}

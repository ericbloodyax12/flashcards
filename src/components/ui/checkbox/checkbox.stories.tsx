import { useState } from 'react'

import { Checkbox } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    checked: { type: 'boolean' },
    id: { control: 'text', defaultValue: 'id-1' },
    label: { control: 'text', defaultValue: 'checkbox' },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
export type Story = StoryObj<typeof meta>

export const CheckboxDefault = () => {
  const [checked, setChecked] = useState(false)
  const onChangeChecked = () => setChecked(!checked)

  return <Checkbox checked={checked} label={'Check-box'} onCheckedChange={onChangeChecked} />
}

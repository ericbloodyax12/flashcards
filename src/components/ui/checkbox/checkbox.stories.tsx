import { useState } from 'react'

import { Checkbox } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    disabled: { control: { type: 'radio' }, defaultValue: false, options: [true, false] },
    label: { control: 'text' },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
export type Story = StoryObj<typeof meta>

export const CheckboxDefault = (arg: Story) => {
  const [checked, setChecked] = useState(false)
  const onChangeChecked = () => setChecked(!checked)

  return (
    <Checkbox checked={checked} {...arg} label={'Check-box'} onCheckedChange={onChangeChecked} />
  )
}

import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

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
type Story = StoryObj<typeof meta>

export const CheckboxDefault: Story = {
  args: {
    disabled: false,
    label: 'Click here',
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false)
    const onChangeChecked = () => setChecked(!checked)

    return <Checkbox {...args} checked={checked} onChange={onChangeChecked} />
  },
}

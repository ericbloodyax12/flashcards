import type { Meta, StoryObj } from '@storybook/react'

import s from './select.stories.module.scss'

import { Select } from './'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

const args = {
  disabled: false,
  options: [
    { label: 'Select-box1', value: 'Select-box1' },
    { label: 'Select-box2', value: 'Select-box2' },
    { label: 'Select-box3', value: 'Select-box3' },
  ],
  title: 'Select-box',
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args,
}

export const FullWidth: Story = {
  args: { ...args, fullWidth: true },
}

export const Customized: Story = {
  args: {
    ...args,
    className: s.customized,
    fontVariant: 'h3',
  },
}

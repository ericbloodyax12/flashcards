import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
  },
}

export const FileInput: Story = {
  args: {
    disabled: false,
    type: 'file',
  },
}
export const FullWidth: Story = {
  args: {
    disabled: false,
    fullWidth: true,
    variant: 'input',
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    variant: 'default',
    style: { width: 1190 },
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    label: 'Input',
    placeholder: 'Input',
    variant: 'password',
    style: { width: 1160 },
  },
}
export const Search: Story = {
  args: {
    disabled: false,
    placeholder: 'Input search',
    variant: 'search',
    style: { width: 1120 },
  },
}
export const Error: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error',
    placeholder: 'Error',
    style: { width: 1190 },
  },
}

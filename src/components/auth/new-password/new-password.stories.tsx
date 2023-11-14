import type { Meta, StoryObj } from '@storybook/react'

import { NewPassword } from './'

const meta = {
  component: NewPassword,
  tags: ['autodocs'],
  title: 'Auth/NewPassword',
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: any) => console.info(data),
  },
}

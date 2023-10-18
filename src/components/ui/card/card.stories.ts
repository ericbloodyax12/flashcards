import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    layout: 'centered',
  },
}

export const LightTheme: Story = {
  args: {
    style: {
      backgroundColor: 'var(--color-dark-100)',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

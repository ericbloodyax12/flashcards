import type { Meta, StoryObj } from '@storybook/react'

import { LogOutIcon } from '@/assets/iconComponents/LogOutIcon'
import { Typography } from '@/components/ui/typography'

import { Button } from './'

const meta = {
  argTypes: {
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: Typography({ children: 'Button primary', variant: 'subtitle2' }),
    disabled: false,
    variant: 'primary',
  },
}

export const Primary2: Story = {
  args: {
    children: [LogOutIcon({}), Typography({ children: 'Button primary', variant: 'subtitle2' })],
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: Typography({ children: 'Secondary button', variant: 'subtitle2' }),
    disabled: false,
    variant: 'secondary',
  },
}

export const Secondary2: Story = {
  args: {
    children: [LogOutIcon({}), Typography({ children: 'Secondary button', variant: 'subtitle2' })],
    disabled: false,
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    children: Typography({ children: 'Tertiary button', variant: 'subtitle2' }),
    disabled: false,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    children: Typography({ children: 'Link-button', variant: 'subtitle1' }),
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: Typography({ children: 'Full width button', variant: 'subtitle2' }),
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: Typography({ children: 'Link that looks like a button', variant: 'subtitle2' }),
    href: 'https://www.google.com',
    variant: 'primary',
  },
}

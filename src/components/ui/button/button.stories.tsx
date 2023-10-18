import type { Meta, StoryObj } from '@storybook/react'

import { LogoutIcon } from '@/assets/iconComponents/logoutIcon'
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
    children: <Typography variant={'subtitle2'}>Button primary</Typography>,
    className: 's.button',
    disabled: false,
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Primary2: Story = {
  args: {
    children: (
      <>
        <LogoutIcon />
        <Typography variant={'subtitle2'}>Button primary</Typography>
      </>
    ),
    className: 's.button',
    disabled: false,
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Secondary: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>Button secondary</Typography>,
    className: 's.button',
    disabled: false,
    variant: 'secondary',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Secondary2: Story = {
  args: {
    children: (
      <>
        <LogoutIcon />
        <Typography variant={'subtitle2'}>Button secondary</Typography>
      </>
    ),
    className: 's.button',
    disabled: false,
    variant: 'secondary',
  },
  parameters: {
    layout: 'centered',
  },
}
export const Tertiary: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>Tertiary</Typography>,
    className: 's.button',
    disabled: false,
    variant: 'tertiary',
  },
  parameters: {
    layout: 'centered',
  },
}
export const Link: Story = {
  args: {
    children: <Typography variant={'subtitle1'}>Link-button</Typography>,
    className: 's.button',
    disabled: false,
    variant: 'link',
  },
  parameters: {
    layout: 'centered',
  },
}

export const FullWidth: Story = {
  args: {
    children: <Typography variant={'subtitle2'}>Full width button</Typography>,
    className: 's.button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: <Typography variant={'subtitle2'}>Link that looks like a button</Typography>,
    className: 's.button',
    href: 'https://www.google.com',
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
}

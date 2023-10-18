import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'subtitle1',
        'body2',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    as: 'h1',
    children: 'large title',
    variant: 'large',
  },
  parameters: {
    layout: 'centered',
  },
}

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'h1 title',
    variant: 'h1',
  },
  parameters: {
    layout: 'centered',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'h2 title',
    variant: 'h2',
  },
  parameters: {
    layout: 'centered',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'h3 title',
    variant: 'h3',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Body1: Story = {
  args: {
    children: 'body1 text',
    variant: 'body1',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Subtitle1: Story = {
  args: {
    as: 'h3',
    children: 'subtitle1 title',
    variant: 'subtitle1',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Body2: Story = {
  args: {
    children: 'body2 text',
    variant: 'body2',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Subtitle2: Story = {
  args: {
    as: 'h3',
    children: 'subtitle2 title',
    variant: 'subtitle2',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Caption: Story = {
  args: {
    children: 'caption text',
    variant: 'caption',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Overline: Story = {
  args: {
    children: 'overline text',
    variant: 'overline',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Link1: Story = {
  args: {
    as: 'a',
    children: 'link1 text',
    href: 'https://www.google.com',
    target: '_blank',
    variant: 'link1',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Link2: Story = {
  args: {
    as: 'a',
    children: 'link2 text',
    href: 'https://www.google.com',
    target: '_blank',
    variant: 'link2',
  },
  parameters: {
    layout: 'centered',
  },
}

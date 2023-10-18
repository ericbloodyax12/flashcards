import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const From_2_to_10: Story = {
  args: {
    max: 12,
    style: {
      height: 36,
      width: 251,
    },
    value: [2, 10],
  },
  parameters: { layout: 'centered' },
}

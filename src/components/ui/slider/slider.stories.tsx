import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './'

const size = {
  height: 36,
  width: 251,
}

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
    style: size,
    value: [2, 10],
  },
  parameters: { layout: 'centered' },
}

const Custom_range = () => {
  const [value, setValue] = useState([0, 100])

  return (
    <div>
      <Slider onValueChange={e => setValue(e)} style={size} value={value} />
    </div>
  )
}

export const Any_range: Story = {
  parameters: { layout: 'centered' },
  render: () => <Custom_range />,
}

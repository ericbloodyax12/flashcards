import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    options: [
      { label: 'RadioGroup1', value: 'RadioGroup1' },
      { label: 'RadioGroup2', value: 'RadioGroup2' },
      { label: 'RadioGroup3', value: 'RadioGroup3' },
    ],
  },
}

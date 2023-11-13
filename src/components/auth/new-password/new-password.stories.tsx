import type { Meta, StoryObj } from '@storybook/react'

import { NewPassword } from './'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: NewPassword,
  decorators: [withRouter],
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

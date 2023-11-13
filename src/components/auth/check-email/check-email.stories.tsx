import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: CheckEmail,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'your_email@domain.com',
  },
}

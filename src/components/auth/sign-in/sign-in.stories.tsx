import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: SignIn,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: any) => console.info(data),
  },
}

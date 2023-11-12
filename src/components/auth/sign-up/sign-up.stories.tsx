import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: SignUp,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Auth/Sign up',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: any) => console.info(data),
  },
}

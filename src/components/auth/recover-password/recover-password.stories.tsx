import type { Meta, StoryObj } from '@storybook/react'

import { RecoverPassword } from './'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: RecoverPassword,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Auth/RecoverPassword',
} satisfies Meta<typeof RecoverPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: (data: any) => console.info(data),
  },
}

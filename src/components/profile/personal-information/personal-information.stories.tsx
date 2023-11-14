import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './'
import ellipse from '@/assets/images/ellipse.png'

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Profile/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: ellipse,
    email: 'your_email@domain.com',
    name: 'John Doe',
    onAvatarChange: () => {
      console.info('avatar changed')
    },
    onLogout: () => {
      console.info('logout')
    },
    onNameChange: () => {
      console.info('name changed')
    },
  },
}

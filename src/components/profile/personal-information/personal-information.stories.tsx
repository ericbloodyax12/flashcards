import type { Meta } from '@storybook/react'

import { useState } from 'react'

import { PersonalInformation } from './'
import ellipse from '@/assets/images/ellipse.png'

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Profile/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta

export const Default = () => {
  const [nickname, setNickname] = useState('John Doe')
  const onAvatarChange = (newAvatar: File) => {
    console.info(`new avatar: ${newAvatar.name}`)
  }
  const onLogout = () => {
    console.info('log-out')
  }
  const onNameChange = (newName: string) => {
    setNickname(newName)
  }

  return (
    <PersonalInformation
      avatar={ellipse}
      email={'your_email@domain.com'}
      name={nickname}
      onAvatarChange={onAvatarChange}
      onLogout={onLogout}
      onNameChange={onNameChange}
    />
  )
}

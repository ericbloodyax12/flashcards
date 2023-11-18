import { Button } from '@/components/ui/button'
import { AvatarWithMenu } from '@/components/ui/dropDown/dropDown.stories.tsx'
import { Header } from '@/components/ui/header/header'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultHeader: Story = {
  render: () => {
    return (
      <Header>
        <Button>
          <Typography variant={'subtitle2'}>Sign In</Typography>
        </Button>
      </Header>
    )
  },
}

export const WithAvatar: Story = {
  render: () => {
    return (
      <Header>
        <Typography variant={'subtitle1'}>Ivan</Typography>
        <AvatarWithMenu />
      </Header>
    )
  },
}

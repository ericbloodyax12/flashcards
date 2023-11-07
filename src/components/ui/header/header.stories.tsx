import { Header } from '@/components/ui/header/header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    username: { type: 'string' },
  },
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultHeader: Story = {
  render: args => {
    return <Header {...args}></Header>
  },
}

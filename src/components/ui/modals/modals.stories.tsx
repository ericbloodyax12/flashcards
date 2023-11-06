import { Modal } from '@/components/ui/modals'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Modal',
    title: 'Modal',
  },
  render: args => {
    return (
      <Modal {...args} icon={<span>Open modal</span>}>
        <div style={{ padding: 24 }}>
          <Typography variant={'body1'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
          </Typography>
        </div>
      </Modal>
    )
  },
}

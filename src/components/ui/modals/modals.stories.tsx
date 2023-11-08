import { useState } from 'react'

import { CheckboxDefault } from '@/components/ui/checkbox/checkbox.stories'
import { Modal } from '@/components/ui/modals'
import { SelectDefault } from '@/components/ui/select/select.stories'
import { TextField } from '@/components/ui/textField'
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
      <Modal {...args} icon={<span>Open Modal</span>}>
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
export const WithRemoteControl: Story = {
  args: {
    children: 'Modal',
    title: 'Modal',
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    return (
      <>
        <span onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
          Open Modal
        </span>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 24,
              padding: 24,
            }}
          >
            <SelectDefault />
            <TextField label={'Input1'} />
            <TextField label={'Input2'} />
            <CheckboxDefault />
          </div>
        </Modal>
      </>
    )
  },
}

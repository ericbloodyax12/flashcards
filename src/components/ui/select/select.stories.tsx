import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography'

import { Select, SelectItem } from './'

import s from './select.stories.module.scss'
import { clsx } from 'clsx'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

const args = {
  disabled: false,
  options: [
    { label: 'Select-box1', value: 'Select-box1' },
    { label: 'Select-box2', value: 'Select-box2' },
    { label: 'Select-box3', value: 'Select-box3' },
  ],
  title: 'Select-box',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args,
}

export const Primary: Story = {
  args: { ...args, className: s.primary },
}

const select = clsx(s.customized, s.margin)
export const Customized = () => {
  return (
    <>
      <Select title={'Select-box'} className={select} defaultValue={args.options[0].value}>
        {args.options.map(option => (
          <SelectItem className={s.customized} key={option.value} value={option.value}>
            <Typography variant={'h2'}>{option.label}</Typography>
          </SelectItem>
        ))}
      </Select>
    </>
  )
}

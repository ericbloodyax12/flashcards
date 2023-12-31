import type { Meta, StoryObj } from '@storybook/react'

import { Select, SelectItem } from './'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './select.stories.module.scss'

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
  placeholder: 'Select',
  title: 'Select-box',
}

export default meta

type Story = StoryObj<typeof meta>

export const SelectDefault: Story = {
  args,
}

export const SelectPrimary: Story = {
  args: { ...args, className: s.primary },
}

const select = clsx(s.customized, s.margin)

export const SelectCustomized = () => {
  return (
    <>
      <Select className={select} defaultValue={args.options[0].value} title={'Select-box'}>
        {args.options.map(option => (
          <SelectItem className={s.customized} key={option.value} value={option.value}>
            <Typography variant={'h2'}>{option.label}</Typography>
          </SelectItem>
        ))}
      </Select>
    </>
  )
}

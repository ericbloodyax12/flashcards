import type { Meta } from '@storybook/react'

import React from 'react'

import { EditIcon } from '@/assets/icons/edit'
import { LogoutIcon } from '@/assets/icons/logout'
import { PersonIcon } from '@/assets/icons/person'
import { PlayIcon } from '@/assets/icons/play'
import { TrashIcon } from '@/assets/icons/trash'
import ellipse from '@/assets/images/ellipse.png'
import { Avatar } from '@/components/ui/avatar/avatar'
import { Typography } from '@/components/ui/typography'

import s from './dropDown.module.scss'

import { DropDown, DropDownItem } from './'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDown>

export default meta

export const AvatarMenu = () => {
  const options: React.ReactNode[] = []

  options.push(
    <DropDownItem>
      <Avatar src={ellipse} />
      <div className={s.column}>
        <Typography variant={'subtitle2'}>Ivan</Typography>
        <Typography className={s.mail} variant={'caption'}>
          j&johnson@gmail.com
        </Typography>
      </div>
    </DropDownItem>
  )
  options.push(
    <DropDownItem>
      <PersonIcon /> <Typography variant={'caption'}>My profile</Typography>
    </DropDownItem>
  )

  options.push(
    <DropDownItem>
      <LogoutIcon /> <Typography variant={'caption'}>Sign Out</Typography>
    </DropDownItem>
  )

  return <DropDown icon={<Avatar src={ellipse} />} options={options} />
}
export const CardMenu = () => {
  const options: React.ReactNode[] = []

  options.push(
    <DropDownItem>
      <PlayIcon /> <Typography variant={'caption'}>Learn</Typography>
    </DropDownItem>
  )
  options.push(
    <DropDownItem>
      <EditIcon /> <Typography variant={'caption'}>Edit</Typography>
    </DropDownItem>
  )
  options.push(
    <DropDownItem>
      <TrashIcon /> <Typography variant={'caption'}>Delete</Typography>
    </DropDownItem>
  )

  return (
    <>
      <DropDown
        icon={
          <span>
            <Typography>Card1</Typography>
          </span>
        }
        options={options}
      />
      <p />
      <DropDown
        icon={
          <span>
            <Typography>Card2</Typography>
          </span>
        }
        options={options}
      />
      <p />
      <DropDown
        icon={
          <span>
            <Typography>C3</Typography>
          </span>
        }
        options={options}
      />
    </>
  )
}

import type { Meta } from '@storybook/react'

import React from 'react'

import { EditIcon } from '@/assets/iconComponents/edit'
import { LogoutIcon } from '@/assets/iconComponents/logout'
import { PersonIcon } from '@/assets/iconComponents/person'
import { PlayIcon } from '@/assets/iconComponents/play'
import { TrashIcon } from '@/assets/iconComponents/trash'
import ellipse from '@/assets/images/ellipse.png'
import { Avatar } from '@/components/ui/avatar/avatar'
import { Typography } from '@/components/ui/typography'

import s from './dropDown.module.scss'

import { DropDown } from './'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDown>

export default meta

export const AvatarWithMenu = () => {
  const options: React.ReactNode[] = []

  options.push(
    <div className={s.item}>
      <Avatar src={ellipse} />
      <div className={s.column}>
        <Typography variant={'subtitle2'}>Ivan</Typography>
        <Typography className={s.mail} variant={'caption'}>
          j&johnson@gmail.com
        </Typography>
      </div>
    </div>
  )
  options.push(
    <div className={s.item}>
      <PersonIcon /> <Typography variant={'caption'}>My profile</Typography>
    </div>
  )

  options.push(
    <div className={s.item}>
      <LogoutIcon /> <Typography variant={'caption'}>Sign Out</Typography>
    </div>
  )

  return <DropDown icon={<Avatar src={ellipse} />} options={options} />
}
export const CardWithMenu = () => {
  const options: React.ReactNode[] = []

  options.push(
    <div className={s.item}>
      <PlayIcon /> <Typography variant={'caption'}>Learn</Typography>
    </div>
  )
  options.push(
    <div className={s.item}>
      <EditIcon /> <Typography variant={'caption'}>Edit</Typography>
    </div>
  )
  options.push(
    <div className={s.item}>
      <TrashIcon /> <Typography variant={'caption'}>Delete</Typography>
    </div>
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

import type { Meta } from '@storybook/react'

import EditIcon from '@/assets/icons/edit'
import LogoutIcon from '@/assets/icons/logout'
import PersonIcon from '@/assets/icons/person'
import PlayIcon from '@/assets/icons/play'
import TrashIcon from '@/assets/icons/trash'
import ellipse from '@/assets/images/ellipse.png'
import { Avatar } from '@/components/ui/avatar/avatar'
import { Typography } from '@/components/ui/typography'

import s from './dropDown.module.scss'

import { DropDown, Option } from './'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDown>

export default meta

export const AvatarWithMenu = () => {
  const options: Option[] = [
    {
      icon: <Avatar src={ellipse} />,
      jsx: (
        <div className={s.column}>
          <Typography variant={'subtitle2'}>Ivan</Typography>
          <Typography className={s.mail} variant={'caption'}>
            j&johnson@gmail.com
          </Typography>
        </div>
      ),
    },
    {
      icon: <PersonIcon />,
      jsx: <Typography variant={'caption'}>My profile</Typography>,
    },
    {
      icon: <LogoutIcon />,
      jsx: <Typography variant={'caption'}>Sign Out</Typography>,
    },
  ]

  return <DropDown icon={<Avatar src={ellipse} />} options={options} />
}
export const CardWithMenu = () => {
  const options: Option[] = [
    {
      icon: <PlayIcon />,
      jsx: <Typography variant={'caption'}>Learn</Typography>,
    },
    {
      icon: <EditIcon />,
      jsx: <Typography variant={'caption'}>Edit</Typography>,
    },
    {
      icon: <TrashIcon />,
      jsx: <Typography variant={'caption'}>Delete</Typography>,
    },
  ]

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

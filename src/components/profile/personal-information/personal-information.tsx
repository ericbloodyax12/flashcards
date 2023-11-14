import LogoutIcon from '@/assets/icons/logout'
import Camera from '@/assets/icons/camera'
import Edit from '@/assets/icons/edit'
import { Avatar } from '@/components/ui/avatar/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './personal-information.module.scss'

type Props = {
  avatar: string
  email: string
  name: string
  onAvatarChange: (newAvatar: string) => void
  onLogout: () => void
  onNameChange: (newName: string) => void
}
export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onLogout,
  onNameChange,
}: Props) => {
  const avatarChangeHandler = () => {
    onAvatarChange('new avatar')
  }
  const nameChangeHandler = () => {
    onNameChange('mew name')
  }
  const logoutHandler = () => {
    onLogout()
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.form}>
        <div className={s.photoContainer}>
          <Avatar src={avatar} variant={'large'} />
          <button className={s.editAvatarButton} onClick={avatarChangeHandler}>
            <Camera />
          </button>
        </div>
        <div className={s.nameContainer}>
          <Typography className={s.name} variant={'h1'}>
            {name}
          </Typography>
          <button className={s.editNameButton} onClick={nameChangeHandler}>
            <Edit />
          </button>
        </div>
        <Typography className={s.email} variant={'body2'}>
          {email}
        </Typography>
        <div className={s.button}>
          <Button onClick={logoutHandler} variant={'secondary'}>
            <LogoutIcon />
            Logout
          </Button>
        </div>
      </div>
    </Card>
  )
}

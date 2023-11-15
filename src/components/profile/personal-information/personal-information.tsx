import { ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import LogoutIcon from '@/assets/icons/logout'
import Camera from '@/assets/icons/camera'
import Edit from '@/assets/icons/edit'
import { Avatar } from '@/components/ui/avatar/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './personal-information.module.scss'

type Props = {
  avatar: string
  email: string
  name: string
  onAvatarChange: (newAvatar: File) => void
  onLogout: () => void
  onNameChange: (newName: string) => void
}
const loginSchema = z.object({
  nickname: z.string().min(1, { message: 'Enter nickname' }),
})

type FormValues = z.infer<typeof loginSchema>
export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onLogout,
  onNameChange,
}: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      nickname: name,
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })
  const avatarChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onAvatarChange(e.target.files[0])
    }
  }
  const logoutHandler = () => {
    onLogout()
  }

  const onSubmit = (data: FormValues) => {
    onNameChange(data.nickname)
    setEditMode(false)
  }

  const [editMode, setEditMode] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClick() {
    inputRef && inputRef.current?.click()
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.photoContainer}>
          <Avatar src={avatar} variant={'large'} />
          {!editMode && (
            <>
              <input
                accept={'image/*'}
                className={s.changePhotoInput}
                onChange={avatarChangeHandler}
                ref={inputRef}
                type={'file'}
              />
              <div className={s.editAvatarButton} onClick={handleClick}>
                <Camera />
              </div>
            </>
          )}
        </div>
        <div className={!editMode ? s.nameContainer : s.textField}>
          {!editMode ? (
            <>
              <Typography className={s.name} variant={'h1'}>
                {name}
              </Typography>
              <div className={s.editNameButton} onClick={() => setEditMode(true)}>
                <Edit />
              </div>
            </>
          ) : (
            <ControlledTextField
              autoComplete={'on'}
              control={control}
              defaultValue={name}
              label={'Nickname'}
              location={'fixed'}
              name={'nickname'}
            />
          )}
        </div>
        {!editMode && (
          <Typography className={s.email} variant={'body2'}>
            {email}
          </Typography>
        )}
        <div className={editMode ? s.saveButton : s.button}>
          {!editMode ? (
            <Button onClick={logoutHandler} type={'button'} variant={'secondary'}>
              <LogoutIcon />
              Logout
            </Button>
          ) : (
            <Button fullWidth type={'submit'} variant={'primary'}>
              Save Changes
            </Button>
          )}
        </div>
      </form>
    </Card>
  )
}

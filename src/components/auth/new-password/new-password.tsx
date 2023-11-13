import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './new-password.module.scss'

const loginSchema = z.object({
  password: z
    .string()
    .min(1, { message: 'Enter password' })
    .min(3, { message: 'Too short password' }),
})

type FormValues = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormValues) => void
}
export const NewPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => props.onSubmit(data)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Create new password
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <ControlledTextField
            autoComplete={'off'}
            control={control}
            label={'Password'}
            location={'fixed'}
            name={'password'}
            placeholder={'Password'}
            variant={'password'}
          />
          <Typography className={s.text} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Create New Password
          </Button>
        </form>
      </Card>
    </>
  )
}

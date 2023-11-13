import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '../../ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './recover-password.module.scss'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
})

type FormValues = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: Omit<FormValues, 'confirm'>) => void
}
export const RecoverPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
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
          Forgot your password?
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <ControlledTextField
            autoComplete={'on'}
            control={control}
            label={'Email'}
            location={'fixed'}
            name={'email'}
            placeholder={'Email'}
          />
          <Typography className={s.text} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Send Instructions
          </Button>
          <Typography className={s.text2} variant={'body2'}>
            Did you remember your password?
          </Typography>
          <Typography as={Link} className={s.signInLink} to={'./sign-in'} variant={'link1'}>
            Try logging in
          </Typography>
        </form>
      </Card>
    </>
  )
}

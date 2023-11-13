import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '../../ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

const loginSchema = z.object({
  email: z.string().min(1, { message: 'Enter email' }).email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(1, { message: 'Enter password' })
    .min(3, { message: 'Too short password' }),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormValues) => void
}
export const SignIn = (props: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
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
          Sign Up
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <ControlledTextField
            control={control}
            label={'Email'}
            location={'fixed'}
            name={'email'}
            placeholder={'Email'}
          />
          <ControlledTextField
            control={control}
            label={'Password'}
            location={'fixed'}
            name={'password'}
            placeholder={'Password'}
            variant={'password'}
          />
          <ControlledCheckbox
            className={s.checkBox}
            control={control}
            label={'Remember me'}
            name={'rememberMe'}
            position={'left'}
          />
          <Typography as={Link} className={s.recover} to={'/recover-password'} variant={'body2'}>
            Forgot Password?
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign Up
          </Button>
          <Typography className={s.text} variant={'body2'}>
            {"Don't have an account?"}
          </Typography>
          <Typography as={Link} className={s.signInLink} to={'./sign-up'} variant={'link1'}>
            Sign Up
          </Typography>
        </form>
      </Card>
    </>
  )
}

import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '../../ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { omit } from 'remeda'
import { z } from 'zod'

import s from './sign-up.module.scss'

const loginSchema = z
  .object({
    confirm: z.string().min(1, { message: 'Confirm your password' }),
    email: z.string().email({ message: 'Invalid email' }),
    password: z.string().min(3, { message: 'Too short password' }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirm'],
      })
    }
  })

type FormValues = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: Omit<FormValues, 'confirm'>) => void
}
export const SignUp = (props: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirm: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => props.onSubmit(omit(data, ['confirm']))

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
          <ControlledTextField
            control={control}
            label={'Confirm Password'}
            location={'fixed'}
            name={'confirm'}
            placeholder={'Confirm Password'}
            variant={'password'}
          />

          <Button className={s.button} fullWidth type={'submit'}>
            Sign Up
          </Button>
          <Typography className={s.text} variant={'body2'}>
            Already have an account?
          </Typography>
          <Typography as={Link} className={s.signInLink} to={'./sign-in'} variant={'link1'}>
            Sign In
          </Typography>
        </form>
      </Card>
    </>
  )
}

import { Link } from 'react-router-dom'

import { Button } from '../../ui/button'
import Email from '@/assets/icons/email'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

type Props = {
  email: string
}
export const CheckEmail = ({ email }: Props) => {
  const message = `We've sent an e-mail with instructions to ${email}`

  return (
    <>
      <Card className={s.card}>
        <div className={s.form}>
          <Typography className={s.title} variant={'large'}>
            Check Email
          </Typography>
          <div className={s.icon}>
            <Email />
          </div>
          <Typography className={s.text} variant={'body2'}>
            {message}
          </Typography>
          <Button as={Link} className={s.button} fullWidth to={'/sing-in'}>
            Back to Sign In
          </Button>
        </div>
      </Card>
    </>
  )
}

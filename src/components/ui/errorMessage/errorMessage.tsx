import { Typography } from '@/components/ui/typography'

import s from './errorMessage.module.scss'
import clsx from 'clsx'
type Props = {
  error: string | undefined
  position?: 'left' | 'right'
}

export const ErrorMessage = (props: Props) => {
  const { error, position = 'right' } = props
  const message = clsx(s.error, position === 'left' && s.position)

  return (
    error && (
      <Typography className={message} variant={'caption'}>
        {error}
      </Typography>
    )
  )
}

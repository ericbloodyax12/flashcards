import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './errorMessage.module.scss'
type Props = {
  error: string | undefined
  position?: 'left' | 'right'
} & ComponentPropsWithoutRef<typeof Typography>

export const ErrorMessage = (props: Props) => {
  const { className, error, position = 'right' } = props
  const message = clsx(s.error, position === 'left' && s.position, className)

  return (
    error && (
      <Typography className={message} variant={'caption'}>
        {error}
      </Typography>
    )
  )
}

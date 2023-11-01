import { Typography } from '@/components/ui/typography'

import s from './errorMessage.module.scss'

export const ErrorMessage = (props: { error: string | undefined }) => {
  const { error } = props

  return (
    error && (
      <Typography className={s.error} variant={'caption'}>
        {error}
      </Typography>
    )
  )
}

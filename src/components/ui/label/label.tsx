import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './label.module.scss'
type Props = {
  label: string | undefined
} & ComponentPropsWithoutRef<typeof Typography>

export const Label = (props: Props) => {
  const { className, label } = props
  const classLabel = clsx(s.label, className)

  return (
    label && (
      <Typography as={'label'} className={classLabel} htmlFor={label} variant={'body2'}>
        {label}
      </Typography>
    )
  )
}

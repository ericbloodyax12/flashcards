import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type AvatarProps = {
  src: string
  variant?: 'large' | 'small'
} & ComponentPropsWithoutRef<'img'>

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  const { variant = 'small', ...rest } = props
  const avatar = clsx(s.avatar, s[variant])

  return (
    <span className={avatar}>
      <img alt={'avatar'} className={avatar} ref={ref} {...rest} />
    </span>
  )
})

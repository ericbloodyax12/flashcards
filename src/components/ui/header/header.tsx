import { FC, forwardRef } from 'react'

import logo from '@/assets/images/Logo.svg'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'
export type Props = {
  className?: string
  username?: string
}
export const Header: FC<Props> = forwardRef<HTMLHeadElement, Props>(
  ({ className, username }, ref) => {
    return (
      <header className={`${s.header} ${className ? className : ''}`} ref={ref}>
        <div className={`container ${s.wrapper}`}>
          <a className={s.logo} href={'#'}>
            <img alt={'logo'} height={36} src={logo} width={156} />
          </a>
          {username ? (
            <span className={s.userInfo}>
              {username && (
                <Typography as={'span'} className={s.username} variant={'subtitle1'}>
                  {username}
                </Typography>
              )}
            </span>
          ) : (
            <Button>{'Sign In'}</Button>
          )}
        </div>
      </header>
    )
  }
)

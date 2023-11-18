import { ComponentPropsWithoutRef, FC, forwardRef } from 'react'

import logo from '@/assets/images/logo.svg'
import { clsx } from 'clsx'

import s from './header.module.scss'
export type HeaderProps = ComponentPropsWithoutRef<'header'>

export const Header: FC<HeaderProps> = forwardRef<HTMLHeadElement, HeaderProps>(
  ({ children, className }, ref) => {
    const header = clsx(s.header, className && className)

    return (
      <header className={header} ref={ref}>
        <div className={s.container}>
          <a className={s.logo} href={'https://it-incubator.io/'}>
            <img alt={'logo'} height={36} src={logo} />
          </a>
          <div className={s.children}>{children}</div>
        </div>
      </header>
    )
  }
)

import React, { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'

import CloseIcon from '@/assets/icons/close'
import { Typography } from '@/components/ui/typography'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import s from './modals.module.scss'

export type ModalProps = {
  children: ReactNode
  icon?: ReactNode
  title?: string
} & ComponentPropsWithoutRef<typeof DialogPrimitive.Dialog>
export const Modal = React.forwardRef<ElementRef<typeof DialogPrimitive.Trigger>, ModalProps>(
  (props: ModalProps, ref) => {
    const { children, icon, title, ...rest } = props

    return (
      <DialogPrimitive.Root {...rest}>
        <DialogPrimitive.Trigger asChild className={s.trigger} ref={ref}>
          {icon}
        </DialogPrimitive.Trigger>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className={s.overlay} />
          <DialogPrimitive.Content className={s.content}>
            <div className={s.header}>
              <DialogPrimitive.Title asChild>
                <Typography as={'h2'} variant={'h2'}>
                  {title}
                </Typography>
              </DialogPrimitive.Title>
              <DialogPrimitive.Close className={s.closeButton}>
                <CloseIcon />
              </DialogPrimitive.Close>
            </div>
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    )
  }
)

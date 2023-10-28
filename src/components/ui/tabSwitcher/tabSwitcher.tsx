import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabSwither.module.scss'

type TabSwitcherRadix = ComponentPropsWithoutRef<typeof Tabs.Root> & {}

export const TabSwitcher = React.forwardRef<ElementRef<typeof Tabs.Trigger>, TabSwitcherRadix>(
  (props, ref) => {
    console.log(props, ref)

    return (
      <Tabs.Root className={s.tabsRoot} defaultValue={'tab1'}>
        <Tabs.List aria-label={'Manage your account'} className={s.TabsList}>
          <Tabs.Trigger className={s.TabsTrigger} value={'tab1'}>
            Account
          </Tabs.Trigger>
          <Tabs.Trigger className={s.TabsTrigger} value={'tab2'}>
            Password
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    )
  }
)

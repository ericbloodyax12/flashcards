import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from 'react'

import { Typography, TypographyProps } from '@/components/ui/typography'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'
export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value'> & {
    fontVariant?: TypographyProps['variant']
    value?: number[] | undefined
  }
>(({ className, fontVariant = 'body1', max, onValueChange, value, ...props }, ref) => {
  useEffect(() => {
    if (value?.[1] === undefined || value?.[1] === null) {
      onValueChange?.([value?.[0] ?? 0, max ?? 0])
    }
  }, [max, value, onValueChange])

  return (
    <div className={s.container}>
      <span className={s.value}>
        <Typography variant={fontVariant}>{value?.[0]}</Typography>
      </span>
      <SliderPrimitive.Slider
        className={clsx(s.root, className)}
        max={max}
        onValueChange={onValueChange}
        ref={ref}
        {...props}
        value={[value?.[0] ?? 0, value?.[1] ?? max ?? 0]}
      >
        <SliderPrimitive.Track className={s.track}>
          <SliderPrimitive.Range className={s.range} style={{ opacity: 1 }} />
        </SliderPrimitive.Track>
        {value?.map((_, i) => <SliderPrimitive.Thumb className={s.thumb} key={i} />)}
      </SliderPrimitive.Slider>
      <span className={s.value}>
        <Typography variant={fontVariant}>{value?.[1]}</Typography>
      </span>
    </div>
  )
})

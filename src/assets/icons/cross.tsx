import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & {
    cleanSearchHandler: any
    disabled: boolean | undefined
  },
  ref: Ref<SVGSVGElement>
) => {
  const { cleanSearchHandler, disabled } = props

  return (
    <svg
      fill={'none'}
      height={16}
      onClick={cleanSearchHandler}
      ref={ref}
      style={disabled ? { cursor: 'default' } : undefined}
      width={16}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'm8.941 8 2.868-2.86a.671.671 0 0 0-.95-.949L8 7.06 5.14 4.19a.671.671 0 0 0-.949.95L7.06 8 4.19 10.86a.689.689 0 0 0-.195.472.689.689 0 0 0 .195.477c.063.058.137.109.22.144.081.035.167.05.257.05a.627.627 0 0 0 .254-.05.761.761 0 0 0 .219-.144L8 8.94l2.86 2.868c.062.058.136.109.218.144.078.035.168.05.254.05.09 0 .176-.015.258-.05a.761.761 0 0 0 .219-.144.761.761 0 0 0 .144-.22.646.646 0 0 0 .05-.257.627.627 0 0 0-.05-.254.761.761 0 0 0-.144-.219Zm0 0'
        }
        fill={disabled ? 'var(--color-dark-300)' : undefined}
      />
    </svg>
  )
}

export default memo(forwardRef(SvgComponent))

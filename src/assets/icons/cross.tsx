import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & {
    cleanSearchHandler: () => void
    disabled: boolean | undefined
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'none'}
    height={24}
    onClick={props.cleanSearchHandler}
    ref={ref}
    width={24}
    style={props.disabled ? { cursor: 'default' } : undefined}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'm13.41 12 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4.29-4.3 4.29 4.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L13.41 12Z'
      }
      fill={props.disabled ? 'var(--color-dark-300)' : 'var(--color-dark-100)'}
    />
  </svg>
)

export default memo(forwardRef(SvgComponent))

import { SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height={1} width={48} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <title>{'Rectangle 5'}</title>
    <path d={'M0 0h48v1H0z'} fill={'#063855'} fillRule={'evenodd'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const Logout = memo(ForwardRef)

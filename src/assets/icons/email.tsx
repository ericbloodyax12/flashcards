import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={96}
    ref={ref}
    viewBox={'0 0 96 96'}
    width={96}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M95.5 48c0 26.234-21.266 47.5-47.5 47.5C21.767 95.5.5 74.234.5 48 .5 21.767 21.767.5 48 .5 74.234.5 95.5 21.767 95.5 48z'
      }
      fill={'#8C61FF'}
      fillOpacity={0.05}
      stroke={'#BEA6FF'}
    />
    <path
      d={
        'M77.889 54.454a.651.651 0 0 1-.643-.643v-9.24a.643.643 0 0 1 1.285 0v9.25a.643.643 0 0 1-.641.633zM77.889 41.777a.643.643 0 0 1-.643-.643V39.24a.643.643 0 0 1 1.285 0v1.903a.634.634 0 0 1-.641.634zM25.786 32.503h-3.559a.668.668 0 0 1 0-1.335h3.56a.667.667 0 0 1 0 1.335z'
      }
      fill={'#BEA6FF'}
    />
    <path
      d={
        'M24.007 34.282a.668.668 0 0 1-.667-.667v-3.559a.668.668 0 0 1 1.335 0v3.56c0 .367-.3.666-.668.666zM36.857 73.714a.857.857 0 1 1 0 1.715.857.857 0 0 1 0-1.715zM31.714 73.714a.857.857 0 1 1 0 1.715.857.857 0 0 1 0-1.715zM26.571 73.714a.857.857 0 1 1 0 1.715.857.857 0 0 1 0-1.715z'
      }
      fill={'#BEA6FF'}
    />
    <path d={'M47.864 23.242l-24.1 19.799 24.1 19.808 24.1-19.808-24.1-19.8z'} fill={'#333'} />
    <path
      d={
        'M47.865 63.544a.667.667 0 0 1-.417-.195l-24.1-19.808a.698.698 0 0 1-.183-.833.725.725 0 0 1 .183-.242l24.1-19.799a.695.695 0 0 1 .926 0l24.1 19.799a.725.725 0 0 1 .25.537.695.695 0 0 1-.25.538l-24.1 19.808a.668.668 0 0 1-.51.195zM24.859 43.04l23.006 18.91L70.87 43.04l-23.006-18.9-23.006 18.9z'
      }
      fill={'#BEA6FF'}
    />
    <path d={'M65.013 28.803H30.717v40.784h34.296V28.803z'} fill={'#333'} />
    <path d={'M55.41 40.853l-11.716 9.63v19.104h21.319V40.853H55.41z'} fill={'#333'} />
    <path
      d={
        'M65.059 70.282H30.763a.704.704 0 0 1-.695-.695V28.803a.695.695 0 0 1 .695-.677H65.06a.695.695 0 0 1 .695.696v40.784a.705.705 0 0 1-.695.676zM31.412 68.91h32.905V29.517H31.412V68.91z'
      }
      fill={'#BEA6FF'}
    />
    <path
      d={
        'M58.987 35.06H48.17a.695.695 0 0 1 0-1.39h10.817a.696.696 0 0 1 0 1.39zM44.463 35.06h-7.721a.696.696 0 0 1 0-1.39h7.72a.696.696 0 0 1 0 1.39zM58.987 39.694h-7.11a.695.695 0 0 1 0-1.39h7.11a.695.695 0 1 1 0 1.39zM48.17 39.694H36.742a.695.695 0 0 1 0-1.39H48.17a.695.695 0 1 1 0 1.39zM58.988 44.329H46.317a.696.696 0 0 1 0-1.39h12.67a.696.696 0 0 1 0 1.39zM42.609 44.329h-5.867a.696.696 0 0 1 0-1.39h5.867a.696.696 0 0 1 0 1.39zM58.987 48.964h-6.182a.695.695 0 0 1 0-1.39h6.182a.695.695 0 1 1 0 1.39zM49.097 48.964H36.742a.695.695 0 0 1 0-1.39h12.355a.695.695 0 1 1 0 1.39zM54.047 53.598H41.682a.695.695 0 1 1 0-1.39h12.365a.695.695 0 1 1 0 1.39z'
      }
      fill={'#BEA6FF'}
    />
    <path
      d={
        'M23.765 43.04v26.547l16.147-13.273L23.765 43.04zM55.818 56.314l16.146 13.273V43.04L55.818 56.315z'
      }
      fill={'#333'}
    />
    <path
      d={'M47.864 62.849l-7.952-6.535-16.147 13.273h48.2L55.816 56.314l-7.953 6.535z'}
      fill={'#333'}
    />
    <path
      d={
        'M28.4 50.493v15.284l9.297-7.637-9.297-7.647zM63.196 57.88l8.768 7.212V50.678l-8.768 7.202z'
      }
      fill={'#333'}
    />
    <path
      d={
        'M23.765 70.282a.67.67 0 0 1-.296-.074.686.686 0 0 1-.399-.62V43.04a.685.685 0 0 1 .399-.62.695.695 0 0 1 .741.083l16.147 13.273a.704.704 0 0 1 0 1.075L24.21 70.115a.686.686 0 0 1-.445.167zm.695-25.768v23.6l14.358-11.8-14.358-11.8z'
      }
      fill={'#BEA6FF'}
    />
    <path
      d={'M60.424 60.095l-10.15 8.343-7.08-5.821-8.473 6.97h37.243l-11.54-9.492z'}
      fill={'#333'}
    />
    <path
      d={
        'M71.964 70.282a.686.686 0 0 1-.445-.167L55.373 56.861a.703.703 0 0 1 0-1.076l16.174-13.282a.696.696 0 0 1 .742-.084.687.687 0 0 1 .398.621v26.547a.686.686 0 0 1-.398.621.668.668 0 0 1-.325.074zM56.911 56.314l14.358 11.8v-23.6l-14.358 11.8z'
      }
      fill={'#BEA6FF'}
    />
    <path
      d={
        'M71.964 70.282h-48.2a.704.704 0 0 1-.657-.463.705.705 0 0 1 .213-.77l16.147-13.273a.695.695 0 0 1 .927 0l7.508 6.173 7.508-6.174a.695.695 0 0 1 .927 0L72.483 69.05a.705.705 0 0 1 .213.77.704.704 0 0 1-.732.463zm-46.262-1.371h44.325L55.79 57.212l-7.508 6.173a.695.695 0 0 1-.927 0l-7.508-6.173L25.702 68.91zM46.358 75.36h-3.56a.668.668 0 0 1 0-1.335h3.56a.668.668 0 0 1 0 1.335z'
      }
      fill={'#BEA6FF'}
    />
    <path
      d={
        'M44.579 77.14a.668.668 0 0 1-.668-.668v-3.559a.668.668 0 0 1 1.335 0v3.56a.667.667 0 0 1-.667.666z'
      }
      fill={'#BEA6FF'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)

import type { Preview } from '@storybook/react'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/sign-in' },
    }),
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview

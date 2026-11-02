import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'DigiConsent Design System',
    colorPrimary: '#2563eb',
    colorSecondary: '#2563eb',
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#e6eaf2',
    appBorderRadius: 8,
    textColor: '#0b1a33',
    barSelectedColor: '#2563eb',
    fontBase: 'Inter, -apple-system, sans-serif',
    fontCode: '"JetBrains Mono", monospace',
  }),
})

import { setup, type Preview } from '@storybook/vue3-vite'
import '@/tokens.css'

// Every design-system component is registered globally so story templates stay short.
const modules = import.meta.glob('../src/components/**/*.vue', { eager: true }) as Record<string, { default: object }>

setup((app) => {
  for (const [path, mod] of Object.entries(modules)) {
    const name = path.split('/').pop()!.replace('.vue', '')
    app.component(name, mod.default)
  }
})

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: { expanded: true, sort: 'requiredFirst' },
    backgrounds: {
      options: {
        page: { name: 'Page', value: '#f4f6fa' },
        surface: { name: 'Surface', value: '#ffffff' },
        navy: { name: 'Navy', value: '#0b1a33' },
      },
    },
    options: {
      storySort: {
        order: [
          'Getting Started',
          'Foundations', ['Colors', 'Typography', 'Spacing', 'Radius', 'Elevation', 'Motion', 'Icons', 'Logo', 'Content', 'Accessibility'],
          'Actions',
          'Forms',
          'Data Display',
          'Charts',
          'Navigation',
          'Feedback',
          'Overlays',
          'Data',
          'Consent Patterns',
          'Mobile',
          'Screens',
        ],
      },
    },
  },
  initialGlobals: { backgrounds: { value: 'surface' } },
}

export default preview

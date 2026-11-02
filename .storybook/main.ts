import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.ts'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: { name: '@storybook/vue3-vite', options: {} },
  features: { sidebarOnboardingChecklist: false },
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
}

export default config

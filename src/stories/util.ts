import * as fx from '@/data/fixtures'

// Builds a story from a template string and shows that same template as the copyable docs snippet.
// `fx` (sample data) is available in every template.
export function t(template: string, setup?: () => Record<string, unknown>, extra: Record<string, unknown> = {}) {
  return {
    render: (args: Record<string, unknown>) => ({
      setup: () => ({ args, fx, ...(setup ? setup() : {}) }),
      template,
    }),
    parameters: { docs: { source: { code: template.trim(), language: 'html' } } },
    ...extra,
  }
}

// Full-bleed story for screens.
export const screen = (template: string, setup?: () => Record<string, unknown>) =>
  t(template, setup, { parameters: { layout: 'fullscreen', docs: { source: { code: template.trim(), language: 'html' } } } })

// Playground story bound to the component's controls.
export function play(tag: string, args: Record<string, unknown>, slot = '') {
  return {
    args,
    render: (a: Record<string, unknown>) => ({
      setup: () => ({ a, fx }),
      template: `<${tag} v-bind="a">${slot}</${tag}>`,
    }),
  }
}

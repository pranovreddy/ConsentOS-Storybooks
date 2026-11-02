import { createApp } from 'vue'
import './share.css'
import App from './App.vue'

const app = createApp(App)
const modules = import.meta.glob('../components/**/*.vue', { eager: true }) as Record<string, { default: object }>
for (const [path, mod] of Object.entries(modules)) app.component(path.split('/').pop()!.replace('.vue', ''), mod.default)
app.mount('#app')

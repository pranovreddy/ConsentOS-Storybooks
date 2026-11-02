import C from '@/components/navigation/Stepper.vue'
import { t } from '../util'
export default { title: 'Navigation/Stepper', component: C, tags: ['autodocs'] }
export const States = t(`<div class="flex max-w-3xl flex-col gap-6"><Stepper :steps="fx.migrationSteps" :current="0" /><Stepper :steps="fx.migrationSteps" :current="2" /><Stepper :steps="fx.migrationSteps" :current="4" /><Stepper :steps="fx.migrationSteps" :current="1" :error-step="1" /></div>`)


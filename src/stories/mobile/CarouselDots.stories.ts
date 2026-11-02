import C from '@/components/mobile/CarouselDots.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Mobile/CarouselDots', component: C, tags: ['autodocs'] }
export const Default = t(`<CarouselDots v-model="v" :count="4" />`, () => ({ v: ref(0) }))


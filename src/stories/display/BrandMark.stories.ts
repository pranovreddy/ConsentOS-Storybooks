import C from '@/components/display/BrandMark.vue'
import { t } from '../util'
export default { title: 'Data Display/BrandMark', component: C, tags: ['autodocs'] }
export const Tiles = t(`<div class="flex items-center gap-3"><BrandMark name="BSNL" color="#e03939" size="lg" /><BrandMark name="Jio" size="lg" /><BrandMark name="Vodafone Idea" color="#7836e8" size="lg" /><BrandMark name="HDFC" size="sm" /></div>`)
export const Circle = t(`<div class="flex items-center gap-3"><BrandMark name="HDFC Bank" color="#d9232e" shape="circle" /><BrandMark name="Swiggy" color="#fc5a12" shape="circle" /></div>`)


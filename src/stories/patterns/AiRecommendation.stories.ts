import C from '@/components/admin/AiRecommendation.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/AiRecommendation', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-sm"><AiRecommendation action="Approve" :confidence="86" :reasons="['Clean DLT history for 3 years', 'KYC matches registered entity', '3 similar cases were approved']" /></div>`)


import C from '@/components/admin/AuthCard.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/AuthCard', component: C, tags: ['autodocs'] }
export const SignIn = t(`<AuthCard title="Sign in" description="Use your work email."><FormField label="Email"><TextInput icon="mail" aria-label="Email" /></FormField><FormField label="Password"><PasswordInput /></FormField><Button block>Continue</Button><template #footer><LinkArrow size="sm" :arrow="false">Forgot password?</LinkArrow></template></AuthCard>`)
export const Mfa = t(`<AuthCard title="Enter your code" description="From your authenticator app."><OtpInput /><Button block>Verify</Button></AuthCard>`)


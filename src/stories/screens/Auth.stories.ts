import { screen } from '../util'
export default { title: 'Screens/Sign In' }
export const SignIn = screen(`
<div class="flex min-h-screen items-center justify-center bg-page p-6">
  <AuthCard title="Sign in" description="Use your work email to continue.">
    <FormField label="Email"><TextInput icon="mail" placeholder="name@company.com" aria-label="Email" /></FormField>
    <FormField label="Password"><PasswordInput /></FormField>
    <Button block size="lg">Continue</Button>
    <template #footer><LinkArrow size="sm" :arrow="false">Forgot password?</LinkArrow></template>
  </AuthCard>
</div>`)

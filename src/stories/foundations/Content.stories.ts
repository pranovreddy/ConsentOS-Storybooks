import { t } from '../util'
export default { title: 'Foundations/Content' }
export const VoiceAndTone = t(`
<div class="grid max-w-4xl gap-4 md:grid-cols-2">
  <Card title="Admin products" icon="building"><ul class="flex list-disc flex-col gap-2 pl-4 text-[13px] text-gray-700">
    <li>State the count first, then what it means: "351 errors need offline fixes".</li>
    <li>Say what will happen before a commit: "69,000 records will proceed".</li>
    <li>Errors give what, why and next step. Never blame the user.</li>
    <li>Use regulator terms exactly: DLT, PEID, LOB, TCCCPR.</li>
  </ul></Card>
  <Card title="Subscriber app" icon="wallet"><ul class="flex list-disc flex-col gap-2 pl-4 text-[13px] text-gray-700">
    <li>Plain words, easy to translate into Indian languages.</li>
    <li>Say what the person gets: "Choose days, times, and how often brands can reach you."</li>
    <li>Never hide or discourage opting out. The toggle works equally both ways.</li>
    <li>No legal or telecom jargon.</li>
  </ul></Card>
</div>`)
export const ErrorMessages = t(`
<div class="flex max-w-2xl flex-col gap-3">
  <Alert tone="danger" title="This file couldn't be validated">Row 412 has a 9-digit mobile number, and the column must have 10 digits. Download the error file, correct the row, and upload it again.<template #actions><Button size="sm" variant="secondary" icon="download">Download errors</Button></template></Alert>
  <Alert tone="warning" title="Your session ends in 2 minutes">Your draft is saved. Extend the session to keep working.<template #actions><Button size="sm" variant="secondary">Stay signed in</Button></template></Alert>
</div>`)


<script setup lang="ts">
/** Card holding a visual and job status, with a "safe to leave" footer. Default slot is the status; `#art` is the visual. */
</script>

<template>
  <section class="overflow-hidden rounded-xl bg-[#e4e8f0]">
    <div class="grid items-center gap-8 rounded-xl border border-line bg-surface p-6 lg:grid-cols-2">
      <div><slot name="art" /></div>
      <div><slot /></div>
    </div>
    <p v-if="$slots.footer" class="px-5 py-3.5 text-center text-[13px] text-ink"><slot name="footer" /></p>
  </section>
</template>

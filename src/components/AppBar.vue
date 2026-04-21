<script setup>
import { useRouter, useRoute } from 'vue-router'
import PillButton from './PillButton.vue'

defineProps({
  title: { type: String, default: '扑克专区' },
  showActions: { type: Boolean, default: true },
})
const emit = defineEmits(['back'])

const router = useRouter()
const route = useRoute()

function onBack() {
  emit('back')
  if (route.name === 'lobby') return
  if (window.history.state?.back) router.back()
  else router.push('/')
}

function onWallet() {
  router.push('/wallet')
}
</script>

<template>
  <header class="appbar">
    <button class="appbar__title" @click="onBack">
      <img :src="$base + 'icons/ic_arrow_left.svg'" alt="back" class="appbar__back" />
      <span class="t-title">{{ title }}</span>
    </button>

    <div v-if="showActions" class="appbar__actions">
      <PillButton label="充值" :icon="$base + 'icons/ic_wallet.svg'" @click="onWallet" />
      <PillButton label="客服" :icon="$base + 'icons/ic_support.svg'" />
    </div>

    <div v-else class="appbar__actions">
      <slot name="actions" />
    </div>
  </header>
</template>

<style scoped>
.appbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: clamp(6px, 2.13vw, 10px) clamp(10px, 3.47vw, 16px) clamp(6px, 2.13vw, 10px) clamp(24px, 8vw, 30px);
}

.appbar__title {
  display: flex;
  align-items: center;
  gap: clamp(12px, 4.27vw, 16px);
  white-space: nowrap;
}

.appbar__back {
  width: clamp(10px, 3.2vw, 14px);
  height: clamp(10px, 3.2vw, 14px);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.appbar__actions {
  display: flex;
  align-items: center;
  gap: clamp(4px, 1.6vw, 8px);
}
</style>

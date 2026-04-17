<script setup>
import PillButton from './PillButton.vue'

defineProps({
  title: { type: String, default: '扑克专区' },
})
defineEmits(['back'])
</script>

<template>
  <header class="appbar">
    <button class="appbar__title" @click="$emit('back')">
      <img src="/icons/ic_arrow_left.svg" alt="back" class="appbar__back" />
      <span class="t-title">{{ title }}</span>
    </button>

    <div class="appbar__actions">
      <PillButton label="充值" icon="/icons/ic_wallet.svg" />
      <PillButton label="客服" icon="/icons/ic_support.svg" />
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

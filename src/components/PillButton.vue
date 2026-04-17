<script setup>
defineProps({
  label: { type: String, required: true },
  icon: { type: String, default: '' },
})
</script>

<template>
  <button class="pill">
    <span class="t-button">{{ label }}</span>
    <img v-if="icon" :src="icon" alt="" class="pill__icon" />
  </button>
</template>

<style scoped>
.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: clamp(4px, 1.6vw, 6px);
  min-width: clamp(50px, 15.73vw, 62px);
  height: clamp(18px, 5.87vw, 24px);
  padding: 0 clamp(6px, 2.13vw, 10px);
  border-radius: 15px;
  white-space: nowrap;
  background: rgba(255, 255, 255, 0.21);
}

.pill__icon {
  width: clamp(12px, 4vw, 16px);
  height: clamp(12px, 4vw, 16px);
}
</style>

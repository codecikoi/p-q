<script setup>
defineProps({
  label: { type: String, required: true },
  icon: { type: String, default: '' },
})
</script>

<template>
  <button class="pill">
    <img src="/icons/button_top.svg" alt="" class="pill__bg" />
    <span class="t-button pill__label">{{ label }}</span>
    <img v-if="icon" :src="icon" alt="" class="pill__icon" />
  </button>
</template>

<style scoped>
.pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: clamp(4px, 1.6vw, 6px);
  min-width: clamp(50px, 15.73vw, 62px);
  height: clamp(18px, 5.87vw, 24px);
  padding: 0 clamp(6px, 2.13vw, 10px);
  white-space: nowrap;
}

.pill__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.pill__label {
  position: relative;
}

.pill__icon {
  position: relative;
  width: clamp(12px, 4vw, 16px);
  height: clamp(12px, 4vw, 16px);
}
</style>

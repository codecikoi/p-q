<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <button class="pbtn">
    <span class="pbtn__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.pbtn {
  width: 100%;
  height: clamp(44px, 14.4vw, 54px);
  border-radius: clamp(28px, 10.5vw, 39.6px);
  background: var(--grad-primary);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pbtn__label {
  font-family: var(--font-cn);
  font-weight: 500;
  font-size: clamp(13px, 4vw, 15px);
  color: #fff;
  line-height: 1.2;
}
</style>

<script setup>
defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: Number, default: 0 },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="seg">
    <button
      v-for="(t, i) in tabs"
      :key="i"
      class="seg__tab"
      :class="{ 'seg__tab--active': modelValue === i }"
      @click="emit('update:modelValue', i)"
    >
      <span class="seg__label">{{ t }}</span>
    </button>
  </div>
</template>

<style scoped>
.seg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(48px, 19.8vw, 74px);
  padding: 0 clamp(14px, 5.9vw, 22px);
  height: clamp(26px, 8.4vw, 31.6px);
}

.seg__tab {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.seg__label {
  font-family: var(--font-cn);
  font-size: clamp(14px, 4.6vw, 17.2px);
  line-height: 0.95;
  color: #fff;
  font-weight: 500;
  opacity: 0.7;
  transition: opacity 0.2s, font-weight 0.2s;
}

.seg__tab--active .seg__label {
  opacity: 1;
  font-weight: 700;
}

.seg__tab--active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.56px;
  background: #eaeaea;
}
</style>

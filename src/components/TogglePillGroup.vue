<script setup>
defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: Number, default: 0 },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="tpg">
    <button
      v-for="(t, i) in tabs"
      :key="i"
      class="tpg__pill"
      :class="modelValue === i ? 'tpg__pill--active' : 'tpg__pill--inactive'"
      @click="emit('update:modelValue', i)"
    >
      <span class="tpg__label">{{ t }}</span>
    </button>
  </div>
</template>

<style scoped>
.tpg {
  display: inline-flex;
  align-items: center;
  gap: clamp(6px, 2.2vw, 8px);
}

.tpg__pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 clamp(12px, 4.8vw, 18px);
  height: clamp(22px, 7.5vw, 28px);
  border-radius: clamp(20px, 7.4vw, 27.8px);
  backdrop-filter: blur(22.4px);
  -webkit-backdrop-filter: blur(22.4px);
  cursor: pointer;
  white-space: nowrap;
  border: 0.6px solid rgba(242, 242, 242, 0.8);
}

.tpg__pill--active {
  background: var(--grad-primary);
  border-color: rgba(255, 255, 255, 0.44);
  box-shadow: 3.9px 2.7px 10.2px rgba(110, 2, 2, 0.27);
}

.tpg__pill--inactive {
  background: rgba(0, 0, 0, 0.36);
  box-shadow: 3.9px 2.7px 10.2px rgba(51, 51, 51, 0.27);
}

.tpg__label {
  font-family: var(--font-cn);
  font-weight: 400;
  font-size: clamp(7px, 2.15vw, 8px);
  color: #fff;
}
</style>

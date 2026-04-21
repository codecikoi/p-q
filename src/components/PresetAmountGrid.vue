<script setup>
import AmountTile from './AmountTile.vue'

defineProps({
  presets: { type: Array, required: true },
  activeIndex: { type: Number, default: 0 },
})
const emit = defineEmits(['select', 'custom'])
</script>

<template>
  <div class="grid">
    <AmountTile
      v-for="(p, i) in presets"
      :key="i"
      :amount="p.amount"
      :chip="p.chip"
      :active="activeIndex === i"
      @click="emit('select', i)"
    />
    <AmountTile amount="" custom @click="emit('custom')" />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(8px, 2.9vw, 11px);
  width: 100%;
}
</style>

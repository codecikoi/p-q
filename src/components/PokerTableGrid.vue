<script setup>
import PokerTableCard from './PokerTableCard.vue'

defineProps({
  tables: { type: Array, required: true },
})
</script>

<template>
  <div class="grid">
    <PokerTableCard
      v-for="(table, i) in tables"
      :key="i"
      v-bind="table"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, clamp(140px, 42.67vw, 168px));
  justify-content: center;
  gap: clamp(12px, 4.27vw, 20px);
  padding: 16px clamp(12px, 3.47vw, 16px);
}
</style>

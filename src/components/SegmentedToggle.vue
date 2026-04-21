<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'

const props = defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: Number, default: 0 },
})
const emit = defineEmits(['update:modelValue'])

const tabRefs = ref([])
const indicatorStyle = ref({ width: '0px', transform: 'translateX(0px)', opacity: 0 })

function updateIndicator() {
  const el = tabRefs.value[props.modelValue]
  if (!el) return
  const bar = el.parentElement
  const tabRect = el.getBoundingClientRect()
  const barRect = bar.getBoundingClientRect()
  indicatorStyle.value = {
    width: tabRect.width + 'px',
    transform: `translateX(${tabRect.left - barRect.left}px)`,
    opacity: 1,
  }
}

onMounted(() => nextTick(updateIndicator))
watch(() => props.modelValue, () => nextTick(updateIndicator))
</script>

<template>
  <div class="seg">
    <span class="seg__indicator" :style="indicatorStyle" />
    <button
      v-for="(t, i) in tabs"
      :key="i"
      :ref="el => tabRefs[i] = el"
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(48px, 19.8vw, 74px);
  padding: 0 clamp(14px, 5.9vw, 22px);
  height: clamp(26px, 8.4vw, 31.6px);
}

.seg__indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1.56px;
  background: #eaeaea;
  border-radius: 1px;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), width 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s;
  pointer-events: none;
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
  transition: opacity 0.25s ease;
}

.seg__tab--active .seg__label {
  opacity: 1;
  font-weight: 700;
}
</style>

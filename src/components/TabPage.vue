<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'

const props = defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: Number, default: 0 },
})
const emit = defineEmits(['update:modelValue'])

const activeIndex = ref(props.modelValue)
const labelRefs = ref([])
const indicatorStyle = ref({})

function updateIndicator() {
  const label = labelRefs.value[activeIndex.value]
  if (!label) return
  const bar = label.closest('.tabpage__bar')
  const labelRect = label.getBoundingClientRect()
  const barRect = bar.getBoundingClientRect()
  indicatorStyle.value = {
    width: labelRect.width + 'px',
    transform: `translateX(${labelRect.left - barRect.left}px)`,
  }
}

function select(index) {
  activeIndex.value = index
  emit('update:modelValue', index)
  nextTick(updateIndicator)
}

onMounted(updateIndicator)
watch(() => props.modelValue, (v) => {
  activeIndex.value = v
  nextTick(updateIndicator)
})
</script>

<template>
  <div class="tabpage">
    <div class="tabpage__bar">
      <div class="tabpage__indicator" :style="indicatorStyle">
        <div class="tabpage__ear tabpage__ear--left" />
        <div class="tabpage__ear tabpage__ear--right" />
      </div>
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        class="tabpage__tab t-body"
        :class="{ 'tabpage__tab--active': activeIndex === i }"
        @click="select(i)"
      >
        <span :ref="el => labelRefs[i] = el" class="tabpage__label">{{ tab }}</span>
      </button>
    </div>

    <div class="tabpage__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tabpage {
  --tab-r: 14px;
  --tab-bg: rgba(255, 255, 255, 0.22);
  display: flex;
  flex-direction: column;
}

.tabpage__bar {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0 clamp(14px, 4.56vw, 18px);
}

.tabpage__indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  background: var(--tab-bg);
  border-radius: var(--tab-r) var(--tab-r) 0 0;
  transition: transform 0.3s ease, width 0.3s ease;
  pointer-events: none;
}

.tabpage__ear {
  position: absolute;
  bottom: 0;
  width: var(--tab-r);
  height: var(--tab-r);
}

.tabpage__ear--left {
  left: calc(var(--tab-r) * -1);
  background: radial-gradient(circle at 0 0, transparent var(--tab-r), var(--tab-bg) var(--tab-r));
}

.tabpage__ear--right {
  right: calc(var(--tab-r) * -1);
  background: radial-gradient(circle at 100% 0, transparent var(--tab-r), var(--tab-bg) var(--tab-r));
}

.tabpage__tab {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: clamp(6px, 2.13vw, 10px) 0;
  text-align: center;
  opacity: 0.7;
  font-weight: 500;
  white-space: nowrap;
  transition: opacity 0.3s ease, font-weight 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

.tabpage__label {
  padding: 6px clamp(8px, 2.4vw, 12px) 0;
}

.tabpage__tab--active {
  opacity: 1;
  font-weight: 700;
}

.tabpage__content {
  background: var(--tab-bg);
  min-height: 200px;
}
</style>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'

const props = defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: Number, default: 0 },
})
const emit = defineEmits(['update:modelValue'])

const activeIndex = ref(props.modelValue)
const tabRefs = ref([])
const indicatorStyle = ref({})

function updateIndicator() {
  const tab = tabRefs.value[activeIndex.value]
  if (!tab) return
  const bar = tab.closest('.tabpage__bar')
  const tabRect = tab.getBoundingClientRect()
  const barRect = bar.getBoundingClientRect()
  indicatorStyle.value = {
    width: tabRect.width + 'px',
    height: tabRect.height + 'px',
    transform: `translateX(${tabRect.left - barRect.left}px)`,
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
      <img
        src="/icons/tab-select.svg"
        alt=""
        class="tabpage__indicator"
        :style="indicatorStyle"
      />
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        :ref="el => tabRefs[i] = el"
        class="tabpage__tab t-body"
        :class="{ 'tabpage__tab--active': activeIndex === i }"
        @click="select(i)"
      >
        <span class="tabpage__label">{{ tab }}</span>
      </button>
    </div>

    <div class="tabpage__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.tabpage {
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
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
  pointer-events: none;
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
  margin-top: -4.2px;
}
</style>

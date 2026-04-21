<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import PrimaryButton from './PrimaryButton.vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  min: { type: Number, default: 1 },
  max: { type: Number, default: 1000000 },
  title: { type: String, default: '自定义金额' },
})
const emit = defineEmits(['close', 'submit'])

const value = ref('')
const keyBgUrl = `url(${import.meta.env.BASE_URL}icons/keyboard_numbers_bg.svg)`

watch(() => props.open, (v) => {
  if (v) value.value = ''
})

function press(k) {
  if (value.value.length >= String(props.max).length) return
  if (value.value === '' && k === '0') return
  value.value += k
}

function clearAll() {
  value.value = ''
}

function backspace() {
  value.value = value.value.slice(0, -1)
}

function cancel() {
  emit('close')
}

function confirm() {
  const n = Number(value.value)
  if (!value.value || n < props.min || n > props.max) return
  emit('submit', n)
}
</script>

<template>
  <Transition name="keypad">
    <div v-if="open" class="kp" @click.self="cancel">
      <div class="kp__sheet">
        <div class="kp__header">
          <span class="kp__title">{{ title }}</span>
          <div class="kp__input">
            <span v-if="!value" class="kp__placeholder">请输入{{ min }}-{{ max }}区间的金额</span>
            <span v-else class="kp__value">{{ value }}</span>
          </div>
        </div>

        <div class="kp__grid">
          <button v-for="n in ['1','2','3','4','5','6','7','8','9']" :key="n" class="kp__key" @click="press(n)">
            {{ n }}
          </button>
          <button class="kp__key kp__key--accent" @click="clearAll">C</button>
          <button class="kp__key" @click="press('0')">0</button>
          <button class="kp__key kp__key--accent" @click="backspace">
            <Icon icon="solar:backspace-bold" class="kp__icon" />
          </button>
        </div>

        <div class="kp__actions">
          <button class="kp__cancel" @click="cancel">取消</button>
          <PrimaryButton label="确定" class="kp__confirm" @click="confirm" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.kp {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
}

.kp__sheet {
  position: relative;
  width: 100%;
  max-width: 430px;
  backdrop-filter: blur(48px);
  -webkit-backdrop-filter: blur(48px);
  background: rgba(0, 0, 0, 0.2);
  border: 0.96px solid rgba(210, 209, 209, 0.6);
  border-bottom: none;
  border-top-left-radius: clamp(24px, 8.5vw, 31.7px);
  border-top-right-radius: clamp(24px, 8.5vw, 31.7px);
    padding: clamp(24px, 6.8vw, 30px) clamp(30px, 5.3vw, 34px) clamp(18px, 5.5vw, 22px);
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 4.5vw, 18px);
  box-shadow:
    3.4px 4.3px 6.9px rgba(0, 0, 0, 0.25),
    4px 0 10px rgba(242, 242, 242, 0.3) inset,
    -4px 0 10px rgba(242, 242, 242, 0.3) inset;
  overflow: hidden;
}

.kp__sheet::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  background-image: linear-gradient(106.9deg, rgba(142, 142, 142, 0.3) 3%, rgba(103, 103, 103, 0.4) 44%, rgba(73, 73, 73, 0.5) 90%);
  mix-blend-mode: hard-light;
  z-index: 0;
}

.kp__sheet > * {
  position: relative;
  z-index: 1;
}

.kp__header {
  display: flex;
  flex-direction: column;
  gap: clamp(3px, 1.2vw, 4.5px);
  width: 100%;
}

.kp__title {
  font-family: var(--font-cn);
  font-weight: 400;
  font-size: clamp(12px, 3.55vw, 13.3px);
  color: #f9f9f9;
  line-height: 1.2;
}

.kp__input {
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: clamp(16px, 5.9vw, 22px);
  padding: clamp(10px, 3.4vw, 12.8px) clamp(8px, 2.6vw, 9.6px);
  text-align: center;
  min-height: clamp(38px, 12.8vw, 48px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.kp__placeholder,
.kp__value {
  font-family: var(--font-cn);
  font-weight: 500;
  font-size: clamp(13px, 4vw, 15px);
  line-height: 1.4;
}

.kp__placeholder { color: rgba(255, 255, 255, 0.6); }
.kp__value { color: #fff; }

.kp__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(6px, 2.2vw, 8.4px);
}

.kp__key {
  position: relative;
  aspect-ratio: 100 / 51;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: v-bind(keyBgUrl) center / 100% 100% no-repeat;
  border: none;
  border-radius: clamp(11px, 3.8vw, 14.2px);
  font-family: "SF Pro", var(--font-num);
  font-weight: 500;
  font-size: clamp(18px, 6.1vw, 22.9px);
  color: #fff;
  cursor: pointer;
}

.kp__key--accent {
  background: rgba(4, 209, 157, 0.24);
  border: none;
  border-radius: clamp(42px, 13.5vw, 60px);
}

.kp__icon {
  width: 50px;
  height: 32px;
}

.kp__actions {
  display: flex;
  gap: clamp(6px, 2.5vw, 9.5px);
  padding: 0 clamp(4px, 2vw, 14px);
  margin-top: clamp(4px, 1.3vw, 5px);
}

.kp__cancel {
  flex: 1;
  height: clamp(44px, 14.4vw, 54px);
  border-radius: clamp(28px, 10.5vw, 39.6px);
  background: rgba(0, 0, 0, 0.55);
  border: none;
  color: #fff;
  font-family: var(--font-cn);
  font-weight: 500;
  font-size: clamp(13px, 4vw, 15px);
  cursor: pointer;
}

.kp__confirm {
  flex: 1;
}

.keypad-enter-active,
.keypad-leave-active {
  transition: opacity 0.25s ease;
}
.keypad-enter-active .kp__sheet,
.keypad-leave-active .kp__sheet {
  transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.3, 1);
}
.keypad-enter-from,
.keypad-leave-to { opacity: 0; }
.keypad-enter-from .kp__sheet,
.keypad-leave-to .kp__sheet { transform: translateY(100%); }
</style>

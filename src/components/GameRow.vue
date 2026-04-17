<script setup>
defineProps({
  image: { type: String, required: true },
  label: { type: String, default: '' },
  blinds: { type: String, default: '' },
  tables: { type: String, default: '' },
  players: { type: String, default: '' },
  expanded: { type: Boolean, default: false },
})
defineEmits(['toggle'])

function onBeforeEnter(el) {
  el.style.height = '0'
  el.style.overflow = 'hidden'
}
function onEnter(el, done) {
  el.style.transition = 'height 0.3s ease'
  el.style.height = el.scrollHeight + 'px'
  el.addEventListener('transitionend', done, { once: true })
}
function onAfterEnter(el) {
  el.style.height = ''
  el.style.overflow = ''
  el.style.transition = ''
}
function onBeforeLeave(el) {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
}
function onLeave(el, done) {
  el.offsetHeight
  el.style.transition = 'height 0.3s ease'
  el.style.height = '0'
  el.addEventListener('transitionend', done, { once: true })
}
function onAfterLeave(el) {
  el.style.height = ''
  el.style.overflow = ''
  el.style.transition = ''
}
</script>

<template>
  <div class="game-row">
    <div class="row">
      <div class="row__card">
        <img :src="image" alt="" class="row__image" />
        <div v-if="label" class="row__label t-badge">{{ label }}</div>
      </div>

      <div class="row__info">
        <p class="t-body">盲注 &nbsp;{{ blinds }}</p>
        <div class="row__stats">
          <span class="row__stat">
            <img src="/icons/ic_table.svg" alt="" class="row__icon" />
            <span class="t-body">{{ tables }}</span>
          </span>
          <span class="row__stat">
            <img src="/icons/ic_users.svg" alt="" class="row__icon" />
            <span class="t-body">{{ players }}</span>
          </span>
        </div>
      </div>

      <button class="row__toggle" @click="$emit('toggle')">
        <img
          :src="expanded ? '/icons/ic_drop_up.svg' : '/icons/ic_drop_down.svg'"
          alt=""
          class="row__arrow"
        />
      </button>
    </div>

    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div v-show="expanded" class="game-row__expand">
        <slot name="expand" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  padding: clamp(8px, 2.4vw, 12px) clamp(12px, 3.47vw, 16px);
  gap: clamp(10px, 3.2vw, 14px);
}

.row__card {
  position: relative;
  flex-shrink: 0;
  width: clamp(52px, 16.21vw, 64px);
  height: clamp(55px, 17.07vw, 68px);
  border-radius: clamp(12px, 4.27vw, 17px);
  background: rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.row__card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 0.5px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 1;
}

.row__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.row__label {
  position: absolute;
  bottom: clamp(3px, 1.07vw, 5px);
  left: 50%;
  transform: translateX(-50%);
  padding: clamp(2px, 0.8vw, 4px) clamp(5px, 1.6vw, 7px);
  background: rgba(10, 10, 10, 0.19);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 100px;
  white-space: nowrap;
}

.row__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(2px, 0.8vw, 4px);
}

.row__stats {
  display: flex;
  align-items: center;
  gap: clamp(8px, 2.67vw, 12px);
}

.row__stat {
  display: flex;
  align-items: center;
  gap: clamp(2px, 0.8vw, 4px);
}

.row__icon {
  width: clamp(12px, 4vw, 15px);
  height: clamp(12px, 4vw, 15px);
}

.row__toggle {
  flex-shrink: 0;
  width: clamp(28px, 9.6vw, 36px);
  height: clamp(28px, 9.6vw, 36px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.row__arrow {
  width: 100%;
  height: 100%;
}
</style>

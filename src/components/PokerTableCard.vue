<script setup>
import { computed } from 'vue'
import SeatAvatar from './SeatAvatar.vue'

const props = defineProps({
  name: { type: String, required: true },
  playerCount: { type: String, default: '0/9' },
  duration: { type: String, default: '' },
  buyIn: { type: String, default: '' },
  deco: { type: String, default: '' },
})

const avatars = ['/avatars/ava1.png', '/avatars/ava2.png', '/avatars/ava3.png', '/avatars/ava4.png']

const seats = computed(() => {
  const [filled, total] = props.playerCount.split('/').map(Number)
  const list = []
  for (let i = 0; i < total; i++) {
    list.push(i < filled ? avatars[i % avatars.length] : '')
  }
  return list
})

const customPositions = {
  6: [
    { left: '30%', top: '25%' },
    { left: '70%', top: '25%' },
    { left: '91%', top: '50%' },
    { left: '70%', top: '75%' },
    { left: '30%', top: '75%' },
    { left: '9%', top: '50%' },
  ],
}

function seatStyle(index) {
  const total = seats.value.length
  if (customPositions[total]) {
    return { ...customPositions[total][index], transform: 'translate(-50%, -50%)' }
  }
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2
  const rx = 41
  const ry = 25
  const cx = 50
  const cy = 50
  return {
    left: (cx + rx * Math.cos(angle)) + '%',
    top: (cy + ry * Math.sin(angle)) + '%',
    transform: 'translate(-50%, -50%)',
  }
}
</script>

<template>
  <div class="card-wrap">
    <div class="card__header">
      <div class="card__name">{{ name }}</div>
      <img v-if="deco" :src="deco" alt="" class="card__deco" />
    </div>
    <div class="card">
      <div class="card__body">
      <div class="card__table">
        <SeatAvatar
          v-for="(seat, i) in seats"
          :key="i"
          :avatar="seat"
          class="card__seat"
          :style="seatStyle(i)"
        />

        <div class="card__count">
          <img src="/icons/ic_users.svg" alt="" class="card__count-icon" />
          <span class="card__count-text">{{ playerCount }}</span>
        </div>
      </div>

      <div class="card__info">
        <span class="card__info-item">
          <img src="/icons/ic_time.svg" alt="" class="card__info-icon" />
          <span class="t-caption card__info-time">{{ duration }}</span>
        </span>
        <span class="card__info-item">
          <img src="/icons/ic_coins.png" alt="" class="card__info-icon" />
          <span class="t-caption">{{ buyIn }}</span>
        </span>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrap {
  position: relative;
  width: clamp(140px, 42.67vw, 168px);
  height: clamp(140px, 42.67vw, 168px);
}

.card {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  background: rgba(0, 0, 0, 0.14);
  border-radius: 30px;
  position: relative;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 0.8px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.76) 0%,
    rgba(255, 255, 255, 0.13) 100%
  );
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  pointer-events: none;
}

.card__header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  align-items: center;
  gap: clamp(3px, 1vw, 5px);
}

.card__deco {
  width: 28px;
  height: 32px;
  object-fit: contain;
  margin-top: 18%;
}

.card__name {
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 0.4px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  padding: clamp(2px, 0.8vw, 4px) clamp(6px, 2.13vw, 10px);
  white-space: nowrap;
  font-family: var(--font-cn);
  font-weight: 500;
  font-size: 10px;
  color: #fff;
  line-height: 1;
}


.card__body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(6px, 2vw, 8px) 10px 12px;
  gap: clamp(2px, 0.8vw, 4px);
}

.card__table {
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__table::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 82%;
  height: 50%;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(49, 49, 49, 0.2);
  border-radius: 38px;
  box-shadow:
    12px 16px 12px rgba(0, 0, 0, 0.05),
    6px 7px 9px rgba(0, 0, 0, 0.09),
    1.5px 2px 5px rgba(0, 0, 0, 0.11);
}

.card__table::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 82%;
  height: 50%;
  border-radius: 38px;
  padding: 0.39px;
  background: linear-gradient(
    90deg,
    #999999 0%,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0) 73%,
    #999999 100%
  );
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  pointer-events: none;
}


.card__seat {
  position: absolute;
  z-index: 1;
}

.card__count {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: clamp(3px, 1.07vw, 5px);
  background: rgba(249, 249, 249, 0.1);
  border-radius: 100px;
  padding: clamp(3px, 0.93vw, 5px) clamp(5px, 1.73vw, 8px);
}

.card__count-text {
  font-family: var(--font-cn);
  font-weight: 400;
  font-size: clamp(14px, 4.27vw, 18px);
  color: #fff;
  line-height: 1;
}

.card__count-icon {
  width: clamp(16px, 5.33vw, 22px);
  height: clamp(16px, 5.33vw, 22px);
}

.card__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
}

.card__info-item {
  display: flex;
  align-items: center;
  gap: clamp(1px, 0.53vw, 3px);
}

.card__info-icon {
  width: clamp(10px, 3.47vw, 14px);
  height: clamp(10px, 3.47vw, 14px);
}

.card__info-time {
  opacity: 0.8;
}
</style>

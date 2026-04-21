<script setup>
import TagPill from './TagPill.vue'

defineProps({
  avatar: { type: String, required: true },
  name: { type: String, required: true },
  userId: { type: [String, Number], required: true },
  balance: { type: [String, Number], default: '' },
  variant: { type: String, default: 'compact' },
})
</script>

<template>
  <div class="usercard" :class="`usercard--${variant}`">
    <div class="usercard__bg" />
    <div class="usercard__head">
      <img :src="avatar" alt="" class="usercard__avatar" />
      <div class="usercard__info">
        <div class="usercard__name">{{ name }}</div>
        <div class="usercard__id">
          <TagPill label="ID" variant="id" />
          <span class="usercard__id-value">{{ userId }}</span>
        </div>
      </div>
      <div v-if="variant === 'compact'" class="usercard__actions">
        <slot name="actions" />
      </div>
    </div>

    <div v-if="variant === 'expanded' && balance !== ''" class="usercard__balance">
      <span class="usercard__balance-label">Balance:</span>
      <span class="usercard__balance-value">{{ balance }}</span>
      <img :src="$base + 'icons/ic_coins.png'" alt="" class="usercard__balance-chip" />
    </div>

    <slot name="extra" />
  </div>
</template>

<style scoped>
.usercard {
  position: relative;
  overflow: hidden;
  border-radius: clamp(22px, 8vw, 29.2px);
  padding: clamp(7px, 2.5vw, 9.3px) clamp(10px, 3.7vw, 14px);
}

.usercard--expanded {
  height: clamp(128px, 41.3vw, 155px);
  border-radius: clamp(30px, 10.4vw, 39px);
  padding: clamp(14px, 5vw, 18px) clamp(14px, 5vw, 18px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1.25px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 8.5px 0 #000 inset,
    0 0 36px 6px rgba(242, 242, 242, 0.3) inset,
    3.4px 2.5px 8.5px 0 rgba(0, 0, 0, 0.1) inset;
}

.usercard--compact {
  background: rgba(0, 0, 0, 0.2);
  border-radius: clamp(22px, 8vw, 29.2px);
}

.usercard--expanded::before {
  content: '';
  position: absolute;
  inset: 0;
  backdrop-filter: blur(19px);
  -webkit-backdrop-filter: blur(19px);
  background: rgba(0, 0, 0, 0.35);
  border-radius: inherit;
  mix-blend-mode: hard-light;
  background-image: linear-gradient(110.6deg, rgba(249, 249, 249, 0.18) 12%, rgba(249, 249, 249, 0.24) 33%, rgba(147, 147, 147, 0.3) 85%);
  pointer-events: none;
  z-index: 0;
}

.usercard__head {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: clamp(8px, 2.85vw, 10.7px);
}

.usercard__avatar {
  width: clamp(52px, 17.1vw, 65px);
  height: clamp(52px, 17.1vw, 65px);
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.usercard--expanded .usercard__avatar {
  width: clamp(60px, 19vw, 71px);
  height: clamp(60px, 19vw, 71px);
}

.usercard__info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(3px, 1vw, 3.75px);
}

.usercard__name {
  font-family: "SF Pro", var(--font-num);
  font-weight: 700;
  font-size: clamp(16px, 5.3vw, 20px);
  color: #fff;
  line-height: 1.05;
  white-space: pre-line;
}

.usercard--expanded .usercard__name {
  font-size: clamp(18px, 5.96vw, 22.4px);
}

.usercard__id {
  display: flex;
  align-items: center;
  gap: clamp(1.5px, 0.6vw, 2.2px);
}

.usercard__id-value {
  font-family: "SF Pro", var(--font-num);
  font-weight: 400;
  font-size: clamp(7.5px, 2.3vw, 8.5px);
  color: #fff;
}

.usercard--expanded .usercard__id-value {
  font-size: clamp(8px, 2.5vw, 9.6px);
  font-weight: 600;
}

.usercard__actions {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 3.2vw, 12px);
  align-items: stretch;
  margin-top: 18px;
  align-self: flex-start;
}

.usercard__balance {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(3px, 1.1vw, 4.2px);
  color: #f9f9f9;
  padding-right: clamp(18px, 6.5vw, 24px);
}

.usercard__balance-label {
  font-family: "SF Pro", var(--font-num);
  font-weight: 400;
  font-size: clamp(10px, 3vw, 11.3px);
}

.usercard__balance-value {
  font-family: "SF Pro", var(--font-num);
  font-weight: 600;
  font-size: clamp(14px, 4.35vw, 16.3px);
}

.usercard__balance-chip {
  width: clamp(24px, 7.73vw, 29px);
  height: clamp(24px, 7.73vw, 29px);
}
</style>

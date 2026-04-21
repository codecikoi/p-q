<script setup>
import GlassCard from './GlassCard.vue'
import TagPill from './TagPill.vue'

defineProps({
  kind: { type: String, required: true },
  type: { type: String, required: true },
  gameName: { type: String, default: '' },
  userId: { type: [String, Number], default: '' },
  amount: { type: [String, Number], required: true },
  positive: { type: Boolean, default: true },
  time: { type: String, required: true },
  chipAmount: { type: [String, Number], required: true },
})
</script>

<template>
  <GlassCard class="tx">
    <div class="tx__head">
      <img
        :src="$base + (positive ? 'icons/ic_income.svg' : 'icons/ic_outcome.svg')"
        alt=""
        class="tx__kind-icon"
      />
      <div class="tx__info">
        <TagPill :label="type" variant="light" />
        <div v-if="gameName" class="tx__game">{{ gameName }}</div>
        <div v-if="userId" class="tx__id">
          <TagPill label="ID" variant="id" />
          <span class="tx__id-value">{{ userId }}</span>
        </div>
      </div>
      <div class="tx__amount" :class="positive ? 'tx__amount--pos' : 'tx__amount--neg'">
        {{ positive ? '+' : '-' }}{{ amount }}
      </div>
    </div>
    <div class="tx__divider" />
    <div class="tx__foot">
      <div class="tx__time">
        <img :src="$base + 'icons/ic_time.svg'" alt="" class="tx__time-icon" />
        <span>{{ time }}</span>
      </div>
      <div class="tx__chip">
        <span class="tx__chip-value">{{ chipAmount }}</span>
        <img :src="$base + 'icons/ic_coins.png'" alt="" class="tx__chip-icon" />
      </div>
    </div>
  </GlassCard>
</template>

<style scoped>
.tx {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 2.7vw, 10px);
}

.tx__head {
  display: flex;
  align-items: center;
  gap: clamp(7px, 2.4vw, 9px);
}

.tx__kind-icon {
  width: clamp(20px, 6.75vw, 25.3px);
  height: clamp(20px, 6.75vw, 25.3px);
  flex-shrink: 0;
}

.tx__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(2px, 0.8vw, 3px);
  min-width: 0;
}

.tx__game {
  font-family: var(--font-cn);
  font-weight: 600;
  font-size: clamp(10.5px, 3.3vw, 12.2px);
  color: #fff;
  line-height: 1.4;
}

.tx__id {
  display: flex;
  align-items: center;
  gap: clamp(1.5px, 0.65vw, 2.5px);
}

.tx__id-value {
  font-family: "SF Pro", var(--font-num);
  font-weight: 600;
  font-size: clamp(8px, 2.5vw, 9.6px);
  color: #fff;
}

.tx__amount {
  font-family: "SF Pro", var(--font-num);
  font-weight: 800;
  font-size: clamp(14px, 4.3vw, 16px);
  line-height: 1.4;
  white-space: nowrap;
}

.tx__amount--pos {
  color: var(--color-primary);
}

.tx__amount--neg {
  color: var(--color-danger);
}

.tx__divider {
  width: 100%;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
}

.tx__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tx__time {
  display: flex;
  align-items: center;
  gap: clamp(4px, 1.6vw, 6px);
  font-family: var(--font-cn);
  font-weight: 400;
  font-size: clamp(10px, 3.2vw, 12px);
  color: #fff;
  letter-spacing: 0.24px;
  line-height: 0.78;
}

.tx__time-icon {
  width: clamp(16px, 5.3vw, 20px);
  height: clamp(16px, 5.3vw, 20px);
}

.tx__chip {
  display: flex;
  align-items: center;
  gap: clamp(3px, 1.15vw, 4.3px);
}

.tx__chip-value {
  font-family: "SF Pro", var(--font-num);
  font-weight: 600;
  font-size: clamp(11px, 3.6vw, 13.4px);
  color: #f9f9f9;
  line-height: 1.4;
}

.tx__chip-icon {
  width: clamp(24px, 8vw, 30px);
  height: clamp(24px, 8vw, 30px);
}
</style>

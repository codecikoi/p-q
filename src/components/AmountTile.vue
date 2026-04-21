<script setup>
import CryptoChip from './CryptoChip.vue'

defineProps({
  amount: { type: [String, Number], required: true },
  chip: { type: [String, Number], default: '' },
  active: { type: Boolean, default: false },
  custom: { type: Boolean, default: false },
})
</script>

<template>
  <button class="tile" :class="{ 'tile--active': active, 'tile--custom': custom }">
    <template v-if="custom">
      <span class="tile__custom-label">自定义金额</span>
    </template>
    <template v-else>
      <div class="tile__head">
        <img :src="$base + 'icons/ic_coins.png'" alt="" class="tile__icon" />
        <span class="tile__amount">*{{ amount }}</span>
      </div>
      <CryptoChip v-if="chip !== ''" :amount="chip" class="tile__chip" />
    </template>
  </button>
</template>

<style scoped>
.tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  aspect-ratio: 1 / 1;
  padding: clamp(12px, 4.8vw, 18px) clamp(5px, 2.75vw, 10.3px) clamp(6px, 2.85vw, 10.7px);
  background: rgba(0, 0, 0, 0.12);
  border-radius: clamp(18px, 6.4vw, 24px);
  width: 100%;
  min-width: 0;
  cursor: pointer;
  overflow: hidden;
}

.tile--active {
  background: rgba(178, 0, 0, 0.23);
  border-top: 0.134px solid rgba(242, 242, 242, 0.3);
  border-right: 0.134px solid rgba(242, 242, 242, 0.3);
  border-bottom: 0.134px solid rgba(242, 242, 242, 0.3);
  border-left: 0.134px solid rgba(242, 242, 242, 0.3);
  border-radius: clamp(22px, 7.8vw, 29.2px);
  box-shadow: 0.9px 1.1px 1.8px rgba(0, 0, 0, 0.25);
}

.tile--custom {
  background: rgba(0, 0, 0, 0.12);
  justify-content: center;
}

.tile__head {
  display: flex;
  align-items: center;
  gap: clamp(1px, 0.7vw, 2.6px);
  margin-top: clamp(4px, 3.6vw, 12px);
  min-width: 0;
  max-width: 100%;
}

.tile__icon {
  width: clamp(9px, 3.6vw, 18px);
  height: clamp(9px, 3.6vw, 18px);
  flex-shrink: 0;
}

.tile__amount {
  font-family: "SF Pro", var(--font-num);
  font-weight: 700;
  font-size: clamp(9px, 3.4vw, 16px);
  color: #f9f9f9;
  line-height: 1.4;
  white-space: nowrap;
  min-width: 0;
}

.tile__chip {
  width: 100%;
}

.tile__custom-label {
  font-family: "SF Pro", var(--font-num);
  font-weight: 700;
  font-size: clamp(9px, 2.9vw, 10.7px);
  color: #f9f9f9;
  line-height: 1.4;
}
</style>

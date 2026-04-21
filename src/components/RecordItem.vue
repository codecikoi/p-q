<script setup>
import GlassCard from './GlassCard.vue'
import TagPill from './TagPill.vue'

defineProps({
  type: { type: String, required: true },
  amount: { type: [String, Number], required: true },
  payAmount: { type: [String, Number], required: true },
  time: { type: String, required: true },
  status: { type: String, required: true },
})
</script>

<template>
  <GlassCard tag="button" class="record">
    <div class="record__col record__col--left">
      <TagPill :label="type" variant="dark" />
      <span class="record__label">支付金额</span>
      <span class="record__label">申请时间</span>
      <span class="record__label">状态</span>
    </div>
    <div class="record__col record__col--right">
      <span class="record__value">{{ amount }}</span>
      <span class="record__value">{{ payAmount }}</span>
      <span class="record__value">{{ time }}</span>
      <span class="record__value">{{ status }}</span>
    </div>
  </GlassCard>
</template>

<style scoped>
.record {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  cursor: pointer;
  box-shadow: none;
}

.record__col {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(4px, 1.3vw, 5px);
  justify-content: center;
  min-width: 0;
}

.record__col--right {
  align-items: flex-end;
}

.record__label,
.record__value {
  font-family: "SF Pro", var(--font-num);
  font-weight: 500;
  font-size: clamp(10px, 3vw, 11.2px);
  color: #fff;
  line-height: 1.4;
  white-space: nowrap;
}
</style>

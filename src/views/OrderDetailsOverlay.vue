<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const orderId = computed(() => route.params.id)

const rows = [
  { label: '订单号', value: '87sdf55dfsd' },
  { label: '充值联盟币', value: '100.01' },
  { label: '手续费', value: '0' },
  { label: '支付金额', value: '13.8014' },
  { label: '付款地址', value: '56677' },
  { label: '收款名称', value: '唯一金额' },
  { label: '收款地', value: '5sd6654ddfdf' },
  { label: '充值时间', value: '2025-11-12 15:14:09' },
  { label: '状态', value: '申请中' },
]

function close() {
  if (window.history.state?.back) router.back()
  else router.push('/records')
}
</script>

<template>
  <div class="overlay" @click.self="close">
    <div class="overlay__dim" @click="close" />
    <div class="card">
      <div class="card__bg" />
      <h2 class="card__title">订单详情</h2>
      <div class="card__rows">
        <div v-for="r in rows" :key="r.label" class="card__row">
          <span class="card__key">{{ r.label }}</span>
          <span class="card__val">{{ r.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(20px, 7vw, 28px);
}

.overlay__dim {
  position: absolute;
  inset: 0;
  background: rgba(12, 12, 12, 0.6);
  cursor: pointer;
}

.card {
  position: relative;
  width: 100%;
  max-width: clamp(280px, 84.5vw, 317px);
  padding: clamp(14px, 4.6vw, 17px) clamp(14px, 4.6vw, 17px) clamp(14px, 4.6vw, 17px);
  border: 0.96px solid rgba(242, 242, 242, 0.4);
  border-radius: clamp(28px, 10vw, 36.4px);
  box-shadow: 3.4px 4.3px 6.9px rgba(0, 0, 0, 0.25),
    0 0 8.6px #000 inset,
    2.1px 4.25px 17.2px rgba(242, 242, 242, 0.9) inset;
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 5vw, 18px);
  overflow: hidden;
}

.card__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  background-image: linear-gradient(106.9deg, rgba(142, 142, 142, 0.3) 3%, rgba(103, 103, 103, 0.4) 44%, rgba(73, 73, 73, 0.5) 90%);
  mix-blend-mode: hard-light;
}

.card__title,
.card__rows {
  position: relative;
  z-index: 1;
}

.card__title {
  font-family: var(--font-cn);
  font-weight: 500;
  font-size: clamp(16px, 5.15vw, 19.3px);
  color: #fff;
  text-align: center;
  line-height: 1.4;
  margin: 0;
}

.card__rows {
  display: flex;
  flex-direction: column;
  gap: clamp(11px, 4vw, 15px);
}

.card__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.card__key,
.card__val {
  font-family: var(--font-cn);
  font-weight: 400;
  font-size: clamp(13px, 4vw, 15px);
  line-height: 0.78;
  color: #fff;
  letter-spacing: 0.3px;
  white-space: nowrap;
}
</style>

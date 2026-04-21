<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const b = import.meta.env.BASE_URL

import AppBar from '../components/AppBar.vue'
import SegmentedToggle from '../components/SegmentedToggle.vue'
import UserCard from '../components/UserCard.vue'
import GlassButton from '../components/GlassButton.vue'
import BellButton from '../components/BellButton.vue'
import PresetAmountGrid from '../components/PresetAmountGrid.vue'
import PaymentMethodStrip from '../components/PaymentMethodStrip.vue'
import PrimaryButton from '../components/PrimaryButton.vue'
import NumericKeypad from '../components/NumericKeypad.vue'

const router = useRouter()

const activeTab = ref(0)
const activePreset = ref(0)
const activeMethod = ref(0)
const keypadOpen = ref(false)
const customAmount = ref('')

function onCustom() {
  keypadOpen.value = true
}

function onKeypadSubmit(v) {
  customAmount.value = String(v)
  keypadOpen.value = false
}

const presets = [
  { amount: '100000', chip: '300,000' },
  { amount: '100000', chip: '300,000' },
  { amount: '100000', chip: '300,000' },
  { amount: '100000', chip: '300,000' },
  { amount: '100000', chip: '300,000' },
]

const methods = [
  { icon: b + 'icons/ic_usdt.svg', primary: 'USDT', secondary: 'TRC20' },
  { icon: b + 'icons/ic_usdt.svg', primary: 'USDT', secondary: 'TRC20' },
  { icon: b + 'icons/ic_btc.svg', primary: 'BTC', secondary: '' },
  { icon: b + 'icons/ic_eth.svg', primary: 'ETH', secondary: '' },
  { icon: b + 'icons/ic_card.svg', primary: '银行卡', secondary: '' },
]
</script>

<template>
  <div class="screen">
    <AppBar title="钱包" :show-actions="false" />

    <div class="screen__content">
      <div class="tabs-row">
        <SegmentedToggle :tabs="['充值', '回收']" v-model="activeTab" />
        <BellButton class="tabs-row__bell" />
      </div>

      <UserCard
        class="wallet-banner"
        :avatar="$base + 'avatars/ava1.png'"
        name="Cooper&#10;Korsgaard"
        user-id="8677650585"
      >
        <template #actions>
          <GlassButton label="记录" @click="router.push('/records')" />
          <GlassButton label="明细" @click="router.push('/wallet/history')" />
        </template>
        <template #extra>
          <div class="balance-row">
            <div class="balance-chip">
              <span class="balance-chip__value">19,231</span>
              <img :src="$base + 'icons/ic_coins.png'" alt="" class="balance-chip__icon" />
            </div>
            <span class="balance-label">UC余额</span>
          </div>
        </template>
      </UserCard>

      <div class="presets-card">
        <PresetAmountGrid
          :presets="presets"
          :active-index="activePreset"
          @select="activePreset = $event"
          @custom="onCustom"
        />
      </div>

      <PaymentMethodStrip
        :methods="methods"
        :active-index="activeMethod"
        @select="activeMethod = $event"
      />

      <PrimaryButton label="立即支付999" class="pay-cta" />
    </div>

    <NumericKeypad
      :open="keypadOpen"
      @close="keypadOpen = false"
      @submit="onKeypadSubmit"
    />
  </div>
</template>

<style scoped>
.screen {
  min-height: 100vh;
  min-height: 100dvh;
  padding-bottom: clamp(20px, 6.4vw, 28px);
}

.screen__content {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 2.6vw, 10px);
  padding: 0 clamp(14px, 4.55vw, 17px);
  margin-top: clamp(6px, 2vw, 10px);
}

.tabs-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tabs-row__bell {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-70%);
}

.wallet-banner {
  margin: 0 22px;
}

.presets-card {
  position: relative;
  padding: clamp(20px, 7vw, 25px) clamp(14px, 4.8vw, 18px) clamp(16px, 5.5vw, 20px);
  background: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(16.6px);
  -webkit-backdrop-filter: blur(16.6px);
  border: 0.18px solid rgba(255, 255, 255, 0.3);
  border-radius: clamp(28px, 10vw, 39px);
  box-shadow: 3.4px 4.3px 6.8px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  margin-top: -20px;
  z-index: 1;
  margin-bottom: 10px;
}

.presets-card::before {
  content: '';
  position: absolute;
  inset: 0;
  backdrop-filter: blur(16.6px);
  -webkit-backdrop-filter: blur(16.6px);
  background-image: linear-gradient(110.6deg, rgba(249, 249, 249, 0.18) 12%, rgba(249, 249, 249, 0.24) 33%, rgba(147, 147, 147, 0.3) 85%);
  mix-blend-mode: hard-light;
  pointer-events: none;
  border-radius: inherit;
  z-index: 0;
}

.presets-card > * {
  position: relative;
  z-index: 1;
}

.balance-row {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2px, 0.95vw, 3.6px);
  margin-top: clamp(6px, 2.1vw, 8px);
  margin-bottom: clamp(16px, 5.4vw, 24px);
  margin-left: 54px;
}

.balance-chip {
  display: inline-flex;
  align-items: center;
  gap: clamp(3px, 1.4vw, 5.6px);
  background: rgba(0, 0, 0, 0.22);
  border: 0.4px solid rgba(242, 242, 242, 0.4);
  border-radius: clamp(12px, 4vw, 15px);
  padding: clamp(5px, 1.8vw, 7.2px) clamp(7px, 2.1vw, 7.2px) clamp(5px, 1.8vw, 7.2px) clamp(10px, 3.3vw, 12.3px);
  box-shadow: 0.8px 1px 1.6px rgba(0, 0, 0, 0.25);
  height: clamp(26px, 8.5vw, 32px);
}

.balance-chip__value {
  font-family: "SF Pro", var(--font-num);
  font-weight: 600;
  font-size: clamp(13px, 4.3vw, 16px);
  color: #f9f9f9;
  line-height: 1.4;
}

.balance-chip__icon {
  width: clamp(22px, 7vw, 26px);
  height: clamp(22px, 7vw, 26px);
}

.balance-label {
  font-family: "SF Pro", var(--font-num);
  font-weight: 600;
  font-size: clamp(8px, 2.4vw, 9px);
  color: #f8f8f8;
}

.presets {
  width: 100%;
}

.pay-cta {
  margin-top: clamp(6px, 2vw, 8px);
}
</style>

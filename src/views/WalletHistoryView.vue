<script setup>
import AppBar from '../components/AppBar.vue'
import UserCard from '../components/UserCard.vue'
import TransactionItem from '../components/TransactionItem.vue'

const transactions = [
  {
    kind: 'in',
    type: '小游戏带入',
    gameName: '游戏名称',
    userId: '8677650585',
    amount: '1,000',
    positive: true,
    time: '22:56',
    chipAmount: '55,555,555',
  },
  {
    kind: 'out',
    type: '回收',
    gameName: '游戏名称',
    userId: '8677650585',
    amount: '1,000',
    positive: false,
    time: '22:56',
    chipAmount: '55,555,555',
  },
  {
    kind: 'in',
    type: '充值',
    gameName: '',
    userId: '',
    amount: '1,000',
    positive: true,
    time: '22:56',
    chipAmount: '55,555,555',
  },
  {
    kind: 'out',
    type: '回收',
    gameName: '',
    userId: '',
    amount: '1,000',
    positive: false,
    time: '22:56',
    chipAmount: '55,555,555',
  },
]
</script>

<template>
  <div class="screen">
    <AppBar title="钱包" :show-actions="false">
      <template #actions>
        <span />
      </template>
    </AppBar>

    <div class="content">
      <UserCard
        variant="expanded"
        :avatar="$base + 'avatars/ava2.png'"
        name="Carter Torff"
        user-id="8677650585"
        balance="123,456,78"
      />

      <div class="list">
        <TransactionItem v-for="(tx, i) in transactions" :key="i" v-bind="tx" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.screen {
  min-height: 100vh;
  min-height: 100dvh;
}

.content {
  padding: clamp(6px, 2vw, 10px) clamp(14px, 4.55vw, 17px) clamp(20px, 6.4vw, 28px);
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 3.1vw, 12px);
}

.list {
  display: flex;
  flex-direction: column;
  gap: clamp(6px, 2.15vw, 8px);
}
</style>

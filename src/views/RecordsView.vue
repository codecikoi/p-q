<script setup>
import { ref } from 'vue'
import { useRouter, RouterView } from 'vue-router'

import AppBar from '../components/AppBar.vue'
import TogglePillGroup from '../components/TogglePillGroup.vue'
import RecordItem from '../components/RecordItem.vue'

const router = useRouter()
const activeTab = ref(0)

const records = Array.from({ length: 5 }, (_, i) => ({
  id: `rec-${i + 1}`,
  type: '充值联盟币',
  amount: 500,
  payAmount: 500,
  time: '25/12/11 11:07',
  status: '取消申请',
}))

function open(id) {
  router.push(`/records/${id}`)
}
</script>

<template>
  <div class="screen">
    <AppBar title="记录" :show-actions="false">
      <template #actions>
        <TogglePillGroup
          :tabs="['充值记录', '回收记录']"
          v-model="activeTab"
        />
      </template>
    </AppBar>

    <div class="list">
      <RecordItem
        v-for="r in records"
        :key="r.id"
        v-bind="r"
        @click="open(r.id)"
      />
    </div>

    <RouterView v-slot="{ Component }">
      <component :is="Component" v-if="Component" />
    </RouterView>
  </div>
</template>

<style scoped>
.screen {
  min-height: 100vh;
  min-height: 100dvh;
}

.list {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 2.7vw, 10px);
  padding: clamp(6px, 2vw, 10px) clamp(14px, 4.55vw, 17px) clamp(20px, 6.4vw, 28px);
}
</style>

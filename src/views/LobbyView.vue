<script setup>
import { ref, computed, watch } from 'vue'
const b = import.meta.env.BASE_URL
import AppBar from '../components/AppBar.vue'
import TabPage from '../components/TabPage.vue'
import GameRow from '../components/GameRow.vue'
import PokerTableGrid from '../components/PokerTableGrid.vue'

const tabs = ['全部', '德州', '奥马哈', '6+']
const activeTab = ref(0)
const expandedKey = ref('')

function toggleRow(t, i) {
  const key = `${t}-${i}`
  expandedKey.value = expandedKey.value === key ? '' : key
}

const mockTables = [
  { name: 'Poker Game Name', playerCount: '7/9', duration: '1h30m/2h', buyIn: '20000买入', deco: b + 'img_mashroom.png' },
  { name: 'Poker Game Name', playerCount: '6/8', duration: '1h30m/2h', buyIn: '20000买入', deco: b + 'img_box_glove.png' },
  { name: 'Poker Game Name', playerCount: '4/6', duration: '1h30m/2h', buyIn: '20000买入', deco: b + 'img_black_cards.png' },
  { name: 'Poker Game Name', playerCount: '4/6', duration: '1h30m/2h', buyIn: '20000买入' },
]

const allGames = [
  { image: b + 'images/img_two_purple.png', label: '德州扑克', blinds: '100/200', tables: '306桌', players: '3406人' },
  { image: b + 'images/img_two_blue.png', label: '短牌', blinds: '100/200', tables: '306桌', players: '3406人' },
  { image: b + 'images/img_four_cards.png', label: '奥马哈', blinds: '100/200', tables: '306桌', players: '3406人' },
  { image: b + 'images/img_two_purple.png', label: '德州扑克', blinds: '200/400', tables: '152桌', players: '1820人' },
  { image: b + 'images/img_two_blue.png', label: '短牌', blinds: '200/400', tables: '98桌', players: '970人' },
  { image: b + 'images/img_four_cards.png', label: '奥马哈', blinds: '200/400', tables: '210桌', players: '2540人' },
]

const texasGames = [
  { image: b + 'images/img_two_purple.png', label: '德州扑克', blinds: '100/200', tables: '306桌', players: '3406人' },
  { image: b + 'images/img_two_purple.png', label: '德州扑克', blinds: '200/400', tables: '152桌', players: '1820人' },
]

const omahaGames = [
  { image: b + 'images/img_four_cards.png', label: '奥马哈', blinds: '100/200', tables: '210桌', players: '2540人' },
  { image: b + 'images/img_four_cards.png', label: '奥马哈', blinds: '200/400', tables: '130桌', players: '1680人' },
  { image: b + 'images/img_four_cards.png', label: '奥马哈', blinds: '500/1000', tables: '76桌', players: '920人' },
  { image: b + 'images/img_four_cards.png', label: '奥马哈', blinds: '1000/2000', tables: '42桌', players: '510人' },
  { image: b + 'images/img_four_cards.png', label: '奥马哈', blinds: '2000/4000', tables: '28桌', players: '340人' },
]

const sixPlusGames = [
  { image: b + 'images/img_two_blue.png', label: '短牌', blinds: '100/200', tables: '98桌', players: '970人' },
  { image: b + 'images/img_two_blue.png', label: '短牌', blinds: '200/400', tables: '56桌', players: '620人' },
  { image: b + 'images/img_two_blue.png', label: '短牌', blinds: '500/1000', tables: '32桌', players: '380人' },
]

const tabGames = [allGames, texasGames, omahaGames, sixPlusGames]

const currentGames = computed(() => tabGames[activeTab.value])

watch(activeTab, () => {
  expandedKey.value = ''
})
</script>

<template>
  <AppBar style="margin-bottom: 13px" />
  <TabPage :tabs="tabs" v-model="activeTab">
    <template v-for="(game, i) in currentGames" :key="activeTab + '-' + i">
      <div v-if="i > 0" class="divider" />
      <GameRow
        v-bind="game"
        :expanded="expandedKey === `${activeTab}-${i}`"
        @toggle="toggleRow(activeTab, i)"
      >
        <template #expand>
          <PokerTableGrid :tables="mockTables" />
        </template>
      </GameRow>
      <template v-if="i === currentGames.length - 1">
        <div class="divider" />
        <div style="height: 20px" />
      </template>
    </template>
  </TabPage>
</template>

<style scoped>
.divider {
  height: 0.6px;
  margin: 0 clamp(20px, 6.93vw, 28px);
  background: rgba(255, 255, 255, 1);
}
</style>

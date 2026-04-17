<script setup>
defineProps({
  avatar: { type: String, default: '' },
})
</script>

<template>
  <div class="seat" :class="avatar ? 'seat--filled' : 'seat--empty'">
    <img v-if="avatar" :src="avatar" alt="" class="seat__img" />
    <img v-else src="/avatars/no_user.svg" alt="" class="seat__no-user" />
  </div>
</template>

<style scoped>
.seat {
  width: clamp(20px, 6.13vw, 25px);
  height: clamp(20px, 6.13vw, 25px);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.seat--filled {
  border-radius: clamp(6px, 3.73vw, 15px);
}

.seat__img,
.seat__no-user {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
</style>

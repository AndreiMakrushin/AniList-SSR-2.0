<script setup lang="ts">
import { useAnimeStore } from "@/shared/stores/store";

const animeStore = useAnimeStore();

const page = ref(1);

const { pending, error } = useAsyncData(
  `anime-updates-page-${page.value}`,
  async () => {
    return await animeStore.fetchAnimeList(page.value, 10)
  },
  {
    watch: [page],
    server: true
  }
)
</script>

<template>
  <div>
    <Avatar />
    <!-- Состояние загрузки -->
    <div v-if="pending">Загрузка данных...</div>

    <!-- Обработка ошибки -->
    <div v-if="error" class="error">Ошибка при загрузке данных</div>

    <!-- Отображение данных -->
    <div v-else-if="animeStore.animeList">
      <div v-for="item in animeStore.animeList" :key="item.id" class="anime-item">
        {{ item.season.year }}
        {{ item.name.main ?? item.name.english }}
        <img :src="`https://anilibria.top${item.poster}`" alt="Poster" />
        {{ item.description.replace(/\r\n/g, "\n") }}

        <!-- Другие поля -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
.anime-item {
  margin-bottom: 1rem;
}
</style>

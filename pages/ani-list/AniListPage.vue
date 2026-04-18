<script setup lang="ts">
import AnimeGrid from "@/shared/components/layouts/anime-grid/AnimeGrid.vue";
import { useAnimeList } from "./composables/useAnimeList";

const { page, fetchAnimeList, animeList, error } = useAnimeList();

onMounted(async () => {
  await fetchAnimeList(page.value, 10);
});

const goPageAnime = (id: number) => {
  navigateTo(`/anime/${id}/1`);
};

const loadMore = async () => {
  page.value++;
  await fetchAnimeList(page.value, 10);
};
</script>

<template>
  <div class="flex flex-col items-center pb-5 gap-3">
    <div v-if="error" class="flex w-full h-full items-center justify-center">
      <img src="@/shared/assets/image/noAnime.png" class="rounded-lg max-h-[500px]" />
    </div>

    <AnimeGrid>
      <AnimeCard
        v-for="(animeCard, index) in animeList"
        :key="index"
        :anime="animeCard"
        :style="{ 'transition-delay': `${index * 0.1}s` }"
        @click="animeCard.id ? goPageAnime(animeCard.id) : null"
      ></AnimeCard
    ></AnimeGrid>

    <Button
      label="Загрузить еще"
      class="text-white text-base !w-fit !p-3 cursor-pointer"
      @click="loadMore"
    />
  </div>
</template>

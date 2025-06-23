<script setup lang="ts">
import { useAnimeStore } from "@/shared/stores/store";
import AnimeGrid from "@/shared/components/layouts/anime-grid/AnimeGrid.vue";

const animeStore = useAnimeStore();

const page = ref(1);

const { pending, error } = useAsyncData(
  `anime-updates-page-${page.value}`,
  async () => {
    return await animeStore.fetchAnimeList(page.value, 10);
  },
  {
    watch: [page],
    server: true,
  }
);

const goPageAnime = (id: number) => {
  console.log(id);

  navigateTo(`/anime/${id}/1`);
};

const loadMore = async () => {
  page.value++;
};
</script>

<template>
  <div class="flex flex-col items-center pb-5 gap-3">
    <div v-if="!pending && error" class="flex w-full h-full items-center justify-center">
      <img src="@/shared/assets/image/noAnime.png" class="rounded-lg max-h-[500px]" />
    </div>

    <AnimeGrid v-else>
      <AnimeCard
        v-for="(animeCard, index) in animeStore.animeList"
        :key="index"
        :anime="animeCard"
        :style="{ 'transition-delay': `${index * 0.1}s` }"
        @click="animeCard.id ? goPageAnime(animeCard.id) : null"
      ></AnimeCard
    ></AnimeGrid>

    <Button
      v-if="animeStore.animeList && !pending"
      label="Загрузить еще"
      class="text-white text-base !w-fit !p-3 cursor-pointer"
      @click="loadMore"
    />
  </div>
</template>

<script setup lang="ts">
import type { IAnimeCard } from "@/shared/types";

defineProps<{
  anime: IAnimeCard | null;
}>();
</script>

<template>
  <article class="flex flex-col items-center gap-3 cursor-pointer w-full">
    <div class="relative w-full aspect-[3/4.248] rounded-[15px] overflow-hidden">
      <img
        :src="anime?.poster"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
      />

      <div
        class="flex scrollbar max-mobile:hidden flex-col gap-3 absolute z-20 top-0 p-4 overflow-y-auto left-0 w-full h-full hover:bg-cardOpacity hover:text-white duration-300 text-transparent"
      >
      <span v-text="anime?.description" />

        <span>Дата выхода: {{ anime?.season.description }} - {{ anime?.year }}</span>
      </div>
    </div>

    <div class="flex flex-col items-center w-full min-h-6">
     
      <h2
        class="font-medium w-full text-white whitespace-nowrap text-ellipsis overflow-hidden"
      >
        {{ anime?.name?.main ?? anime?.name?.english }}
      </h2>
    </div>
  </article>
</template>

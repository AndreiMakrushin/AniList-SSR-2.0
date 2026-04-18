<script setup lang="ts">
import AnimePage from '@/pages/anime';
import { useRoute } from 'vue-router';

const route = useRoute();

const idAnime = route.params.id as string;
const episode = route.params.episode as string;
</script>

<template>
    <div>
        <AnimePage :id-anime="idAnime" :episode="episode"/>
    </div>
</template>

<style scoped>

</style>
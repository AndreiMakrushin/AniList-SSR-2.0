<script setup lang="ts">
import { useApi } from "@/shared/composables/useApi";
import { useStorage } from "@vueuse/core";
import { jwtDecode } from "jwt-decode";
import type { UserDto } from "~/api-client/Api";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";
import { useAnimeStore } from "@/shared/stores/store";

const { User } = useApi();
const token = useStorage<string | null>("access_token", null);
const store = useAnimeStore();

onMounted(async () => {
  if (!token.value) return;
  const decodedToken = jwtDecode<UserDto>(token.value);
    console.log(decodedToken);
  if (!decodedToken.id) return;
  const user = await User.getUser(decodedToken.id);
  store.user = user.data;
});

const goPageLK = () => {
  navigateTo(`/lk/${store.user?.id}/history`);
};
const logout = async () => {
  store.user = null;
};
</script>

<template>
  <div class="app-layout font-manropeM">
    <Header :user="store.user" @go-page-l-k="goPageLK" @logout="logout"/>

    <div class="max-w-[1440px] mx-auto"><slot /></div>

    <Footer />
  </div>
</template>

<style scoped>
.app-layout {
  background-image: url("@/shared/public/images/bg.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  scroll-behavior: smooth;
}
</style>

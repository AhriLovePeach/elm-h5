<script setup lang="ts">
import TabsView from "./views/tabs/TabsView.vue";
import fetchTest from "@/api/test";
fetchTest()
</script>

<template>
  <TabsView></TabsView>
</template>

<style>
@import 'normalize.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

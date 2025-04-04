<script setup lang="ts">
import TabsView from "./views/tabs/TabsView.vue";
import fetchTest from "@/api/test";
fetchTest()
</script>

<template>
  <TabsView></TabsView>
</template>

<style scoped></style>

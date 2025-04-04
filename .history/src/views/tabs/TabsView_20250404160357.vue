<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from "vue";
const route = useRoute()
const router = useRouter()
const activeRef = ref(route.name as string)
watch(activeRef, (newName) => {
    router.push({
        name: newName
    })
});
</script>
<template>
    <RouterView />
    <VanTabbar v-model="activeRef">
        <VanTabbarItem name="home" icon="home-o">首页</VanTabbarItem>
        <VanTabbarItem name="order" icon="bars">订单</VanTabbarItem>
        <VanTabbarItem name="me" icon="contact">我的</VanTabbarItem>
    </VanTabbar>
</template>
<style>
.tit {
    text-align: center;
}
</style>
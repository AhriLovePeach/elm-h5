<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
// import { Tabbar, TabbarItem } from 'vant';
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
    <VantTabbar v-model="activeRef">
        <VantTabbarItem name="home" icon="home-o">首页</VantTabbarItem>
        <VantTabbarItem name="order" icon="bars">订单</VantTabbarItem>
        <VantTabbarItem name="me" icon="contact">我的</VantTabbarItem>
    </VantTabbar>
</template>
<style>
.tit {
    text-align: center;
}
</style>
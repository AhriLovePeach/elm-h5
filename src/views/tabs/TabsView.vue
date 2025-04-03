<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant';
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
    <Tabbar v-model="activeRef">
        <TabbarItem name="home" icon="home-o">首页</TabbarItem>
        <TabbarItem name="order" icon="bars">订单</TabbarItem>
        <TabbarItem name="me" icon="contact">我的</TabbarItem>
    </Tabbar>
</template>
<style>
.tit {
    text-align: center;
}
</style>
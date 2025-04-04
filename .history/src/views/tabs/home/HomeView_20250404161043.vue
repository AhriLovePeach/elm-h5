<script setup lang="ts">
import TheTop from './components/TheTop.vue'
const recommends = [
    {
        value: 1,
        label: '西红柿炒鸡蛋',
    },
    {
        value: 2,
        label: '西蓝花炒鸡蛋',
    },
    {
        value: 3,
        label: '西芹炒鸡蛋',
    },
    {
        value: 4,
        label: '西瓜炒鸡蛋',
    }
]
</script>
<template>
    <TheTop :recommends="recommends" />
</template>
<style></style>
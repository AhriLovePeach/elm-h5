<script setup lang="ts">
import TheTop from './components/TheTop.vue'
const recommends = [
    {
        value: 1,
        label: '西红柿',
    },
    {
        value: 2,
        label: '西蓝花',
    },
    {
        value: 3,
        label: '西芹',
    },
    {
        value: 4,
        label: '西瓜',
    }
]
</script>
<template>
    <div class="home-view">
        <TheTop :recommends="recommends" />
    </div>
</template>
<style></style>
<script setup lang="ts">
import TheTop from './components/TheTop.vue'
const recommends = [
    {
        value: 1,
        label: '建邺城二期',
    },
    {
        value: 1,
        label: '建邺城二期',
    },
    {
        value: 1,
        label: '建邺城二期',
    },
    {
        value: 1,
        label: '建邺城二期',
    }
]
</script>
<template>
    <TheTop :recommends="recommends" />
</template>
<style></style>
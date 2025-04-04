<script setup lang="ts">

</script>
<template>
    <div class="home-top">
        <div class="top">
            <van-icon name="location-o" />
            <span>建邺城二期</span>
            <van-icon name="cart-o" color="#1989fa" />
            <van-icon name="chat-o" color="#1989fa" badge="99+" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.home-top {
    background-image: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%);
    color: #ffffff;

    .top {
        display: flex;
        text-align: center;
        padding: 10px 10px 0 10px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
    }
}
</style>
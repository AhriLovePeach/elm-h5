<script setup lang="ts">

</script>
<template>
    <div class="home-top">
        <div class="top">
            <van-icon name="location-o" size="24" />
            <span class="location">建邺城二期</span>
            <van-icon name="cart-o" size="24" color="#1989fa" />
            <van-icon class="chat" name="chat-o" size="24" color="#1989fa" badge="99+" />
        </div>
        <van-search shape="round" background="linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%)"
            placeholder="大头冰糕买5赠2">
            <template #action-icon>
                <div>搜索</div>
            </template>
        </van-search>
        <van-search show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
            <template #action>
                <div>搜索</div>
            </template>
        </van-search>
    </div>
</template>
<style lang="scss" scoped>
.home-top {
    background: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%);
    color: #ffffff;

    .top {
        display: flex;
        text-align: center;
        padding: 10px 10px 0 10px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;

        .location {
            flex: 1;
        }

        .chat {
            margin-left: 10px;
        }
    }
}
</style>
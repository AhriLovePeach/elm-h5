<script setup lang="ts">
interface IProps {
    recommends:
    {
        value: number,
        label: string
    }[]
}
defineProps<IProps>()
</script>
<template>
    <div class="home-top">
        <div class="top">
            <van-icon name="location-o" size="24" />
            <span class="location">建邺城二期</span>
            <van-icon name="cart-o" size="24" color="#1989fa" />
            <van-icon class="chat" name="chat-o" size="24" color="#1989fa" badge="99+" />
        </div>
        <div class="search-box">
            <van-search shape="round" background="linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%)"
                placeholder="大头冰糕买5赠2" />
            <van-button class="search-btn" size="small" type="default">搜索</van-button>
        </div>
        <div class="recommend-box">
            <span class="recommend-tag" v-for="item in recommends" :key="item.value">{{ item.label }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.home-top {
    background: linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%);
    color: #ffffff;

    .top {
        display: flex;
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

    .search-box {
        position: relative;

        .search-btn {
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            z-index: 1;
            color: #f2f2f2;
            border: none;
            background: none;
        }
    }

    .recommend-box {
        display: flex;
        padding: 0 10px 8px;

        .recommend-tag {
            margin-right: 10px;
            padding: 2px 8px;
            font-size: 12px;
            border-radius: 10px;
            background: rgb(242, 242, 242, 0.3);
        }
    }
}
</style>
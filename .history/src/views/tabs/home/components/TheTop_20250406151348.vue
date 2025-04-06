<script setup lang="ts">
import OpSearch from '@/components/OpSearch.vue';
import type { ISeachRecommend } from '@/types'
import { on } from 'events';
import { ref } from 'vue';
interface IProps {
    recommends: ISeachRecommend[]
}
defineProps<IProps>()
const searchValue = ref('碧桂园1')
const onSearch = (value?: string | number) => {
    if (value !== undefined) {
        console.log('onSearch', value);
    }
}
const onClear = () => {
    console.log('onClear');
}
const onCancel = () => {
    console.log('onCancel');
}
</script>
<template>
    <div class="home-top">
        <div class="top">
            <van-icon name="location-o" size="20" />
            <span class="location">建邺城二期</span>
            <van-icon name="cart-o" size="20" />
            <van-icon class="chat" name="chat-o" size="20" badge="99+" />
        </div>
        <!-- <div class="search-box">
            <van-search shape="round" background="linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%)"
                placeholder="大头冰糕买5赠2" />
            <van-button class="search-btn" size="small" type="default">搜索</van-button>
        </div> -->
        <OpSearch v-model="searchValue" shape="round" show-action
            background="linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%)" placeholder="大头冰糕买5赠2"
            @search="onSearch" @clear="onClear" @cancel="onCancel">
            <van-button class="search-btn" size="small" type="default">搜索</van-button>
        </OpSearch>

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
        align-items: center;
        padding: 10px 10px 0 10px;

        .location {
            flex: 1;
            font-size: 16px;
            font-weight: 500;
        }

        .chat {
            margin-left: 10px;
            margin-right: 10px;
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
            color: #ccc;
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
<script setup lang="ts">
import { ref, toRefs, reactive, defineProps } from 'vue'

defineProps<{
  msg: string

}>()
// console.log('setup')
// onBeforeMount(() => {
//   console.log('onBeforeMount');
// })
// onMounted(() => {
//   console.log('onMounted');
// })
// onBeforeUpdate(() => {
//   console.log('onBeforeUpdate');
// })
// onUpdated(() => {
//   console.log('onUpdated');
// })
// onBeforeUnmount(() => {
//   console.log('onBeforeUnmount');
// })
// onUnmounted(() => {
//   console.log('onUnmounted');
// })
const msgRef = ref('aaaa')
const msg2 = reactive({
  age: 22,
  name: '大虎'
})
const { age, name } = toRefs(msg2)

function checkBtn() {
  msgRef.value = msgRef.value + Date.now()
  msg2.age++
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1 class="green">{{ msgRef }}</h1>
    <h1 class="green">{{ age }}</h1>
    <h1 class="green">{{ name }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <button type="button" @click="checkBtn">change msg</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

<script setup>
import { hello, name } from '../utils/useHome'
import { count, increment } from '../utils/useCounter'

import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()

</script>

<template>
    <div class="p-5">
        <h1>Home</h1>

        <input v-model="name" type="text" placeholder="Enter name" class="rounded ring-1" />

        <p>{{ hello }}</p>

        <div class="bg-red-500 p-5">
            <p>using useCounter composables</p>
            <h1 class="text-2xl">{{ count }}</h1>
            <button @click="increment" class="px-5 py-2 roundeded-lg bg-gray-800 text-white">+</button>
        </div>

        <div class="bg-blue-500 my-5 p-5">
                <p>using useCounterStore from pinia</p>
            <h1 class="text-2xl">{{ counterStore.count }}</h1>
            <button @click="counterStore.increment" class="px-5 py-2 roundeded-lg bg-gray-800 text-white">+</button>
        </div>


        <router-link :to="{ name: 'about' }" class="text-blue-500">
            <span>About</span>
        </router-link>
    </div>
</template>

<style scoped>

</style>

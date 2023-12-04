<script setup>
import { count } from '../utils/useCounter'

import { useCounterStore } from '../stores/counter'
const counterStore = useCounterStore()

</script>

<template>
    <div>
        <h1>About</h1>

        <p class="mb-5 bg-red-500 text-white">{{ count }}</p>

        <p class="mb-5 bg-blue-500 text-white">{{ counterStore.count }}</p>

        <router-link :to="{ name: 'home' }" class="text-blue-500">
            <span>Home</span>
        </router-link>
    </div>
</template>
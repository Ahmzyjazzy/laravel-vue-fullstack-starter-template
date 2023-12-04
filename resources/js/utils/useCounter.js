import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
function increment() {
    count.value++
}

export {
    count,
    doubleCount,
    increment
}
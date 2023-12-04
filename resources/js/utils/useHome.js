import { ref, computed } from 'vue'

const name = ref('')

const hello = computed(() => `Hello ${name.value}`)

export {
    name,
    hello
}
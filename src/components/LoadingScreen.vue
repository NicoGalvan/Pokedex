<script setup>
import loader from "@/assets/loader.svg";
import { usePokemons } from "@/composables/usePokemons"
const { isLoading } = usePokemons()
</script>
<template>
    <div v-if="isLoading" class="loading-screen bg-white-light">
        <div class="loading-content">
            <img :src="loader" alt="Loading" class="rotate-animation" />
        </div>
    </div>
</template>
<style scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loading-content img {
    width: 100px;
    height: auto;
}

.rotate-animation {
    animation: rotate 1s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

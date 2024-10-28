<script setup>
import goBack from "@/assets/goBack.svg";
import { usePokemons } from "@/composables/usePokemons"
const { sendToHome } = usePokemons()
</script>
<template>
    <div class="flex flex-col items-center">
        <span class="text-4xl text-gray-dark font-bold">
            Uh-oh!
        </span>
        <span class="text-gray text-xl mt-2.5">
            You look lost on your journey!
        </span>
        <img @click="sendToHome()" :src="goBack" class="mt-[25px] cursor-pointer" alt="go back home" />
    </div>
</template>
<script setup>
import PikachuImage from "@/components/PikachuImage.vue"
import StartedButton from "@/assets/startedButton.svg";

import { useRouter } from 'vue-router'

const router = useRouter()

const sendToList = () => {
    router.push('/list')
}
</script>
<template>
    <div class="w-full h-full flex items-center flex-col">
        <PikachuImage class="mt-[70px]" />
        <span class="mt-[60px] text-[26px] text-gray-dark font-bold">Welcome to Pokédex</span>
        <span class="mt-[30px] mx-[30px] lg:w-[569px] text-center text-lg font-medium text-gray">The digital encyclopedia created by
            Professor Oak is an invaluable tool to Trainers in the Pokémon world.</span>
        <img @click="sendToList()" class="mt-[50px] cursor-pointer" :src="StartedButton" alt="Get started" />
    </div>
</template>


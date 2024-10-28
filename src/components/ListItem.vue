<script setup>
import favoriteOff from "@/assets/favoriteOff.svg";
import favoriteOn from "@/assets/favoriteOn.svg";
import { computed } from "vue";
const props = defineProps({
    name: String,
    favorite: Boolean,
})
const favoriteImage = computed(() => (props.favorite ? favoriteOn : favoriteOff));
const emit = defineEmits(['setfavorite'])
</script>
<template>
    <div class="flex justify-between items-center bg-[#FFFFFF] h-[60px] px-5 rounded-[5px]">
        <span class="text-[22px] text-gray-dark">
            {{ name }}
        </span>
        <img class="cursor-pointer" @click.stop="emit('setfavorite')" :src="favoriteImage" alt="Toggle favorite status" />
    </div>
</template>
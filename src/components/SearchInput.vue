<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: String,
});

const emit = defineEmits(['update:modelValue']);
</script>
<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" placeholder="search"
        class="font-buscador text-base text-gray-dark font-medium shadow-[0_2px_10px_0px_#0000000A]
        rounded-[5px] py-4 pl-[43px] pr-[15px] focus:outline-gray-light" />
</template>
<style scoped>
input {
    background: white url("../assets/searchIcon.svg") no-repeat 15px center;
}
</style>
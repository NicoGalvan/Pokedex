<template>
    <div v-if="label && value" class="h-[47px] border-b border-white-dark flex items-center">
        <span class="font-bold text-lg text-gray">
            {{ label }}: <span class="font-medium">{{ value }}</span>
        </span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    value: {
        type: [String, Number],
        required: true
    }
});
</script>
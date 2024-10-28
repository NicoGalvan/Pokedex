<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
            <img @click="closeModal" :src="close" alt="close" class="close-button" />
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import close from "@/assets/close.svg";

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close']);

function closeModal() {
    emit('close');
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 570px;
    height: 506px;
    /* text-align: center; */
}

.close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    z-index: 50;
}
</style>

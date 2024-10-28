<script setup>
import LoadingScreen from "@/components/LoadingScreen.vue"
</script>
<template>
    <div class="font-sans min-h-screen bg-white-light h-full">
        <RouterView />
        <LoadingScreen />
    </div>
</template>
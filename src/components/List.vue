<template>
    <div class="overflow-y-auto">
        <div class="flex flex-col gap-2.5">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.overflow-y-auto {
    scrollbar-width: none; 
}
.overflow-y-auto::-webkit-scrollbar {
    display: none; 
}
</style>
<script setup>
import ellipseSrc from "@/assets/Ellipse10.svg";
import pikachuSrc from "@/assets/welcomePikachu.svg";
</script>
<template>
  <div class="relative w-[325px] h-[288px]">
    <img
      :src="ellipseSrc"
      class="absolute ml-[47px] mt-[67px] z-10"
      alt="Ellipse background"
    />
    <img :src="pikachuSrc" class="absolute z-20" alt="Pikachu" />
  </div>
</template>
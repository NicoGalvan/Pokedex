<script setup>
import allActive from "@/assets/allActive.svg";
import allDisabled from "@/assets/allDisabled.svg";
import favActive from "@/assets/favActive.svg";
import favDisabled from "@/assets/favDisabled.svg";
import allActiveMobile from "@/assets/mobile/allActiveMobile.svg";
import allDisabledMobile from "@/assets/mobile/allDisabledMobile.svg";
import favActiveMobile from "@/assets/mobile/favActiveMobile.svg";
import favDisabledMobile from "@/assets/mobile/favDisabledMobile.svg";
import { usePokemons } from "@/composables/usePokemons"
const { allPokemons, changeShowAllPokemons } = usePokemons()

</script>
<template>
    <footer class="bg-[#FFFFFF] h-[80px] w-full shadow-[0_-5px_4px_0_#0000000D] flex justify-center items-center">
        <div class="hidden lg:flex justify-center gap-3 lg:gap-5 items-center">
            <img :src="allPokemons ? allActive : allDisabled" class="cursor-pointer"
                :alt="allPokemons ? 'all active' : 'all disabled'" @click="!allPokemons ? changeShowAllPokemons() : null" />
            <img :src="allPokemons ? favDisabled : favActive" class="cursor-pointer"
                :alt="allPokemons ? 'favorites disabled' : 'favorites active'"
                @click="allPokemons ? changeShowAllPokemons() : null" />
        </div>
        <div class="lg:hidden flex justify-center gap-3 lg:gap-5 items-center ">
            <img :src="allPokemons ? allActiveMobile : allDisabledMobile" class="cursor-pointer"
                :alt="allPokemons ? 'all active' : 'all disabled'" @click="!allPokemons ? changeShowAllPokemons() : null" />
            <img :src="allPokemons ? favDisabledMobile : favActiveMobile" class="cursor-pointer"
                :alt="allPokemons ? 'favorites disabled' : 'favorites active'"
                @click="allPokemons ? changeShowAllPokemons() : null" />
        </div>
    </footer>
</template>
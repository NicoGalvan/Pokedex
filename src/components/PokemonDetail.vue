<script setup>
import background from "@/assets/background.svg";
import share from "@/assets/share.svg";
import favoriteOn from "@/assets/favoriteOn.svg";
import favoriteOff from "@/assets/favoriteOff.svg";
import InfoRow from "@/components/InfoRow.vue"
import { usePokemons } from "@/composables/usePokemons"
import { computed } from "vue";
const { checkFavoritePokemon } = usePokemons()

const props = defineProps({
    pokemon: {
        type: Object,
        required: true
    }
});

const copyToClipboard = () => {
    const textToCopy = `Name: ${props.pokemon.name}, Weight: ${props.pokemon.weight}, Height: ${props.pokemon.height}, Types: ${pokemonTypes.value}`;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Texto copiado:', textToCopy);
        })
        .catch(err => {
            console.error('No se pudo copiar el texto: ', err);
        });
};

const pokemonTypes = computed(() => {
    return props.pokemon.types.map(type => type.type.name).join(', ');
});
</script>
<template>
    <div class="relative h-[220px] flex items-center justify-center">
        <img class="absolute z-10 w-full h-full object-cover" :src="background" alt="background" />
        <img class="z-20 w-[180px] h-[180px]" :src="pokemon.image" alt="pokemon" />
    </div>
    <div class="mx-[30px] mt-[10px]">
        <InfoRow label="Name" :value="pokemon.name" />
        <InfoRow label="Weight" :value="pokemon.weight" />
        <InfoRow label="Height" :value="pokemon.height" />
        <InfoRow label="Types" :value="pokemonTypes" />

        <div class="mt-5 flex items-center justify-between">
            <img @click="copyToClipboard()" class="cursor-pointer" :src="share" alt="share" />
            <img class="cursor-pointer" :src="pokemon.favorite ? favoriteOn : favoriteOff"
                @click="checkFavoritePokemon(pokemon)" alt="toggle favorite" />
        </div>
    </div>
</template>
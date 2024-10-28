<script setup>
import SearchInput from "@/components/SearchInput.vue"
import NotFound from "@/components/NotFound.vue"
import List from "@/components/List.vue"
import ListItem from "@/components/ListItem.vue"
import SwitchFooter from "@/components/SwitchFooter.vue"
import ModalComponent from "@/components/ModalComponent.vue"
import { usePokemons } from "@/composables/usePokemons"
import { computed, onMounted, ref } from "vue"
import PokemonDetail from "../components/PokemonDetail.vue"

const { pokemons, getPokemons, getPokemonDetail, search, checkFavoritePokemon, allPokemons, pokemonDetail } = usePokemons()

const modal = ref(false)

const filteredPokemons = computed(() => {
    const searchTerm = search.value.toLowerCase();

    return pokemons.value.filter(pokemon => {
        const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm);
        const isFavorite = allPokemons.value || pokemon.favorite;
        return matchesSearch && isFavorite;
    });
});

const openDetail = (pokemon) => {
    getPokemonDetail(pokemon)
    modal.value = true
}

onMounted(() => {
    getPokemons()
})
</script>
<template>
    <div class="flex flex-col min-h-screen w-full">
        <div class="flex-grow flex items-center flex-col">
            <SearchInput class="mt-[35px] w-[85%] lg:w-[570px] h-[50px]" v-model="search" />
            <List class="lg:w-[570px] w-[85%] mt-[40px] max-h-[70vh]">
                <ListItem v-for="(pokemon, index) in filteredPokemons" :key="index" :name="pokemon.name"
                    @setfavorite="checkFavoritePokemon(pokemon)" @click="openDetail(pokemon)"
                    :favorite="pokemon.favorite" />
            </List>
            <NotFound v-if="filteredPokemons.length == 0" class="mt-[50px]" />
        </div>
        <SwitchFooter v-if="filteredPokemons.length > 0" />
        <ModalComponent :isOpen="modal" @close="modal = false">
            <PokemonDetail :pokemon="pokemonDetail" />
        </ModalComponent>
    </div>
</template>

import { defineStore } from "pinia";
import { ref } from "vue";
import { getPokemons, getPokemonByName } from "@/services/pokemonService";

export const usePokemonStore = defineStore(
  "pokemonStore",
  () => {
    const pokemons = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const allPokemons = ref(true);
    const search = ref("");
    const pokemonDetail = ref({
      image: "",
      name: "",
      weight: "",
      height: "",
      types: [],
    });

    const loadPokemons = async () => {
      isLoading.value = true;
      error.value = null;
      try {
        const response = await getPokemons();
        pokemons.value = response.data.results;
      } catch (err) {
        error.value = err.message;
        console.error("Error loading pokemons:", err);
      } finally {
        isLoading.value = false;
      }
    };

    const loadPokemonDetail = async (pokemon) => {
      isLoading.value = true;
      error.value = null;
      try {
        const response = await getPokemonByName(pokemon.name);
        pokemonDetail.value = pokemon;
        pokemonDetail.value.image =
          response.data.sprites.other["official-artwork"].front_default;
        pokemonDetail.value.weight = response.data.weight;
        pokemonDetail.value.height = response.data.height;
        pokemonDetail.value.types = response.data.types;
      } catch (err) {
        error.value = err.message;
        console.error("Error loading pokemon detail:", err);
      } finally {
        isLoading.value = false;
      }
    };

    const changeShowAllPokemons = () => {
      allPokemons.value = !allPokemons.value;
    };

    const deleteFavoritePokemon = (pokemon) => {
      delete pokemon.favorite;
    };

    const setFavoritePokemon = (pokemon) => {
      pokemon.favorite = true;
    };

    const goHome = () => {
      search.value = "";
      allPokemons.value = true;
    };

    return {
      //data
      pokemons,
      isLoading,
      allPokemons,
      search,
      pokemonDetail,
      //functions
      loadPokemons,
      loadPokemonDetail,
      changeShowAllPokemons,
      deleteFavoritePokemon,
      setFavoritePokemon,
      goHome,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: "pokemonStore",
          storage: localStorage,
        },
      ],
    },
  }
);

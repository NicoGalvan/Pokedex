import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/pokemonStore";
import { useRouter } from "vue-router";

export const usePokemons = () => {
  const pokemonStore = usePokemonStore();
  const { pokemons, allPokemons, search, isLoading, pokemonDetail } = storeToRefs(pokemonStore);
  const router = useRouter();

  const getPokemons = async () => {
    if (pokemons.value.length > 0) return;
    pokemonStore.loadPokemons();
  };

  const getPokemonDetail = async (pokemon) => {
    pokemonStore.loadPokemonDetail(pokemon);
  };

  const changeShowAllPokemons = async () => {
    pokemonStore.changeShowAllPokemons();
  };

  const checkFavoritePokemon = (pokemon) => {
    if (pokemon.favorite) {
      pokemonStore.deleteFavoritePokemon(pokemon);
      return;
    }
    pokemonStore.setFavoritePokemon(pokemon);
  };

  const sendToHome = () => {
    pokemonStore.goHome();
    router.push("/");
  };


  return {
    //data
    pokemons,
    allPokemons,
    search,
    isLoading,
    pokemonDetail,
    // functions
    getPokemons,
    getPokemonDetail,
    changeShowAllPokemons,
    checkFavoritePokemon,
    sendToHome,
  };
};

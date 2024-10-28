import { usePokemons } from "@/composables/usePokemons";
import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { usePokemonStore } from "@/stores/pokemonStore";

describe("usePokemons", () => {
  let pokemonStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    pokemonStore = usePokemonStore();

    vi.spyOn(pokemonStore, "loadPokemons");
    vi.spyOn(pokemonStore, "loadPokemonDetail");
    vi.spyOn(pokemonStore, "setFavoritePokemon");
    vi.spyOn(pokemonStore, "deleteFavoritePokemon");
  });

  it("should initialize with default values", () => {
    const { pokemons, isLoading } = usePokemons();

    expect(pokemons.value).toEqual([]);
    expect(isLoading.value).toBe(false);
  });

  it("should load pokemons when getPokemons is called and pokemons array is empty", async () => {
    const { getPokemons } = usePokemons();

    await getPokemons();

    expect(pokemonStore.loadPokemons).toHaveBeenCalled();
  });

  it("should not load pokemons when getPokemons is called and pokemons array is not empty", async () => {
    pokemonStore.pokemons = [{ name: "Pikachu" }];
    const { getPokemons } = usePokemons();

    await getPokemons();

    expect(pokemonStore.loadPokemons).not.toHaveBeenCalled();
  });

  it("should load pokemon detail when getPokemonDetail is called", async () => {
    const pokemon = { name: "Pikachu" };
    const { getPokemonDetail } = usePokemons();

    await getPokemonDetail(pokemon);

    expect(pokemonStore.loadPokemonDetail).toHaveBeenCalledWith(pokemon);
  });

  it("should toggle allPokemons when changeShowAllPokemons is called", () => {
    const { changeShowAllPokemons } = usePokemons();

    const initialShowAll = pokemonStore.allPokemons;
    changeShowAllPokemons();

    expect(pokemonStore.allPokemons).toBe(!initialShowAll);
  });

  it("should set or delete favorite pokemon when checkFavoritePokemon is called", () => {
    const { checkFavoritePokemon } = usePokemons();
    const pokemon = { name: "Pikachu", favorite: false };

    checkFavoritePokemon(pokemon);
    expect(pokemonStore.setFavoritePokemon).toHaveBeenCalledWith(pokemon);

    pokemon.favorite = true;
    checkFavoritePokemon(pokemon);
    expect(pokemonStore.deleteFavoritePokemon).toHaveBeenCalledWith(pokemon);
  });
});

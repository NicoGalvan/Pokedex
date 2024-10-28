import axiosInstance from './axiosInstance';

export const getPokemons = () => axiosInstance.get('/pokemon');

export const getPokemonByName = (name) => axiosInstance.get(`/pokemon/${name}`);
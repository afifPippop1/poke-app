"use server";

import { env } from "@/constants/env";
import { Pokemon, PokemonSpecies } from "@/types/pokemon";

export async function getPokemonDetail(name: string): Promise<Pokemon> {
  const response = await fetch(`${env.pokemonApiUrl}/pokemon/${name}`);
  const result = await response.json();
  return result;
}

export async function getPokemonSpeciesDetail(
  name: string | number
): Promise<PokemonSpecies> {
  const response = await fetch(`${env.pokemonApiUrl}/pokemon-species/${name}`);
  const result = await response.json();
  return result;
}

export async function getEvolution(name: string) {
  const species = await getPokemonSpeciesDetail(name);
  const response = await fetch(species.evolution_chain.url);
  const result = await response.json();
  return result;
}

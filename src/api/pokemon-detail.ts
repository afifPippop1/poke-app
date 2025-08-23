"use server";

import { env } from "@/constants/env";
import { Pokemon, PokemonSpecies } from "@/types/pokemon";

export async function getPokemonDetail(name: string): Promise<Pokemon> {
  const response = await fetch(`${env.pokemonApiUrl}/pokemon/${name}`);
  const result = await response.json();
  return result;
}

export async function getPokemonSpeciesDetail(
  name: string
): Promise<PokemonSpecies> {
  const response = await fetch(`${env.pokemonApiUrl}/pokemon-species/${name}`);
  const result = await response.json();
  return result;
}

export async function getEvolution(id: number) {
  const response = await fetch(`${env.pokemonApiUrl}/evolution-chain/${id}`);
  const result = await response.json();
  return result;
}

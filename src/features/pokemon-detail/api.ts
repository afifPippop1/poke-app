"use server";

import { env } from "@/constants/env";
import { Pokemon, PokemonSpecies } from "@/types/pokemon";

export async function getPokemonDetail(id: string): Promise<Pokemon> {
  const response = await fetch(`${env.pokemonApiUrl}/pokemon/${id}`);
  const result = await response.json();
  return result;
}

export async function getPokemonSpeciesDetail(id: string): Promise<PokemonSpecies> {
  const response = await fetch(`${env.pokemonApiUrl}/pokemon-species/${id}`);
  const result = await response.json();
  return result;
}

export async function getEvolution(id: string) {
  const response = await fetch(`${env.pokemonApiUrl}/evolution-chain/${id}`);
  const result = await response.json();
  return result;
}
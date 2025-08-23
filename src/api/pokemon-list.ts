"use server";

import { env } from "@/constants/env";

type PokemonListItem = {
  name: string;
  url: string; // pokemon detail url
};

type PokemonListResult = {
  count: number;
  next: string; //next url
  previous: string; //previous url
  results: PokemonListItem[];
};

export async function getPokemonList(url: string): Promise<PokemonListResult> {
  const urlString = url ? url : `${env.pokemonApiUrl}/pokemon`;
  const response = await fetch(urlString);
  const result = (await response.json()) as PokemonListResult;
  return result;
}

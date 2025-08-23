"use server";

import { env } from "@/constants/env";
import { Pokemon } from "@/types/pokemon";

export async function getPokemonDetail(
  url: string = `${env.pokemonApiUrl}/pokemon`
): Promise<Pokemon> {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

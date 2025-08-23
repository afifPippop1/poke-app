import { typeColors } from "@/constants/typeColors";
import { Pokemon } from "@/types/pokemon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPokemonImageUrl(pokemon?: Pokemon | string) {
  if (!pokemon) return;
  if (typeof pokemon === "string") {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon}.png`;
  }
  return pokemon.sprites.other["official-artwork"].front_default;
}

export function getPokemonBackgroundColor(name: string) {
  return typeColors[name] || typeColors.normal;
}

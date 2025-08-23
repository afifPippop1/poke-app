import { typeColors } from "@/constants/typeColors";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPokemonImageUrl(id?: number) {
  if (!id) return;
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function getPokemonBackgroundColor(name: string) {
  return typeColors[name] || typeColors.normal;
}

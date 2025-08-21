"use client";

import { PokemonCard } from "../pokemon-card/PokemonCard";
import { usePokemonList } from "./usePokemonList";

export function PokemonList() {
  const { query } = usePokemonList();

  return (
    <div className="grid grid-cols-2 gap-4">
      {query.data?.results?.map(({ name, url }) => (
        <PokemonCard key={url} name={name} url={url} />
      ))}
    </div>
  );
}

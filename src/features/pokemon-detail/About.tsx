"use client";

import { useSpeciesDetail } from "@/hooks/useSpeciesDetail";
import { Pokemon } from "@/types/pokemon";

export function About({ pokemon }: { pokemon?: Pokemon }) {
  const { data: speciesData } = useSpeciesDetail(pokemon?.name);

  return (
    <div className="space-y-4 mt-4">
      <div className="flex">
        <span className="w-28 font-semibold">Species:</span>
        <span>
          {speciesData?.genera?.find((g) => g.language.name === "en")?.genus ||
            "N/A"}
        </span>
      </div>
      <div className="flex">
        <span className="w-28 font-semibold">Height:</span>
        <span>{pokemon ? `${pokemon.height / 10} m` : "N/A"}</span>
      </div>
      <div className="flex">
        <span className="w-28 font-semibold">Weight:</span>
        <span>{pokemon ? `${pokemon.weight / 10} kg` : "N/A"}</span>
      </div>
      <div className="flex">
        <span className="w-28 font-semibold">Abilities:</span>
        <span>
          {pokemon?.abilities
            .map((ability) => ability.ability.name)
            .join(", ") || "N/A"}
        </span>
      </div>
    </div>
  );
}

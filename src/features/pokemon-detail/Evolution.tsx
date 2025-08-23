import { getPokemonImageUrl } from "@/lib/utils";
import { EvolutionDetail } from "@/types/pokemon";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useEvolution } from "@/hooks/useEvolution";

function parseEvolutionChain(
  chain: EvolutionDetail
): { name: string; url: string }[] {
  const stages: { name: string; url: string }[] = [];
  let current: EvolutionDetail | undefined = chain;
  while (current) {
    stages.push({
      name: current.species.name,
      url: current.species.url,
    });
    current = current.evolves_to.length > 0 ? current.evolves_to[0] : undefined;
  }
  return stages;
}

function capitalize(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function Evolution({ id }: { id: number }) {
  const { data: chain } = useEvolution(id);
  if (!chain) {
    return null;
  }

  const stages = parseEvolutionChain(chain.chain);

  function getIdFromSpeciesUrl(url: string): number {
    const parts = url.split("/").filter(Boolean);
    return Number(parts[parts.length - 1]);
  }

  return (
    <div className="flex items-center justify-center space-x-6">
      {stages.map((stage, index) => {
        const id = getIdFromSpeciesUrl(stage.url);
        const imgUrl = getPokemonImageUrl(id);
        if (!imgUrl) return null;

        return (
          <React.Fragment key={stage.name}>
            <div className="flex flex-col items-center">
              <Image
                height={96}
                width={96}
                src={imgUrl}
                alt={stage.name}
                className="w-16 h-16 rounded-full shadow-md bg-white object-contain"
                style={{ backgroundColor: "#f8f8f8" }}
              />
              <span className="mt-2 text-sm font-medium">
                {capitalize(stage.name)}
              </span>
            </div>
            {index < stages.length - 1 && (
              <span className="text-2xl mx-2">{"\u2192"}</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

'use client';

import { PokemonDetail } from "@/features/pokemon-detail/PokemonDetail";
import { useParams } from "next/navigation";

export default function PokemonDetailPage() {
  const params = useParams<{ id: string }>();
  return <PokemonDetail name={params.id} />;
}

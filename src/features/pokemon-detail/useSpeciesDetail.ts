import { useQuery } from "@tanstack/react-query";
import { getPokemonSpeciesDetail } from "./api";

export function useSpeciesDetail(id: string) {
  const query = useQuery({
    queryKey: ["pokemon", "detail", "species", id],
    queryFn: () => getPokemonSpeciesDetail(id),

  });
  const data = query.data;

  return { data };
}

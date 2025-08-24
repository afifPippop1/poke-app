import { useQuery } from "@tanstack/react-query";
import { getPokemonSpeciesDetail } from "@/api/pokemon-detail";

export function useSpeciesDetail(id: string) {
  const query = useQuery({
    queryKey: ["pokemon", "detail", "species", id],
    queryFn: () => getPokemonSpeciesDetail(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const data = query.data;

  return { data };
}

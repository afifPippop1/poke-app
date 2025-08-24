import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "@/api/pokemon-detail";

export function usePokemonDetail(name: string) {
  const query = useQuery({
    queryKey: ["pokemon", "detail", name],
    queryFn: () => getPokemonDetail(name),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return query;
}

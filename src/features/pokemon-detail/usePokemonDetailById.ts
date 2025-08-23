import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "./api";

export function usePokemonDetailById(id: string) {
  const query = useQuery({
    queryKey: ["pokemon", "detail", id],
    queryFn: () => getPokemonDetail(id),
  });
  const data = query.data;

  return { data };
}

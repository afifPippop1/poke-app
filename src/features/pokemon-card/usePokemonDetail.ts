import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "./api";

export function usePokemonDetailByUrl(pokemonUrl: string) {
  const query = useQuery({
    queryKey: ["pokemon", "detail", pokemonUrl],
    queryFn: () => getPokemonDetail(pokemonUrl),
  });

  return { query };
}

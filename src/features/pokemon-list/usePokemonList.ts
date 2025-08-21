import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "./api";

export function usePokemonList() {
  const query = useQuery({
    queryKey: ["pokemon", "list"],
    queryFn: () => getPokemonList(),
  });

  return { query };
}

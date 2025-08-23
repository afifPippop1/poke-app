import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/api/pokemon-list";

export function usePokemonList() {
  const query = useInfiniteQuery({
    queryKey: ["pokemon", "list"],
    queryFn: ({ pageParam  }) => getPokemonList(pageParam),
    getNextPageParam: (lastPage) => lastPage.next ?? false,
    initialPageParam: '',
  });

  return query;
}

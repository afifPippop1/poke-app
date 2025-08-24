import { useQuery } from "@tanstack/react-query";
import { getEvolution } from "@/api/pokemon-detail";

export function useEvolution(id: number) {
  const query = useQuery({
    queryKey: ["pokemon", "detail", "evolution", id],
    queryFn: () => getEvolution(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,

  });
  const data = query.data;

  return { data };
}

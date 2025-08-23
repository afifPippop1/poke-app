import { useQuery } from "@tanstack/react-query";
import { getEvolution } from "@/api/pokemon-detail";

export function useEvolution(id: number) {
  const query = useQuery({
    queryKey: ["pokemon", "detail", "evolution", id],
    queryFn: () => getEvolution(id),

  });
  const data = query.data;

  return { data };
}

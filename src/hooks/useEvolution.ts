import { useQuery } from "@tanstack/react-query";
import { getEvolution } from "@/api/pokemon-detail";

export function useEvolution(name: string) {
  const query = useQuery({
    queryKey: ["pokemon", "detail", "evolution", name],
    queryFn: () => getEvolution(name),
    refetchOnMount: false,
    refetchOnWindowFocus: false,

  });
  const data = query.data;

  return { data };
}

import { useQuery } from "@tanstack/react-query";
import { getEvolution } from "./api";

export function useEvolution(id: string) {
  const query = useQuery({
    queryKey: ["pokemon", "detail", "evolution", id],
    queryFn: () => getEvolution(id),

  });
  const data = query.data;

  return { data };
}

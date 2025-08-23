import { Skeleton } from "@/components/ui/skeleton";

const SKELETON_ARRAY = Array(6).fill(null);

export function CardListSkeleton() {
  return SKELETON_ARRAY.map((_, index) => <CardSkeleton key={index} />);
}

export function CardSkeleton() {
  return <Skeleton className="relative rounded-lg py-2 h-32 overflow-hidden" />;
}

import { Tag } from "@/components/common/Tag";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { usePokemonDetail } from "@/hooks/usePokemonDetail";
import { isDesktop } from "@/lib/isDesktop";
import { getPokemonBackgroundColor, getPokemonImageUrl } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CardSkeleton } from "./PokemonCardSkeleton";

type PokemonCardProps = {
  name: string;
  onClick?: () => void;
};

export function PokemonCard({ name, onClick }: PokemonCardProps) {
  const { data, isFetching } = usePokemonDetail(name);
  const img = getPokemonImageUrl(data?.id);
  const types = data?.types || [];
  const router = useRouter();

  function handleRouteChange() {
    onClick?.();
    if (isDesktop()) {
      router.push(`/?pokemon=${name}`);
    } else {
      router.push(`/pokemon/${name}`);
    }
  }

  if (isFetching) return <CardSkeleton />;

  return (
    <Card
      className="relative rounded-lg py-2 h-32 overflow-hidden"
      style={{
        backgroundColor: getPokemonBackgroundColor(types?.[0]?.type.name),
      }}
      onClick={handleRouteChange}
    >
      <CardContent className="flex flex-col gap-2 p-2">
        <div className="z-10">
          <CardTitle className="text-white capitalize text-sm">
            {name}
          </CardTitle>
          <div className="flex flex-col gap-1 items-start">
            {types.map((type) => (
              <Tag key={type.slot}>{type.type.name}</Tag>
            ))}
          </div>
        </div>
        {!!img && (
          <Image
            src={img}
            alt={name}
            height={96}
            width={96}
            priority
            className="absolute bottom-2 right-2 h-[80%] z-0"
          />
        )}
      </CardContent>
    </Card>
  );
}

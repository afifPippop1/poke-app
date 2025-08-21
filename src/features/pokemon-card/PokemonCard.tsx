import { Tag } from "@/components/common/Tag";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { usePokemonDetail } from "./usePokemonDetail";
import { typeColors } from "@/constants/typeColors";

type PokemonCardProps = {
  name: string;
  url: string;
};

export function PokemonCard({ name, url }: PokemonCardProps) {
  const { query } = usePokemonDetail(url);
  const img = query.data?.sprites.other["official-artwork"].front_default;
  const types = query.data?.types || [];

  return (
    <Card
      className="relative rounded-lg py-2 h-32 overflow-hidden"
      style={{
        backgroundColor: typeColors[types?.[0]?.type.name] || typeColors.normal,
      }}
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
            className="absolute bottom-2 right-2 w-[55%] z-0"
          />
        )}
      </CardContent>
    </Card>
  );
}

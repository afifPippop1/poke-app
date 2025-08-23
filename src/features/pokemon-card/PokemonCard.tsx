import { Tag } from "@/components/common/Tag";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { getPokemonBackgroundColor, getPokemonImageUrl } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePokemonDetailByUrl } from "./usePokemonDetail";

type PokemonCardProps = {
  name: string;
  url: string;
};

export function PokemonCard({ name, url }: PokemonCardProps) {
  const { query } = usePokemonDetailByUrl(url);
  const img = getPokemonImageUrl(query.data?.id);
  const types = query.data?.types || [];
  const router = useRouter();

  return (
    <Card
      className="relative rounded-lg py-2 h-32 overflow-hidden"
      style={{
        backgroundColor: getPokemonBackgroundColor(types?.[0]?.type.name),
      }}
      onClick={() => router.push(`/pokemon/${query.data?.id}`)}
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

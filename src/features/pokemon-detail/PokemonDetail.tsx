"use client";

import { Tag } from "@/components/common/Tag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPokemonBackgroundColor, getPokemonImageUrl } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BaseStats } from "./BaseStats";
import { usePokemonDetailById } from "./usePokemonDetailById";
import { About } from "./About";
import { Evolution } from "./Evolution";
import { Moves } from "./Moves";

export function PokemonDetail() {
  const params = useParams<{ id: string }>();
  const { data } = usePokemonDetailById(params.id);
  const img = getPokemonImageUrl(data);
  const backgroundColor = getPokemonBackgroundColor(
    data?.types[0].type.name || ""
  );
  const types = data?.types || [];
  const stats = data?.stats || [];

  return (
    <div className="h-screen w-screen" style={{ backgroundColor }}>
      <div className="h-[50vh] p-8 relative">
        <h2 className="text-white capitalize font-bold text-2xl">
          {data?.name}
        </h2>
        <div className="flex gap-1 items-start">
          {types.map((type) => (
            <Tag key={type.slot}>{type.type.name}</Tag>
          ))}
        </div>
        {!!img && (
          <Image
            src={img}
            alt={"Pokemon"}
            height={256}
            width={256}
            priority
            className="absolute -bottom-14 z-0 left-1/2 -translate-x-1/2"
          />
        )}
      </div>

      <div className="h-[50vh] bg-white rounded-t-4xl pt-10 px-6">
        <Tabs defaultValue="about">
          <TabsList className="w-full">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="game-stats">Base Stats</TabsTrigger>
            <TabsTrigger value="evolution">Evolution</TabsTrigger>
            <TabsTrigger value="moves">Moves</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <About pokemon={data} />
          </TabsContent>

          <TabsContent
            value="game-stats"
            className="space-y-4 mt-4 overflow-y-auto"
          >
            <BaseStats stats={stats} />
          </TabsContent>

          <TabsContent value="evolution">
            <Evolution />
          </TabsContent>
          <TabsContent value="moves">
            <Moves moves={data?.moves} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

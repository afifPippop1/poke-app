"use client";

import { Tag } from "@/components/common/Tag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePokemonDetail } from "@/hooks/usePokemonDetail";
import { getPokemonBackgroundColor, getPokemonImageUrl } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import { About } from "./About";
import { BaseStats } from "./BaseStats";
import { Evolution } from "./Evolution";
import { Moves } from "./Moves";
import { BackIcon } from "@/components/common/BackIcon";
import Link from "next/link";

export function PokemonDetail() {
  const params = useParams<{ id: string }>();
  const { data, isFetching } = usePokemonDetail(params.id);
  const img = getPokemonImageUrl(data?.id);
  const backgroundColor = getPokemonBackgroundColor(
    data?.types[0].type.name || ""
  );
  const types = data?.types || [];
  const stats = data?.stats || [];

  if (data) {
    return (
      <div className="h-screen w-screen" style={{ backgroundColor }}>
        <div className="h-[50vh] p-8 relative flex gap-4">
          <div className="flex items-center h-8">
            <Link href="/">
              <BackIcon color="white" />
            </Link>
          </div>
          <div>
            <h2 className="text-white capitalize font-bold text-2xl">
              {data?.name}
            </h2>
            <div className="flex gap-1 items-start">
              {types.map((type) => (
                <Tag key={type.slot}>{type.type.name}</Tag>
              ))}
            </div>
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
              <Evolution id={data.id} />
            </TabsContent>
            <TabsContent value="moves">
              <Moves moves={data.moves} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="h-screen w-screen flex flex-col bg-gray-200">
        <div className="h-[50vh] p-8 relative animate-pulse">
          <div className="h-8 w-40 bg-gray-300 rounded mb-4" />
          <div className="flex gap-2 mb-4">
            <div className="h-6 w-16 bg-gray-300 rounded" />
            <div className="h-6 w-16 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="h-[50vh] bg-white rounded-t-4xl pt-10 px-6 animate-pulse">
          <div className="flex gap-4 mb-6">
            <div className="h-8 w-24 bg-gray-200 rounded" />
            <div className="h-8 w-24 bg-gray-200 rounded" />
            <div className="h-8 w-24 bg-gray-200 rounded" />
            <div className="h-8 w-24 bg-gray-200 rounded" />
          </div>
          <div className="space-y-4">
            <div className="h-6 w-full bg-gray-200 rounded" />
            <div className="h-6 w-full bg-gray-200 rounded" />
            <div className="h-6 w-full bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
      <p className="text-lg text-gray-700">Pokemon not found.</p>
    </div>
  );
}

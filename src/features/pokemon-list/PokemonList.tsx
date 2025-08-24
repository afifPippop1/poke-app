"use client";

import { usePokemonList } from "@/hooks/usePokemonList";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { isDesktop } from "@/lib/isDesktop";
import { useEffect, useRef } from "react";
import { PokemonCard } from "../pokemon-card/PokemonCard";
import { CardListSkeleton } from "../pokemon-card/PokemonCardSkeleton";
import { PokemonDrawer } from "./PokemonDrawer";

export function PokemonList() {
  const { isFetching, data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    usePokemonList();
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const desktop = isDesktop();
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        root: loaderRef.current.parentElement,
        threshold: 0.1,
      }
    );

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasNextPage, fetchNextPage]);

  const { onRouteChange } = useScrollRestoration(
    "pokemon-list-scroll",
    listRef
  );

  if (isFetching && !isFetchingNextPage)
    return (
      <div className="grid grid-cols-2 gap-4 p-4 pb-14">
        <CardListSkeleton />
      </div>
    );

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto h-full p-4 pb-14"
      ref={listRef}
    >
      {data?.pages.map((page) =>
        page.results?.map(({ name }) => (
          <PokemonCard key={name} name={name} onClick={onRouteChange} />
        ))
      )}
      <CardListSkeleton />
      <div ref={loaderRef} className="flex items-center justify-center">
        {isFetchingNextPage ? <CardListSkeleton /> : <></>}
      </div>
      {desktop && <PokemonDrawer />}
    </div>
  );
}

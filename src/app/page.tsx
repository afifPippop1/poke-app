import { PokemonList } from "@/features/pokemon-list/PokemonList";

export default function Home() {
  return (
    <div className="overflow-hidden h-screen">
      <h1 className="p-4 font-bold text-2xl">Pokedex</h1>
      <PokemonList />
    </div>
  );
}

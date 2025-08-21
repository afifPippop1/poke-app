"use server";

import { env } from "@/constants/env";

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

// Cries sound Url
type Cries = {
  latest: string;
  legacy: string;
};

type PokemonForm = {
  name: string;
  url: string;
};

type PokemonGameIndecy = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

type PokemonGeneration = {
  name: string;
  url: string; //url
};

type PokemonSpecies = {
  name: string;
  url: string;
};

// Image Sprites
type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

type PokemonSprites = Sprites & {
  other: {
    dream_world: Partial<Sprites>;
    home: Partial<Sprites>;
    "official-artwork": Partial<Sprites>;
    showdown: Partial<Sprites>;
  };
  "generation-i": {
    "red-blue": Partial<Sprites>;
    yellow: Partial<Sprites>;
  };
  "generation-ii": {
    crystal: Partial<Sprites>;
    gold: Partial<Sprites>;
    silver: Partial<Sprites>;
  };
  "generation-iii": {
    emerald: Partial<Sprites>;
    "firered-leafgreen": Partial<Sprites>;
    "ruby-sapphire": Partial<Sprites>;
  };
  "generation-iv": {
    "diamond-pearl": Partial<Sprites>;
    "heartgold-soulsilver": Partial<Sprites>;
    platinum: Partial<Sprites>;
  };
  "generation-v": {
    "black-white": Partial<Sprites> & {
      animated: Partial<Sprites>;
    };
  };
  "generation-vi": {
    "omegaruby-alphasapphire": Partial<Sprites>;
    "x-y": Partial<Sprites>;
  };
  "generation-vii": {
    icons: Partial<Sprites>;
    "ultra-sun-ultra-moon": Partial<Sprites>;
  };
  "generation-viii": {
    icons: Partial<Sprites>;
  };
};

type StatsInfo = {
  name: string;
  url: string;
};

type PokemonStats = {
  base_stat: 60;
  effort: 0;
  stat: StatsInfo;
};

type PokemonTypeInfo = {
  name: string;
  url: string;
};

type PokemonType = {
  slot: number;
  type: PokemonTypeInfo;
};

type Pokemon = {
  id: number;
  name: string;
  order: number;
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: PokemonForm[];
  game_indecies: PokemonGameIndecy[];
  height: number;
  // TODO: HeldItem
  held_items: [];
  is_default: boolean;
  location_area_encounters: string; // url string
  // TODO: Move
  moves: [];
  past_abilities: { abilties: Ability[]; generation: PokemonGeneration }[];
  // TODO: Past Types
  past_types: [];
  species: PokemonSpecies;
  sprites: PokemonSprites;
  stats: PokemonStats;
  types: PokemonType[];
  weight: number;
};

export async function getPokemonDetail(
  url: string = `${env.pokemonApiUrl}/pokemon`
): Promise<Pokemon> {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

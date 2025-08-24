type Ability = {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
};

// Cries sound Url
type Cries = {
  latest: string;
  legacy: string;
};

type PokemonGameIndecy = {
  game_index: number;
  version: NamedAPIResource;
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

export type PokemonStats = {
  base_stat: 60;
  effort: 0;
  stat: NamedAPIResource;
};

type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

export type Pokemon = {
  id: number;
  name: string;
  order: number;
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: NamedAPIResource[];
  game_indecies: PokemonGameIndecy[];
  height: number;
  // TODO: HeldItem
  held_items: [];
  is_default: boolean;
  location_area_encounters: string; // url string
  // TODO: Move
  moves: [];
  past_abilities: { abilties: Ability[]; generation: NamedAPIResource }[];
  // TODO: Past Types
  past_types: [];
  species: NamedAPIResource;
  sprites: PokemonSprites;
  stats: PokemonStats[];
  types: PokemonType[];
  weight: number;
};

export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;

  growth_rate: NamedAPIResource;
  pokedex_numbers: {
    entry_number: number;
    pokedex: NamedAPIResource;
  }[];
  egg_groups: NamedAPIResource[];
  color: NamedAPIResource;
  shape: NamedAPIResource;
  evolves_from_species: NamedAPIResource | null;
  evolution_chain: {
    url: string;
  };
  habitat: NamedAPIResource | null;
  generation: NamedAPIResource;

  names: {
    name: string;
    language: NamedAPIResource;
  }[];

  flavor_text_entries: {
    flavor_text: string;
    language: NamedAPIResource;
    version: NamedAPIResource;
  }[];

  form_descriptions: {
    description: string;
    language: NamedAPIResource;
  }[];

  genera: {
    genus: string;
    language: NamedAPIResource;
  }[];

  varieties: {
    is_default: boolean;
    pokemon: NamedAPIResource;
  }[];
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export type EvolutionDetail = {
  species: { name: string; url: string };
  evolves_to: EvolutionDetail[];
};

export type EvolutionChain = {
  id: number;
  chain: EvolutionDetail;
};

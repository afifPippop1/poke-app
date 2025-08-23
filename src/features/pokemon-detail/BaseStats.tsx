import { PokemonStats } from "@/types/pokemon";

export function BaseStats({stats}: { stats: PokemonStats[] }) {
  return stats.map((stat) => (
    <div key={stat.stat.name} className="flex items-center gap-4">
      <p className="capitalize w-28 text-gray-700">
        {stat.stat.name.replace("-", " ")}
      </p>

      <p className="w-10 font-semibold text-gray-900">{stat.base_stat}</p>

      <div className="flex-1">
        <StatsBar value={stat.base_stat} />
      </div>
    </div>
  ));
}

function StatsBar({ value }: { value: number }) {
  const color = value >= 60 ? "bg-green-500" : "bg-red-500";
  const width = Math.min(value, 100); // cap at 100% width

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`${color} h-2 rounded-full`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}

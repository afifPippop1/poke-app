type Move = { move: { name: string } };
type MovesProps = {
  moves?: Move[];
};

export function Moves({ moves }: MovesProps) {
  if (!moves || moves.length === 0) {
    return <p>No moves available</p>;
  }
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {moves.map((m, idx) => (
        <span
          key={m.move.name + idx}
          className="capitalize bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
        >
          {m.move.name}
        </span>
      ))}
    </div>
  );
}
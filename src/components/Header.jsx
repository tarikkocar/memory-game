export default function Header({ streak }) {
  return (
    <div className="flex justify-between items-center py-6 px-10 mt-4 w-full">
      <h1 className="text-4xl font-bold tracking-wide">Bruegel's Creatures</h1>
      <div className="space-y-2">
        <p className="font-bold">Score: {streak.length}</p>
      </div>
    </div>
  );
}

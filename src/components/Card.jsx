export default function Card({ card, streak, setStreak }) {
  const handleClick = () => {
    if (!streak.includes(card)) {
      setStreak([...streak, card]);
    } else {
      setStreak([]);
    }
  };

  return (
    <div
      className="pb-3 max-w-[15rem] bg-stone-800 text-neutral-100 rounded-lg space-y-2 cursor-pointer hover:scale-105 transition-all"
      onClick={handleClick}
    >
      <img src={card.src} className="rounded-lg"></img>
      <p className="text-center font-medium">{card.title}</p>
    </div>
  );
}

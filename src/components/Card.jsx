import { motion } from "framer-motion";

export default function Card({ card, streak, setStreak }) {
  const handleClick = () => {
    if (!streak.includes(card)) {
      setStreak([...streak, card]);
    } else {
      setStreak([]);
    }
  };

  return (
    <motion.div
      className="pb-3 max-w-[15rem] bg-stone-800 text-blue-200 ring-2 ring-stone-500 shadow-xl shadow-slate-500 rounded-lg space-y-2 cursor-pointer"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.15 },
      }}
      initial={{ opacity: 0, y: -50, transition: { duration: 0.7 } }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      onClick={handleClick}
    >
      <img src={card.src} className="rounded-lg" draggable="false"></img>
      <p className="text-center font-medium">{card.title}</p>
    </motion.div>
  );
}

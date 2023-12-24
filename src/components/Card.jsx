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
      className="relative max-w-[15rem] w-full aspect-[3/4] bg-stone-800 text-blue-200 ring-2 ring-stone-500 shadow-xl shadow-slate-500 rounded-lg cursor-pointer [transform-style:preserve-3d]"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.15 },
      }}
      initial={{
        rotateY: 180,
      }}
      animate={{
        rotateY: 0,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 110,
        },
      }}
      exit={{
        rotateY: 180,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 110,
        },
      }}
      onClick={handleClick}
    >
      <div className="absolute w-full h-full space-y-2 pb-4 [backface-visibility:hidden]">
        <img
          src={card.src}
          className="rounded-lg w-full h-[90%]"
          draggable="false"
        ></img>
        <p className="text-center font-medium">{card.title}</p>
      </div>
      <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <img
          src="/assets/self-portrait.jpg"
          className="rounded-lg h-full"
          draggable="false"
        ></img>
      </div>
    </motion.div>
  );
}

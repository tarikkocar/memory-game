import { motion, AnimatePresence } from "framer-motion";

export default function GameOver({ streak, setStreak }) {
  return (
    <AnimatePresence>
      {streak.length == 12 && (
        <motion.div
          key="gameOver"
          className="z-20 absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-orange-50/50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="p-4 bg-stone-800 text-neutral-100 ring-2 ring-stone-500 rounded-2xl w-[24rem] h-[20rem] flex flex-col items-center gap-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mt-6 text-2xl">Well done!</p>
            <p className="mx-2 text-center text-blue-200">
              You've flawlessly picked all 12 characters. Great memory!
            </p>
            <button
              className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 font-medium px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-xl mt-auto"
              onClick={() => {
                setStreak([]);
              }}
            >
              Play again
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

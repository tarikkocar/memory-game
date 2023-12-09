import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Help({ isHelpOpen, setIsHelpOpen }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleEscapeDown = (e) => {
    if (e.key === "Escape") {
      setIsHelpOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeDown);

    return () => {
      document.removeEventListener("keydown", handleEscapeDown);
    };
  });

  return (
    <AnimatePresence>
      {isHelpOpen && (
        <motion.div
          key="modal"
          onClick={() => setIsHelpOpen(false)}
          className="z-20 fixed inset-0 bg-cover flex items-center justify-center backdrop-blur-sm bg-orange-50/50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            onClick={stopPropagation}
            className="p-4 pb-14 bg-stone-800 text-blue-200 ring-2 ring-stone-500 rounded-2xl shadow-xl w-1/2 max-w-[40rem] max-[800px]:w-3/4 max-[800px]:text-xs flex flex-col items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <span
              onClick={() => setIsHelpOpen(false)}
              className="ml-auto mr-2 cursor-pointer font-bold"
            >
              X
            </span>
            <p className="mx-2 text-center mt-4">
              <a
                href="https://en.wikipedia.org/wiki/Pieter_Bruegel_the_Elder"
                target="_blank"
                rel="noreferrer"
                className="after:content-[url(/src/assets/open_in_new_FILL0_wght400_GRAD0_opsz24.svg)] after:invert-[.84] after:sepia-[.05] after:saturate-[21.03] after:hue-rotate-[184deg] after:brightness-[1.01] after:contrast-[.99]] after:ml-[2px] after:mr-[3px]"
              >
                Pieter Bruegel the Elder
              </a>{" "}
              was a 16th-century Flemish Renaissance painter known for his
              detailed and panoramic landscapes and depictions of everyday life.
            </p>
            <p className="mx-2 text-center mt-9">
              In addition to his remarkable ability to capture the human
              experience, Bruegel's paintings often featured imaginative and
              fantastic creatures, adding an element of whimsy and intrigue to
              his work.
            </p>
            <p className="mx-2 text-center mt-9">
              This is a little memory game featuring some of his odd creatures.
              There are 12 creatures that you must select without repeating to
              win the game.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState } from "react";
import Help from "./Help";

export default function Footer() {
  const [isHelpOpen, setHelpOpen] = useState(false);

  return (
    <>
      <Help isHelpOpen={isHelpOpen} setHelpOpen={setHelpOpen} />

      <div className="grid grid-cols-3 justify-center items-center gap-2 py-6 px-10 mt-auto w-full">
        <div className="col-span-1"></div>
        <div className="col-span-1 flex items-center gap-2 justify-self-center">
          <span>tarikkocar © 2023</span>
          <a
            href="https://github.com/tarikkocar"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/src/assets/github-gray.svg"
              alt="GitHub logo"
              className="w-5 h-auto hover:scale-110 transition-all"
            />
          </a>
        </div>
        <span
          onClick={() => setHelpOpen(true)}
          className="material-symbols-outlined scale-125 justify-self-end hover:scale-[1.4] transition-all cursor-pointer"
        >
          help
        </span>
      </div>
    </>
  );
}

import Card from "./Card";
import cards from "../constants/cards.js";
import cardShuffler from "../constants/cardShuffler.js";

export default function CardGrid({ streak, setStreak }) {
  const shuffledCards = cardShuffler(cards);

  // This is to ensure that the displayed cards contains at least 1 unclicked card.
  if (
    shuffledCards.every((element) => streak.includes(element)) &&
    streak.length < 12
  ) {
    const nonClickedCards = cards.filter(
      (element) => !streak.includes(element)
    );
    const randomNonClickedCard =
      nonClickedCards[Math.floor(Math.random() * nonClickedCards.length)];
    const randomIndex = Math.floor(Math.random() * shuffledCards.length);
    shuffledCards.splice(randomIndex, 1, randomNonClickedCard);
  }

  return (
    <div className="p-16 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
      {shuffledCards.map((card) => (
        <Card
          key={Math.random()}
          card={card}
          streak={streak}
          setStreak={setStreak}
        />
      ))}
    </div>
  );
}

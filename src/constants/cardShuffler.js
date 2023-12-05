export default function cardShuffler(cards) {
  const indices = [];
  const randomCards = [];

  while (indices.length < 5) {
    const index = Math.floor(Math.random() * 12);

    if (!indices.includes(index)) {
      indices.push(index);
    }
  }

  indices.forEach((element) => {
    randomCards.push(cards[element]);
  });

  return randomCards;
}

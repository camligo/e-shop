import { useState } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ children }) => {
  const [startIndex, setStartIndex] = useState(0); // keeps track of index of first visible card
  const length = children.length;

  const handlePreviousCard = () => {
    setStartIndex((startIndex - 1 + length) % length);
  }

  const handleNextCard = () => {
    setStartIndex((startIndex + 1) % length);
  }

  // create an array of current 3 cards to display absed on startIndex
  const getCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(children[(startIndex + i) % length]);
    }
    return cards;
  }

  return (
    <div className={styles.CarouselContainer}>
      <button onClick={handlePreviousCard}>Prev</button>
      <div className={styles.CarouselContent}>
        <div className={styles.CarouselInner}>
          {getCards().map((card, index) => (
            <div key={index} className={styles.CarouselItem}>
              {card}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNextCard}>Next</button>
    </div>
  )
}

export default Carousel;

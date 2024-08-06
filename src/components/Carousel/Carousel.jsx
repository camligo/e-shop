import { useState } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ children }) => {
  const [slide, setSlide] = useState(0); // keeps track of index of first visible slide
  const length = children.length;

  const handlePreviousSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  }

  const handleNextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  }

  return (
    <section className={styles.Carousel}>
      <button onClick={handlePreviousSlide} className={styles.ArrowLeft}>
        &lt;
      </button>
      <div className={styles.CarouselContentWrapper}>
        <div className={styles.CarouselContent}
          style={{ transform: `translateX(-${slide * 100}%)`}}
        >
          {children.map((item, index) => (
            <div
              key={index}
              className={styles.CarouselItem}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNextSlide} className={styles.ArrowRight}>
        &gt;
      </button>
    </section>
  )
}

export default Carousel;

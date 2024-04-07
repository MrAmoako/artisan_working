import React, { useState, useEffect } from 'react';

function Carousel({ slides, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, interval);

    return () => clearTimeout(timeout);
  }, [currentIndex, slides.length, interval]);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <Slide key={index} isActive={index === currentIndex} content={slide.content} />
        ))}
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Carousel;

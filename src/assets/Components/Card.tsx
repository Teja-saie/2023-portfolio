import React from 'react';
import Carousel from "nuka-carousel";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const Card = (): JSX.Element => {
  const images: Record<string, { default: string }> = import.meta.globEager('../logos/*.{png,jpg,jpeg,svg}');
  return (
    <div className='snap-start slider-container_t'>
      <Carousel
        autoplay={true}
        slidesToShow={4}
        autoplayInterval={4000}
        wrapAround={true}
        dragging={true}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>
            <AiOutlineCaretLeft className='text-white' />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <AiOutlineCaretRight className='text-white' />
          </button>
        )}
      >
        {Object.keys(images).map((imageName) => (
          <div key={imageName} className='bg-red flex items-center justify-center'>
            <img
              key={imageName}
              src={images[imageName].default}
              className="w-3/4 object-scale-down bg-center h-[200px] rounded-lg max-h-[200px]"
              alt={imageName}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Card;

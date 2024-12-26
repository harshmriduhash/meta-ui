'use client';

import React from 'react';

const Rating = ({ rating = 5, maxStars = 5, filledColor = 'fill-blue', halfFilledColor = 'fill-gray' }) => {
  const renderStars = () => {
    return Array.from({ length: maxStars }, (_, index) => {
      const isHalfFilled = rating - index === 0.5;

      return (
        <svg
          key={index}
          className={`brxe-icon fr-rating-alpha__icon testimonial-slider__star-icon ${isHalfFilled ? halfFilledColor : filledColor}`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path
            d={
              isHalfFilled
                ? 'M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z'
                : 'M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z'
            }
          />
        </svg>
      );
    });
  };

  return (
    <span
      className='brxe-div fr-rating-alpha testimonial-slider__testimonials-ratings-container flex w-40 flex-row items-center justify-center'
      data-rating={rating}
    >
      {renderStars()}
    </span>
  );
};

export default Rating;

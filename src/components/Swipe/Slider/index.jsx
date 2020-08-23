/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper, Control, ImageSlider } from './styled';
import ImageIndicator from './ImageIndicator';

const Slider = ({ imageUrls, onClick }) => {
  const [currentImage, setCurrentImage] = useState(1);

  const handleMoveSlideLeft = () => {
    setCurrentImage(currentImage - 1);
  };

  const handleMoveSlideRight = () => {
    setCurrentImage(currentImage + 1);
  };

  return (
    <Wrapper>
      <ImageSlider current={currentImage} total={imageUrls.length}>
        {imageUrls.map((url) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img onClick={onClick} src={url} key={url} alt="Clothe" />
        ))}
      </ImageSlider>
      <ImageIndicator
        currentPage={currentImage}
        totalPages={imageUrls.length}
        color="greyLighter"
      />
      {currentImage > 1 && (
        <Control position="left" onClick={handleMoveSlideLeft}>
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </Control>
      )}
      {currentImage < imageUrls.length && (
        <Control position="right" onClick={handleMoveSlideRight}>
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </Control>
      )}
    </Wrapper>
  );
};

Slider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  imageUrls: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  imageUrls: [],
};

export default Slider;

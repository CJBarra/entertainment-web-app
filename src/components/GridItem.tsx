import { useState } from 'react';
import styled from 'styled-components/macro';

import { BookmarkEmpty, BookmarkFull } from './Icons';
import ItemMetadata from './ItemMetadata';

const StyledGridItem = styled.div``;

const StyledGridItemContainer = styled.div`
  position: relative;
  z-index: 1;
`;

interface BookmarkProps {
  itemStyle: string;
}
const StyledBookmarkBtn = styled.button<BookmarkProps>`
  --btn-size: 2rem;
  --btn-spacing: 0.4rem;
  --trend-btn-spacing: 1rem;

  position: absolute;
  border: none;
  border-radius: 50%;
  height: var(--btn-size);
  width: var(--btn-size);
  top: ${(props) =>
    props.itemStyle === 'trending' ? 'var(--trend-btn-spacing)' : 'var(--btn-spacing)'};
  right: ${(props) =>
    props.itemStyle === 'trending' ? 'var(--trend-btn-spacing)' : 'var(--btn-spacing)'};

  text-align: center;
  text-align: -webkit-center;
  z-index: 999;

  &:hover {
    cursor: pointer;
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    --btn-spacing: 1rem;
    --trend-btn-spacing-inline: 1.5rem;

    top: var(--btn-spacing);
    right: ${(props) =>
      props.itemStyle === 'trending' ? 'var(--trend-btn-spacing-inline)' : 'var(--btn-spacing)'};
  }
`;

const StyledPlayBtn = styled.button`
  position: absolute;
  border: none;
  inset: 0;
  opacity: 0;
  z-index: 600;

  .play__container {
    --btn-hover: hsl(0deg 0% 100% / 20%);

    background-color: var(--btn-hover);
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: min-content;
    margin-inline: auto;
    text-transform: uppercase;

    .play__label {
      display: none;
    }

    .play__icon {
      --btn-size: 2rem;

      content: url('src/assets/icon-play.svg');
      height: var(--btn-size);
      width: var(--btn-size);
      opacity: 0.8;
    }
  }

  &:hover {
    --gradient-overlay: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));

    background: var(--gradient-overlay);
    color: var(--text-primary);
    opacity: 1;
    cursor: pointer;
    transition: all 300ms ease;
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    --btn-padding: 0.5rem;

    .play__container {
      padding-block: var(--btn-padding);
      padding-inline: var(--btn-padding);
    }

    .play__container > .play__label {
      display: block;
    }

    .play__container > .play__icon {
      margin-right: var(--btn-padding);
      opacity: 1;
    }
  }
`;

const StyledPicture = styled.picture`
  position: relative;
  backface-visibility: hidden;
`;

/* Slider Styles */
const StyledSliderCell = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-end;
`;

const StyledSliderPicture = styled.picture`
  object-fit: cover;
  inset: 0;
`;

const StyledMetaContainer = styled.div`
  --padding-block: 0.8rem;
  --padding-inline: 0.8rem;

  position: absolute;
  padding-block: var(--padding-block);
  padding-inline: var(--padding-inline);
  width: var(--w-fill);

  .item__title {
    font-size: var(--heading-sm);
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    --padding-block: 1rem;
    --padding-inline: 1.5rem;

    padding-block: var(--padding-block);
    padding-inline: var(--padding-inline);

    .item__title {
      font-size: var(--heading-md);
    }
  }
`;

/* ------------ Styles End -------------- */

interface GridItemProps {
  path: any;
  thumbType: string;
  bookmarked: boolean;
}

const GridItem = ({ path, thumbType, bookmarked }: GridItemProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);


  const handleBookmark = () => {
    if (isClicked && isBookmarked === true) {
      setIsBookmarked(false);
      console.log(isBookmarked);
    } else {
      setIsBookmarked(true);
      console.log(isBookmarked);
    }
    setIsClicked(!isClicked);
  };

  /**
   * Check thumbType prop for trending string,
   * then render alternate appearance of components.
   * Affected components being StyledGridItem => StyledSliderCell and StyledBookmarkBtn
   * */
  let itemStyle = thumbType.toLowerCase();

  // Slider GridItem appearance
  if (itemStyle === 'trending') {
    return (
      <StyledSliderCell className="slider__cell">
        <StyledBookmarkBtn itemStyle={itemStyle} onClick={() => handleBookmark}>
          {isBookmarked === true ? <BookmarkFull /> : <BookmarkEmpty />}
        </StyledBookmarkBtn>

        {/* play btn */}
        <StyledPlayBtn className="grid__play__btn">
          <div className="play__container">
            <div className="play__icon" />
            <h4>PLAY</h4>
          </div>
        </StyledPlayBtn>

        <StyledSliderPicture className="slider__img__container ">
          <source
            media="(min-width: 600px)"
            srcSet={path.thumbnail[thumbType]?.large}
            type="image/jpeg"
          />
          <img className="slider__img" src={path.thumbnail[thumbType]?.small} alt={path.title} />
        </StyledSliderPicture>

        <StyledMetaContainer className="slider__meta__overlay">
          <ItemMetadata
            year={path.year}
            category={path.category}
            rating={path.rating}
            title={path.title}
          />
        </StyledMetaContainer>
      </StyledSliderCell>
    );
  }

  // Default GridItem appearance
  return (
    <StyledGridItem className="grid__item">
      <StyledGridItemContainer>
        {/* bookmark btn */}
        <StyledBookmarkBtn itemStyle={itemStyle} onClick={handleBookmark}>
          {isBookmarked === true ? <BookmarkFull /> : <BookmarkEmpty />}
        </StyledBookmarkBtn>

        {/* play btn */}
        <StyledPlayBtn className="grid__play__btn">
          <div className="play__container">
            <div className="play__icon" />
            <h4>PLAY</h4>
          </div>
        </StyledPlayBtn>

        {/* grid__item__bg__image */}
        <StyledPicture className="grid__item__img">
          <source
            media="(min-width: 900px)"
            srcSet={path.thumbnail[thumbType]?.large}
            type="image/jpeg"
          />
          <source
            media="(min-width: 600px)"
            srcSet={path.thumbnail[thumbType]?.medium}
            type="image/jpeg"
          />
          <img src={path.thumbnail[thumbType]?.small} alt={path.title} />
        </StyledPicture>
      </StyledGridItemContainer>

      <ItemMetadata
        category={path.category}
        rating={path.rating}
        title={path.title}
        year={path.year}
      />
    </StyledGridItem>
  );
};

export default GridItem;

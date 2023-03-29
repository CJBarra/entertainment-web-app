import styled from "styled-components/macro";

import ItemMetadata from "./ItemMetadata";
// import PlayIcon from '../assets/icon-play.svg'

const StyledGridItem = styled.div``;

const StyledGridItemOnHover = styled.div`
  position: relative;
  z-index: 1;
`;

const StyledBookmarkBtn = styled.button`
  --btn-spacing: 0.4rem;

  position: absolute;
  height: 32px;
  width: 32px;
  border: none;
  border-radius: 50%;
  text-align: center;
  text-align: -webkit-center;
  z-index: 999;

  right: var(--btn-spacing);
  top: var(--btn-spacing);

  &:hover {
    cursor: pointer;
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    --btn-spacing: 1rem;

    right: var(--btn-spacing);
    top: var(--btn-spacing);
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-inline: auto;
    width: min-content;
    border-radius: 2rem;
    text-transform: uppercase;

    h4 {
      display: none;
    }

    .play__icon {
      content: url("src/assets/icon-play.svg");
      height: 30px;
      width: 30px;
      opacity: 0.8;
    }
  }

  &:hover {
    --gradient-overlay: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    );

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

    .play__container > h4 {
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

const StyledSliderImage = styled.picture`
  object-fit: cover;
  inset: 0;
`;

const StyledCellMetadata = styled.div`
  --padding-inline: 0.8rem;
  --padding-block: 0.8rem;

  position: absolute;
  padding-inline: var(--padding-inline);
  padding-block: var(--padding-block);
  width: var(--w-fill);

  .item__title {
    font-size: var(--heading-sm);
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    --padding-inline: 1.5rem;
    --padding-block: 1rem;

    padding-inline: var(--padding-inline);
    padding-block: var(--padding-block);

    .item__title {
      font-size: var(--heading-md);
    }
  }
`;

const StyledTrendingBookmark = styled.button`
  --btn-spacing: 1rem;

  position: absolute;
  border: none;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  text-align: center;
  text-align: -webkit-center;
  z-index: 999;

  top: var(--btn-spacing);
  right: var(--btn-spacing);

  &:hover {
    cursor: pointer;
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    --btn-spacing-block: 1rem;
    --btn-spacing-inline: 1.5rem;

    top: var(--btn-spacing-block);
    right: var(--btn-spacing-inline);
  }
`;
/* ------------ Styles End -------------- */

type GridItemProps = {
  path: any;
  thumbType: string;
};

function GridItem({ path, thumbType }: GridItemProps) {
  /**
   * Check thumbType prop for trending string,
   * then render alternate appearance of GridItem for Slider
   * */
  if (thumbType.toLowerCase() === "trending") {
    return (
      <StyledSliderCell className="slider__cell">
        <StyledTrendingBookmark>
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </StyledTrendingBookmark>

        {/* play btn */}
        <StyledPlayBtn className="grid__play__btn">
          <div className="play__container">
            <div className="play__icon" />
            <h4>PLAY</h4>
          </div>
        </StyledPlayBtn>

        <StyledSliderImage className="cell__img__container ">
          <source
            media="(min-width: 600px)"
            srcSet={path.thumbnail[thumbType]?.large}
            type="image/jpeg"
          />
          <img
            className="cell__img"
            src={path.thumbnail[thumbType]?.small}
            alt={path.title}
          />
        </StyledSliderImage>

        <StyledCellMetadata className="cell__meta__overlay">
          <ItemMetadata
            year={path.year}
            category={path.category}
            rating={path.rating}
            title={path.title}
          />
        </StyledCellMetadata>
      </StyledSliderCell>
    );
  }

  // Default GridItem appearance
  return (
    <StyledGridItem className="grid__item">
      <StyledGridItemOnHover>
        {/* bookmark btn */}
        <StyledBookmarkBtn className="grid__bookmark__btn">
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
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
      </StyledGridItemOnHover>

      <ItemMetadata
        year={path.year}
        category={path.category}
        rating={path.rating}
        title={path.title}
      />
    </StyledGridItem>
  );
}

export default GridItem;

import styled from "styled-components/macro";
import ItemMetadata from "./ItemMetadata";

const StyledSliderCell = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-end;

  /* border-inline: 2px solid var(--theme-accent); */
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
  width: 100%;

  .item__title {
    font-size: var(--heading-md);
  }

  /* Media - Tablet and up */
  /* 600px */
  @media (min-width: 37.5rem) {
    --padding-inline: 1.5rem;
    --padding-block: 1rem;

    padding-inline: var(--padding-inline);
    padding-block: var(--padding-block);
  }
`;

const StyledBookmarkButton = styled.button`
  --btn-spacing-inline: 1.5rem;
  --btn-spacing-block: 1rem;

  position: absolute;
  height: 32px;
  width: 32px;
  border: none;
  border-radius: 50%;
  text-align: center;
  text-align: -webkit-center;
  z-index: 2;

  top: var(--btn-spacing-block);
  right: var(--btn-spacing-inline);

  &:hover {
    cursor: pointer;
  }
`;

type ItemProps = {
  path: any;
  thumbType: string;
};

export default function SliderItem({ path, thumbType }: ItemProps) {
  return (
    <StyledSliderCell className="slider__cell">
      <StyledBookmarkButton>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </StyledBookmarkButton>

      <StyledSliderImage className="cell__img__container ">
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

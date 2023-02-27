import styled from "styled-components/macro";
import ItemMetadata from "./ItemMetadata";

const StyledSliderCell = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  margin-right: 2.5rem;
  border-inline: 2px solid var(--theme-accent);
`;

const StyledCellImage = styled.picture`
  object-fit: cover;
  inset: 0;
`;

const StyledCellMetadata = styled.div`
  position: absolute;
`;

const StyledButton = styled.button`
  position: absolute;
  height: 32px;
  width: 32px;
  border: none;
  border-radius: 50%;
  text-align: center;
  text-align: -webkit-center;
  z-index: 2;

  --btn-spacing: 1rem;
  right: var(--btn-spacing);
  top: var(--btn-spacing);

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
      <StyledButton>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </StyledButton>
      <StyledCellImage className="cell__img__container ">
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
      </StyledCellImage>

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

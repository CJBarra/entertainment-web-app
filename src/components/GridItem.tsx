import styled from "styled-components/macro";
import ItemMetadata from "./ItemMetadata";

const HoverOverlay = styled.div`
  position: relative;

  &:before {
    --gradient-overlay: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    );
    background: var(--gradient-overlay);

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    content: url("src/assets/icon-play.svg");
    inset: 0;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    transition: all 300ms ease;
  }

  &:hover:before {
    opacity: 1;
  }
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

const StyledPicture = styled.picture`
  position: relative;
  backface-visibility: hidden;
`;

type GridItemProps = {
  path: any;
  thumbType: string;
};

function GridItem({ path, thumbType }: GridItemProps) {
  return (
    <div className="grid__item">
      <HoverOverlay>
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
      </HoverOverlay>

      <ItemMetadata
        year={path.year}
        category={path.category}
        rating={path.rating}
        title={path.title}
      />
    </div>
  );
}

export default GridItem;

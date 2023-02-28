import styled from 'styled-components/macro';
import ItemMetadata from './ItemMetadata';

const HoverOverlay = styled.div`
  position: relative;
  z-index: 1;
`;

const StyledBookmarkBtn = styled.button`
  position: absolute;
  height: 32px;
  width: 32px;
  border: none;
  border-radius: 50%;
  text-align: center;
  text-align: -webkit-center;
  z-index: 999;

  --btn-spacing: 1rem;
  right: var(--btn-spacing);
  top: var(--btn-spacing);

  &:hover {
    cursor: pointer;
  }
`;

const StyledPlayBtn = styled.button`
  position: absolute;
  border: none;
  inset: 0;
  opacity: 0;
  z-index: 600;

  span {
    background-color: var(--theme-accent);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    width: 50%;
    border-radius: 4rem;
    padding-block: 0.5rem;
    padding-inline: 0;
    margin-inline: auto;
    text-transform: uppercase;

    &:before {
      content: url('src/assets/icon-play.svg');
      height: 30px;
      width: 30px;
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
        {/* bookmark btn */}
        <StyledBookmarkBtn>
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </StyledBookmarkBtn>

        <StyledPlayBtn>
          <span>PLAY</span>
        </StyledPlayBtn>

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

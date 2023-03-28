import styled from "styled-components/macro";

const categoryIconMovie = "src/assets/icon-category-movie.svg";
const categoryIconTV = "src/assets/icon-category-tv.svg";

const StyledItemMetadata = styled.div`
  .item__metadata {
    list-style: none;
    position: relative;
    display: flex;
    width: var(--w-fill);
    margin-top: 0.5rem;
    padding-block: 0;
    padding-inline: 0;
    font-size: var(--body-xs);
    opacity: 0.75;
  }

  .item__metadata li:not(:first-child):before {
    content: "·";
    padding-inline: 0.4rem;
  }

  .item__metadata li:first-child:before {
    content: "";
  }

  .item__metadata img {
    height: 12px;
    width: 12px;
  }

  .icon-category {
    display: flex;
    align-items: center;
  }

  .icon-category img {
    margin-inline: 0.25rem;
  }

  @media (min-width: 37.5rem){
    .item__metadata {
      font-size: var(--body-sm);
    }
  }
`;

type ItemMetadataProps = {
  year: any;
  rating: any;
  category: string;
  title: string;
};

export default function ItemMetadata({
  year,
  category,
  rating,
  title,
}: ItemMetadataProps) {
  return (
    <StyledItemMetadata>
      <ul className="item__metadata">
        <li className="meta__li">{year}</li>
        <li className="meta__li icon-category">
          <img
            src={
              category.toLowerCase() === "movie"
                ? categoryIconMovie
                : categoryIconTV
            }
            alt={category}
          />
          {category}
        </li>
        <li className="meta__li">{rating}</li>
      </ul>

      <h4 className="item__title">{title}</h4>
    </StyledItemMetadata>
  );
}

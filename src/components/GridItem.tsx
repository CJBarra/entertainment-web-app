const categoryImageMovie = "src/assets/icon-category-movie.svg";
const categoryImageTV = "src/assets/icon-category-tv.svg";

type MediaTitleProps = {
  title: string;
};

type GridItemProps = {
  id: any;
  path: any;
  thumbType: string;
};

type MediaMetadataProps = {
  year: any;
  rating: any;
  category: string;
};

function MediaMetadata({ year, category, rating }: MediaMetadataProps) {
  return (
    <ul className="item__metadata">
      <li className="meta__li">{year}</li>
      <li className="meta__li icon-category">
        <img
          src={
            category.toLowerCase() === "movie"
              ? categoryImageMovie
              : categoryImageTV
          }
          alt={category}
        />
        {category}
      </li>
      <li className="meta__li">{rating}</li>
    </ul>
  );
}

function MediaTitle({ title }: MediaTitleProps) {
  return <h4 className="item__title">{title}</h4>;
}

export default function GridItem({ path, id, thumbType }: GridItemProps) {
  return (
    <div className="grid__item" key={id}>
      <picture className="item__img">
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
      </picture>

      <MediaMetadata
        year={path.year}
        category={path.category}
        rating={path.rating}
      />

      <MediaTitle title={path.title} />
    </div>
  );
}

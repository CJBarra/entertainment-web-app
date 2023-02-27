import ItemMetadata from "./ItemMetadata";

type GridItemProps = {
  path: any;
  thumbType: string;
};

function GridItem({ path, thumbType }: GridItemProps) {
  return (
    <div className="grid__item">
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

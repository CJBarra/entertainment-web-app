import ItemMetadata from "./ItemMetadata";

type ItemProps = {
  path: any;
  thumbType: string;
};

export default function SliderItem({ path, thumbType }: ItemProps) {
  return (
    <li className="container">
      <div className="slider__img__bg">
        <picture className="item__img ">
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
            className="slider__img"
            src={path.thumbnail[thumbType]?.small}
            alt={path.title}
          />
        </picture>
      </div>

      <div className="slider__meta__overlay">
        <ItemMetadata
          year={path.year}
          category={path.category}
          rating={path.rating}
          title={path.title}
        />
      </div>
    </li>
  );
}

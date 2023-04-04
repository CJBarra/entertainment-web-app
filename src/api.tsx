import shows from './api/v1/data.json';

type MediaTypes = {
    title: string;
    thumbnail: {
      trending: {
        small: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}

export function getAllMedia() {
  return shows;
}

export function getMovies() {
  {
    shows && shows.filter((record) => record.category.toLowerCase() === 'movies');
  }
}

export function getTvSeries() {
  {
    shows && shows.filter((record) => record.category.toLowerCase() === 'tv series');
  }
}

export function getBookmarked() {
  {
    shows && shows.filter((record) => record.isBookmarked === true);
  }
}

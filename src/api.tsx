import shows from "./api/v1/data.json";

export interface IMediaProps {
  title: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;

  /**
   * typings for thumbnails are set to optional, some records in JSON file
   * do not have the 'trending' category alternative resolutions.
   */
  small?: string;
  medium?: string;
  large?: string;
}

export function getAllMedia<IMediaProps>() {
  return shows;
}

/**
 * GET ONLY all available records of movies 
 */
export function getMovies() {
  {
    shows &&
      shows.filter((record) => record.category.toLowerCase() === "movies");
  }
}

/**
 * GET ONLY all available records of TV Series
 */
export function getTvSeries() {
  {
    shows &&
      shows.filter((record) => record.category.toLowerCase() === "tv series");
  }
}

/**
 * GET current users bookmarked media records
 */
export function getBookmarked() {
  {
    shows && shows.filter((record) => record.isBookmarked === true);
  }
}

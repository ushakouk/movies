export interface IMovie {
  id: string,
  poster_path: string,
  genres: string[],
  title: string,
  release_date: string
}

export interface IMovieProps {
  movie: IMovie,
  editMovie: (m: object) => void;
  deleteMovie: (m: object) => void;
  showMovieDetails: (m: string) => void;
}

export interface INavigation {
  sort: string, 
  setSort: (sort: string) => void,
  filter: GENRES, 
  setFilter: (genre: GENRES) => void,
}

export enum GENRES {
  ALL = 'ALL',
  DOCUMENTARY = 'DOCUMENTARY',
  COMEDY = 'COMEDY',
  HORROR = 'HORROR',
  CRIME = 'CRIME'
}

export interface ISort {
  name: string,
  value: string
}

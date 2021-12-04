export interface IButton {
  id: string;
  text: string;
  style: string;
  onClick: () => void;
}

export interface Movie {
  id: string,
  poster_path: string,
  genres: string[],
  title: string,
  release_date: string
}

export interface IMovie {
  movie: Movie,
  editMovie: (m: object) => void;
  deleteMovie: (m: object) => void;
  showMovieDetails: (m: string) => void;
}

export interface INavigation {
  sort: string, 
  setSort: (sort: string) => void,
  filter: GENRE, 
  setFilter: (genre: GENRE) => void,
}

export enum GENRE {
  ALL = 'ALL',
  DOCUMENTARY = 'DOCUMENTARY',
  COMEDY = 'COMEDY',
  HORROR = 'HORROR',
  CRIME = 'CRIME'
}

export interface Sort {
  name: string,
  value: string
}

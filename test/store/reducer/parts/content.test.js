import { content } from "../../../../src/store/reducer/parts";
import { addMovies, setMovies, addMovie, updateMovie, removeMovie } from '../../../../src/store/actions/content';

describe('Content reducer', () => {
  const EXPECTED_INITIAL_STATE = {
    movies: [],
    found: 0,
    loadIterator: 0
  }

  const FIRST_MOVIE = {id: 1, title: 'first'};
  const FIRST_UPDATED = {id: 1, title: 'updated'};
  const SECOND_MOVIE = {id: 2, title: 'second'};
  const THIRD_MOVIE = {id: 3, title: 'third'};
  const FOUND = 5;

  let state;

  test('init', () => {
    state = content()
    expect(state).toEqual(EXPECTED_INITIAL_STATE);
  })

  test('set movies', () => {
    state = content(state, setMovies([FIRST_MOVIE], FOUND))

    expect(Object.keys(state).length).toEqual(3)
    expect(state.movies.length).toEqual(1)
    expect(state.movies[0]).toEqual(FIRST_MOVIE)
    expect(state.found).toEqual(FOUND)
    expect(state.loadIterator).toEqual(1)
  })

  test('add movies', () => {
    state = content(state, addMovies([SECOND_MOVIE, THIRD_MOVIE]))

    expect(Object.keys(state).length).toEqual(3)
    expect(state.movies.length).toEqual(3)
    expect(state.movies[0]).toEqual(FIRST_MOVIE)
    expect(state.movies[1]).toEqual(SECOND_MOVIE)
    expect(state.movies[2]).toEqual(THIRD_MOVIE)
    expect(state.found).toEqual(FOUND)
    expect(state.loadIterator).toEqual(2)
  })

  test('update movie', () => {
    state = content(state, updateMovie(FIRST_UPDATED))

    expect(Object.keys(state).length).toEqual(3)
    expect(state.movies.length).toEqual(3)
    expect(state.movies[0]).toEqual(FIRST_UPDATED)
    expect(state.movies[1]).toEqual(SECOND_MOVIE)
    expect(state.movies[2]).toEqual(THIRD_MOVIE)
    expect(state.found).toEqual(FOUND)
    expect(state.loadIterator).toEqual(2)
  })

  test('remove movie', () => {
    state = content(state, removeMovie(SECOND_MOVIE.id))

    expect(Object.keys(state).length).toEqual(3)
    expect(state.movies.length).toEqual(2)
    expect(state.movies[0]).toEqual(FIRST_UPDATED)
    expect(state.movies[1]).toEqual(THIRD_MOVIE)
    expect(state.found).toEqual(FOUND)
    expect(state.loadIterator).toEqual(2)
  })
})
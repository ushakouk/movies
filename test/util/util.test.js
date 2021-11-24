import { GENRES, SORTES } from '../../src/store/constants/constants';
import { defineGenre, defineSort } from '../../src/util/util';

test('define genre when it is unknown', () => {
  expect(defineGenre('unknown')).toBe(GENRES.ALL);
});

test('define genre when it is horror', () => {
  expect(defineGenre({ genre: 'horror' })).toBe(GENRES.HORROR);
});

test('define sort when it is unknown', () => {
  expect(defineSort('unknown')).toBe(SORTES.RELEASE_DATE.value);
});

test('define genre when it is horror', () => {
  expect(defineSort({ sort: 'release_date' })).toBe(SORTES.RELEASE_DATE.value);
});
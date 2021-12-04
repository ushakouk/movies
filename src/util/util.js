import '../store/constants/constants'
import { GENRES, SORTES } from '../store/constants/constants'

export function parseTime(minutes) {
  return Math.trunc(minutes / 60) + "h " + minutes % 60 + "min"
}

export function parseYear(date) {
  return date.substr(0, 4)
}

export function defineGenre({ genre }) {
  return (genre && GENRES[genre.toUpperCase()]) ? GENRES[genre.toUpperCase()] : GENRES.ALL
}

export function defineSort({ sort }) {
  const sortObj = sort ? Object.values(SORTES).find(obj => equalIgnoreCase(obj.value, sort)) : null;
  return sortObj ? sortObj.value : SORTES.RELEASE_DATE.value;
}

export function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => shallowCompare(val, b[index]));
}

export function shallowCompare(a, b) {
  return (typeof a === typeof b === 'object')
    ? shallowObjectCompare(a, b)
    : a === b;
}

function shallowObjectCompare(a, b) {
  return a === b &&
    a !== null
    ? Object.entries(a).every(([key, value]) =>
      b[key] != null 
      && shallowCompare(value, b.valueOf(key)))
    : true;
}

export function equalIgnoreCase(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
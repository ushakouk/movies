export function parseTime(minutes) {
  return Math.trunc(minutes / 60) + "h " + minutes % 60 + "min"
}

export function parseYear(date) {
  return date.substr(0, 4)
}
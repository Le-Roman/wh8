import {
  compose,
  dropLast,
  fromPairs,
  join,
  last,
  map,
  prop,
  reduce,
  replace,
  sortBy,
  split,
  toPairs,
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };

export const getTopName = compose(prop("name"), last, sortBy(prop("score")));

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = compose(
  dropLast(1),
  reduce((qs, par) => qs + par + "&", "?"),
  map(join("=")),
  toPairs
);

// Задание 3
export const parseQs = compose(
  fromPairs,
  map(split("=")),
  split("&"),
  replace(/[?]/g, "")
);

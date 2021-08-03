#!/usr/bin/node
exports.nbOccurences = (list, searchElement) =>
  list.reduce(
    (count, current) => (current === searchElement ? count + 1 : count),
    0
  );

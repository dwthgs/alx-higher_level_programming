#!/usr/bin/node
exports.esrever = (list) =>
  list.reduceRight((array, current) => array.push(current), []);

#!/usr/bin/node
const value = process.argv[2];
if (isNaN(value)) console.log('Missing number of occurrences');
else for (let i = value; i >= 1; i--) console.log('C is fun');

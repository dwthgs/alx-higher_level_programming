#!/usr/bin/node
if (process.argv.length <= 3) console.log(0);
else console.log(process.argv.slice(2).sort((a, b) => b - a)[1]);

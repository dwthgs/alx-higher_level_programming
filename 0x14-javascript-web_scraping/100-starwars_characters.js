#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(url, function (err, res, data) {
  if (!err) {
    JSON.parse(data).characters.map((character) =>
      request(character, (err, res, data) => {
        if (!err) console.log(JSON.parse(data).name);
      })
    );
  }
});

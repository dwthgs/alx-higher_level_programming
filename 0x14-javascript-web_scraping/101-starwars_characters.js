#!/usr/bin/node

const request = require("request");
const url = "https://swapi-api.hbtn.io/api/films/" + process.argv[2];

request(url, (err, res, body) => {
  if (!err) printName(JSON.parse(body).characters, 0);
});

function printName(characters, i) {
  request(characters[i++], function (err, res, data) {
    if (!err) {
      console.log(JSON.parse(data).name);
      if (i < characters.length) printName(characters, i);
    }
  });
}

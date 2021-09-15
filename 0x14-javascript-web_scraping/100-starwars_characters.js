#!/usr/bin/node

const request = require("request");
const url = "https://swapi-api.hbtn.io/api/films/" + process.argv[2];

request(url, function (err, response, body) {
  if (err) console.log(err);
  else {
    body = JSON.parse(body).characters;

    for (let i = 0; i < body.length; i++) {
      const urlPeople = body[i];
      request(urlPeople, function (err, res, data) {
        if (err) console.log(err);
        else console.log(JSON.parse(data).name);
      });
    }
  }
});

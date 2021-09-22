$.get("https://swapi-api.hbtn.io/api/films/?format=json", (data, status) =>
  data.results.forEach((result) =>
    $("#list_movies").append(`<li>${result.title}</li>`)
  )
);

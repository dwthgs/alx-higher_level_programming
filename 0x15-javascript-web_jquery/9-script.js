$(document).ready(() =>
  $.get("https://fourtonfish.com/hellosalut/?lang=fr", (data, status) =>
    $("#hello").text(data.hello)
  )
);

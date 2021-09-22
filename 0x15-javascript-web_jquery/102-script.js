$(document).ready(() =>
  $("#btn_translate").click(() =>
    $.get(
      `https://fourtonfish.com/hellosalut/?lang=${$("#language_code").val()}`,
      (data, status) => $("#hello").text(data.hello)
    )
  )
);

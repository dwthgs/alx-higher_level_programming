$(document).ready(() => {
  $("#btn_translate").click(() => translate());
  $("#language_code").keyup((e) => (e.keyCode == 13 ? translate() : null));
});

function translate() {
  $.get(
    `https://fourtonfish.com/hellosalut/?lang=${$("#language_code").val()}`,
    (data, status) => $("#hello").text(data.hello)
  );
}

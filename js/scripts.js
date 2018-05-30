$(document).ready(function() {
  $("button#cat-button").click(function() {
    $("ul#cat-ul").append("<li>Meow!</li>");
  });

  $("button#dog-button").click(function() {
    $("ul#dog-ul").append("<li>Woof!</li>");
  });
});

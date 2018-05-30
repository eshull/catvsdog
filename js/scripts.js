$(document).ready(function() {
  $("button#cat-button").click(function() {
    $("ul#cat-ul").children("li").append("Meow!");
  });

  $("button#dog-button").click(function() {
    $("ul#dog-ul").children("li").append("Woof!");
  });
});

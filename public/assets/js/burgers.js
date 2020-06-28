$(function () {
  $(".add-burger").on("submit", function (e) {
    e.preventDefault();
    let newBurger = {
      name: $("input#burger").val().trim(),
      devoured: false,
    };
    console.log(newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("burger added");
      location.reload();
    });
  });
});

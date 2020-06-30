$(document).ready(function () {
  $(".add-burger").on("submit", function (e) {
    e.preventDefault();
    let newBurger = {
      name: $("input#burger").val().trim(),
      devoured: false,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Burger added");
      location.reload(true);
    });
  });

  $(".change-devoured").on("click", function (e) {
    let id = $(this).data("id");
    let devr = $(this).data("chdevoured");
    console.log(id + " " + devr);
    let newDevrd = {
      devoured: devr,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevrd,
    })
      .then(function () {
        console.log("Burger state changed");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

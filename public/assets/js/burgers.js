$(document).ready(function () {
  $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = {
          burger_name: $("#burger").val().trim(),
          devoured: 0
      };
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function () {
              console.log("Added a new burger!");
              location.reload();
          }
      );
  });
  $(".devour").on("click", function () {
      var id = $(this).attr("data-id");
      var devBurger = {
          devoured: 1
      };
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devBurger
      }).then(
          function () {
              console.log("You ate the burger!");
              location.reload();
          }
      );
  })
});
$(function () {
    $("#add-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger-text").val(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour").on("click", function(event) {
        var burgerID = $(this).data("id");
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + burgerID, {
          type: "PUT",
          data: burgerID
        }).then(
          function() {
            console.log("Devoured burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});
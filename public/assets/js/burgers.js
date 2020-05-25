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
});
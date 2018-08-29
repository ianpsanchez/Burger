$(function () {

    console.log("inside the frontend js <--")

    // console.log();

    // $(".devourtheburger").append(" Hello");

    $(".devourtheburger").on("click", function (event) {

        var id = $(this).attr("data-id");
        // var newSleep = $(this).data("newsleep");

        var eatit = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: eatit
        }).then(
            function () {
                console.log("changed devoured to " + eatit);
                // Reload the page to get the updated list
                location.reload();

            }
        );
    });

    $(".addburger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("inside the add burger submit");

        var newBurger = {
            // name: "burger two",
            // devoured: false
              name: $("#newBurg").val().trim(),
              devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function (retdata) {
                console.log("created new burger" + retdata);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
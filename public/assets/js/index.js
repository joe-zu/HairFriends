



$(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newForm = {
      firstName: $("#formFirstName").val().trim(),
      lastName: $("#formLastName").val().trim(),
      formBody: $("#formBody").val().trim()
    };
    
    // Send the POST request.
    $.ajax("/forms", {
      type: "POST",
      data: newForm
    }).then(() => {
        console.log("created new form");
        // Reload the page to get the updated list
        location.reload();
      }
    );
    console.dir(newForm)
});

$(document).ready(() => {
    $('#formFilterSelect').change(() => {
        const filterSel = $('#formFilterSelect').val()
        $.ajax("/forms/auth", {
            type: "GET",
            data: filterSel
          }).then(() => {
            console.log("get request: " + filterSel);
            switch (filterSel) {
                case "Published":
                    location.replace("/forms/auth?Published");
                    break;
                case "Pinned":
                    location.replace("/forms/auth?Pinned");
                    break;    
                case "Unpublished":
                    location.replace("/forms/auth?Unpublished");
                    break;   
                default:
                    location.replace("/forms/auth")
            }

            //   location.reload();
            }
          );

    });
});

$(".btnPublish").on("click", (event) => {
    var id = $(this).data("id");
    console.log($(this).attr())
    // Send the DELETE request.
    // $.ajax("/forms/auth/publish/" + id, {
    //   type: "PUT"
    // }).then(() => {
    //     console.log("Published comment", id);
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
});
$(".btnUnpublish").on("click", (event) => {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/forms/auth/unpublish/" + id, {
      type: "PUT"
    }).then(() => {
        console.log("Unpublished comment", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
});
$(".btnPin").on("click", (event) => {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/forms/auth/pin/" + id, {
      type: "PUT"
    }).then(() => {
        console.log("Pinned comment", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
});
$(".btnUnpin").on("click", (event) => {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/forms/auth/unpin/" + id, {
      type: "PUT"
    }).then(() => {
        console.log("Unpinned comment", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
});


// $(".delete-cat").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/cats/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted cat", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
// });
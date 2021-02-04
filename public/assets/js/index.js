



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

            //   location.reload();
            }
          );

    });
});
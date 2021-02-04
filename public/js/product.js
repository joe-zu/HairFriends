$(function() {
//Delete
$(".delete-prod").on("click", function(event) {
  var id = $(this).data("id");
  // Send the DELETE request.
  $.ajax("/product/delete" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted product", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
//Post
$(".newProdForm").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newProd = {
    productName: $("#newProdName").val().trim(),
    description: $("#newProdDesc").val().trim(),
    productLink: $("#newProdLink").val().trim()
  };

  // Send the POST request.
  $.ajax("/create/:prodName/:prodDesc", {
    type: "POST",
    data: newProd
  }).then(
    function() {
      console.log("created new product");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
});
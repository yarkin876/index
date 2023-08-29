
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Create a new row in the table
  var table = document.getElementById("myTable");
  var row = table.insertRow(table.rows.length);

  // Populate the cells with input values
  var nameCell = row.insertCell(0);
  var emailCell = row.insertCell(1);
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;

  // Reset form
  document.getElementById("myForm").reset();
});

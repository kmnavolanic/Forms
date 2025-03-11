// Retrieve the input field element and the form element
const inputField = document.getElementById('inputField');
const form = document.getElementById('myForm');

// Add an event listener to the form to handle the submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the input value
  const isValid = validateInput(inputField.value);

  if (!isValid) {
    // Display an error message if the input value is not alphanumeric
    alert('Please enter a valid alphanumeric value.');
  } else {
    // Display a confirmation message if the input is valid
    alert('Form submitted successfully!');
    // You can also add additional logic here if needed
  }
});

// Function to validate the input value using a regular expression for alphanumeric input
function validateInput(value) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(value);
}

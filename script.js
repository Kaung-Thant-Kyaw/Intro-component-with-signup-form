document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup_form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form inputs
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email-address").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    // Reset error messages and styles
    const errorMessages = document.querySelectorAll(".error_message");
    errorMessages.forEach(function (errorMessage) {
      errorMessage.classList.add("hide-element");
    });

    const inputFields = document.querySelectorAll(".form-input");
    inputFields.forEach(function (inputField) {
      inputField.classList.remove("red-border");
    });

    // Check if inputs are empty
    if (firstName === "") {
      document
        .querySelector(".first-name-err")
        .classList.remove("hide-element");
      document.getElementById("first-name").classList.add("red-border");
      isValid = false;
    }

    if (lastName === "") {
      document.querySelector(".last-name-err").classList.remove("hide-element");
      document.getElementById("last-name").classList.add("red-border");
      isValid = false;
    }

    if (email === "") {
      document
        .querySelector(".wrong-email-err")
        .classList.remove("hide-element");
      document.getElementById("email-address").classList.add("red-border");
      isValid = false;
    } else if (!isValidEmail(email)) {
      // Validate email format
      document.querySelector(".email-err").classList.remove("hide-element");
      document.getElementById("email-address").classList.add("red-border");
      isValid = false;
    }

    if (password === "") {
      document.querySelector(".password-err").classList.remove("hide-element");
      document.getElementById("password").classList.add("red-border");
      isValid = false;
    }

    // If all inputs are valid, submit the form
    if (isValid) {
      form.submit();
    }
  });

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

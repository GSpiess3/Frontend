// Get the form element
const loginForm = document.getElementById("login-form");

// Add event listener for form submission
loginForm.addEventListener("submit", function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Redirect to playlists.html
    window.location.href = "playlists.html";
});

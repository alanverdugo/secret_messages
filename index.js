document.querySelector('form').addEventListener('submit', event => {
    // The browser always tries to submit the form contents to a backend.
    // In this case we will not have that, so just prevent it.
    event.preventDefault();

    // Get the input string
    const input = document.querySelector('#message-input');

    // Encode the input using base 64
    const encoded = btoa(input.value);

    // Get the base domain and URL where this is running right now
    const baseUrl = `${window.location}`;

    // Show the URL with the encoded string into the other input object
    const outputBox = document.querySelector("#link-input");
    outputBox.value = `${baseUrl}#${encoded}`;

    // For the convenience of the user, select the output URL
    outputBox.select();
});
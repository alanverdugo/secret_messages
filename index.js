// Get the hash from the current URL
const { hash } = window.location;

// Remove the pound sign from the encoded message, and decode it
const message = atob(hash.replace('#', ''));


if (message) {
    // Hide the input form (since the user arrived at a "decoded URL")
    document.querySelector('#message-form').classList.add('hide');
    // Show the output form
    document.querySelector('#message-show').classList.remove('hide');

    // Put the decoded message in the empty h1 object
    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    // The browser always tries to submit the form contents to a backend.
    // In this case we will not have that, so just prevent it.
    event.preventDefault();

    // Hide the input form
    document.querySelector('#message-form').classList.add('hide');
    // Show the output form
    document.querySelector('#link-form').classList.remove('hide');

    // Get the input string
    const input = document.querySelector('#message-input');

    // Encode the input using base 64
    const encoded = btoa(input.value);

    // Get the base domain and URL where this is running right now
    const baseUrl = window.location;

    // Show the URL with the encoded string into the other input object
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${baseUrl}#${encoded}`;

    // For the convenience of the user, pre-select the output URL
    linkInput.select();
});
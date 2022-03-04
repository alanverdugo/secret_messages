document.querySelector('form').addEventListener('submit', event => {
    // The browser always tries to submit the form contents to a backend.
    // In this case we will not have that, so just prevent it.
    event.preventDefault();

    // Get the input string
    const input = document.querySelector('input');
    console.log(input.value);
});
document.addEventListener('DOMContentLoaded', function() {
    // Get form and input elements
    const form = document.querySelector('form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const organization = document.getElementById('organization');
    const timestamp = document.getElementById('timestamp');

    // Save form data to localStorage when form is submitted
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        localStorage.setItem("first-name", firstName.value);
        localStorage.setItem("last-name", lastName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("organization", organization.value);
        localStorage.setItem("timestamp", new Date().toISOString());

        // Redirect to thank you page after form submission
        window.location.href = 'thankyou.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Check if we are on the form page
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get form values
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const organization = document.getElementById('organization').value;

            // Save to localStorage
            localStorage.setItem("first-name", firstName);
            localStorage.setItem("last-name", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("phone", phone);
            localStorage.setItem("organization", organization);
            localStorage.setItem("timestamp", new Date().toISOString());

            // Redirect to thank you page
            window.location.href = 'thankyou.html';
        });
    }

    // Check if we are on the thank you page
    if (document.getElementById('firstName')) {
        document.getElementById("firstName").textContent = localStorage.getItem("first-name") || "N/A";
        document.getElementById("lastName").textContent = localStorage.getItem("last-name") || "N/A";
        document.getElementById("email").textContent = localStorage.getItem("email") || "N/A";
        document.getElementById("mobile").textContent = localStorage.getItem("phone") || "N/A";
        document.getElementById("businessName").textContent = localStorage.getItem("organization") || "N/A";
        document.getElementById("timestamp").textContent = new Date(localStorage.getItem("timestamp")).toLocaleString() || "N/A";
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple login validation (for demonstration)
    if (username === "user" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});

document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Simple validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        alert("Account created successfully! You can now log in.");
        // Here, you could add functionality to save the new account details.
        window.location.href = "index.html"; // Redirect to the login page after creating the account
    }
});

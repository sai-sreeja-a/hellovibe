
// ===============================
// DARK / LIGHT THEME
// ===============================

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme when the page opens
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

function updateThemeButton() {
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        themeToggle.textContent = "Switch to Dark Mode";
    }
}

updateThemeButton();

// Toggle theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    const currentTheme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";

    localStorage.setItem("theme", currentTheme);

    updateThemeButton();
});


// ===============================
// CONTACT FORM VALIDATION
// ===============================

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const formSuccess = document.getElementById("form-success");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Message validation
    const message = messageInput.value.trim();

    if (message === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent =
            "Message must contain at least 10 characters.";
        isValid = false;
    } else if (message.length > 500) {
        messageError.textContent =
            "Message cannot exceed 500 characters.";
        isValid = false;
    }

    // Successful validation
    if (isValid) {

        formSuccess.textContent =
            "Your message passed validation successfully!";

        contactForm.reset();
    }

});

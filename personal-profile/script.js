
// ========================================
// 1. THEME TOGGLE
// ========================================

const themeButton = document.getElementById("theme-toggle");

function applyTheme(theme) {

    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
        themeButton.textContent = "Switch to Light Theme";
    } else {
        themeButton.textContent = "Switch to Dark Theme";
    }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");

applyTheme(
    savedTheme === "dark" ? "dark" : "light"
);

// Listen for theme button clicks
themeButton.addEventListener("click", function () {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);

});


// ========================================
// 2. SELECT CONTACT FORM ELEMENTS
// ========================================

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

const formStatus = document.getElementById("form-status");


// ========================================
// 3. HELPER FUNCTION
// ========================================

function showError(input, errorElement, message) {

    errorElement.textContent = message;

    input.classList.add("invalid");
    input.classList.remove("valid");

    input.setAttribute("aria-invalid", "true");
}

function showSuccess(input, errorElement) {

    errorElement.textContent = "";

    input.classList.remove("invalid");
    input.classList.add("valid");

    input.setAttribute("aria-invalid", "false");
}


// ========================================
// 4. VALIDATE NAME
// ========================================

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        showError(
            nameInput,
            nameError,
            "Name is required."
        );

        return false;
    }

    showSuccess(nameInput, nameError);

    return true;
}


// ========================================
// 5. VALIDATE EMAIL
// ========================================

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        showError(
            emailInput,
            emailError,
            "Email is required."
        );

        return false;
    }

    if (!emailPattern.test(email)) {

        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        return false;
    }

    showSuccess(emailInput, emailError);

    return true;
}


// ========================================
// 6. VALIDATE MESSAGE
// ========================================

function validateMessage() {

    const message = messageInput.value.trim();

    if (message === "") {

        showError(
            messageInput,
            messageError,
            "Message is required."
        );

        return false;
    }

    if (message.length < 10) {

        showError(
            messageInput,
            messageError,
            "Message must contain at least 10 characters."
        );

        return false;
    }

    if (message.length > 500) {

        showError(
            messageInput,
            messageError,
            "Message cannot exceed 500 characters."
        );

        return false;
    }

    showSuccess(messageInput, messageError);

    return true;
}


// ========================================
// 7. VALIDATE WHILE TYPING
// ========================================

nameInput.addEventListener("input", function () {

    validateName();
    formStatus.textContent = "";

});

emailInput.addEventListener("input", function () {

    validateEmail();
    formStatus.textContent = "";

});

messageInput.addEventListener("input", function () {

    validateMessage();
    formStatus.textContent = "";

});


// ========================================
// 8. FORM SUBMISSION
// ========================================

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formStatus.textContent = "";

    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();

    if (nameValid && emailValid && messageValid) {

        formStatus.textContent =
            "Success! Your form passed validation.";

        formStatus.className = "success-message";

        // Clear the form
        contactForm.reset();

        // Remove validation styles
        nameInput.classList.remove("valid");
        emailInput.classList.remove("valid");
        messageInput.classList.remove("valid");

        nameInput.removeAttribute("aria-invalid");
        emailInput.removeAttribute("aria-invalid");
        messageInput.removeAttribute("aria-invalid");

    } else {

        formStatus.textContent =
            "Please correct the errors above.";

        formStatus.className = "";

    }

});

// =========================
// APPOINTMENT FORM
// =========================

const appointmentForm = document.querySelector(".appointment-form");
const formMessage = document.getElementById("form-message");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your appointment request has been received.";

        appointmentForm.reset();
    });
}


// =========================
// PREVENT PAST APPOINTMENT DATES
// =========================

const dateInput = document.getElementById("date");

if (dateInput) {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;
}

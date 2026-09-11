// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// Close mobile menu when a link is clicked

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =========================
// APPOINTMENT FORM
// =========================

const appointmentForm =
    document.getElementById("appointmentForm");

const formMessage =
    document.getElementById("formMessage");


appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const date =
        document.getElementById("date").value;


    if (name === "" || phone === "" || date === "") {

        formMessage.textContent =
            "Please fill in all required fields.";

        return;
    }


    formMessage.textContent =
        "Thank you, " + name +
        "! Your appointment request has been received.";


    appointmentForm.reset();

});


// =========================
// SET MINIMUM APPOINTMENT DATE
// =========================

const dateInput =
    document.getElementById("date");

const today =
    new Date().toISOString().split("T")[0];

dateInput.min = today;


// =========================
// SIMPLE SCROLL ANIMATION
// =========================

const animatedElements =
    document.querySelectorAll(
        ".service-card, .contact-card, .hero-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "0.6s ease";

    observer.observe(element);

});
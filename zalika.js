
// =====================================
// ZALIKA VEIL - JAVASCRIPT
// =====================================


// 1. NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    }

});


// 2. DROPDOWN ABOUT

const dropdowns = document.querySelectorAll(".about-dropdown");

dropdowns.forEach(function (dropdown) {

    dropdown.addEventListener("toggle", function () {

        if (dropdown.open) {

            dropdowns.forEach(function (otherDropdown) {

                if (otherDropdown !== dropdown) {
                    otherDropdown.open = false;
                }

            });

        }

    });

});


// 3. BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (backToTop) {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    }

});

if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// 4. CONTENT FADE IN ANIMATION

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

fadeElements.forEach(function (element) {
    observer.observe(element);
});


// 5. AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 6. REVIEW FORM MESSAGE

const reviewForm = document.querySelector(".customer-review-form");

if (reviewForm) {

    reviewForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you for sharing your experience with Zalika Veil!");

        reviewForm.reset();

    });

}


// 7. CONTACT FORM MESSAGE

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you for contacting Zalika Veil!");

        contactForm.reset();

    });

}

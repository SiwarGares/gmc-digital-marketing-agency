
const a = document.querySelectorAll(".work-process .card-container > div"); // Select all card divs
a.forEach((b) => {
    b.addEventListener("click", () => {
        b.classList.toggle("active");
    });
});

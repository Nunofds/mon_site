let divCollapse = document.getElementById("navbarSupportedContent");
let classes = divCollapse.classList;
let liNav = document.querySelectorAll(".nav-item");
let btn = document.getElementById("btnToogler");

for (let i = 0; i < liNav.length; i++) {
    liNav[i].addEventListener("click", () => {
        classes.remove("show");
        btn.classList.add("collapsed");
        btn.setAttribute("aria-expanded", false);
    });
}

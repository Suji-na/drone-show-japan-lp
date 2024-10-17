
function windowScroll() {
    const header = document.getElementById("header");
    if (window.scrollY >= 100) {
        header.style.background = "#000";
    } else {
        header.style.background = "";
    }
}

window.addEventListener("scroll", windowScroll);

export { windowScroll };
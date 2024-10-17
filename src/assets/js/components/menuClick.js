function menuClick() {
    document.addEventListener("DOMContentLoaded", function () {
        const btnClick = document.querySelector(".hamburger");
        const headerMenu = document.querySelector(".header-menu");
        const headerItems = document.querySelectorAll(".header-list-item");

        btnClick.addEventListener("click", function () {
            btnClick.classList.toggle("close");
            headerMenu.classList.toggle("open");
        });

        headerItems.forEach(headerItem => {
            headerItem.addEventListener("click", function () {
                btnClick.classList.remove("close");
                headerMenu.classList.remove("open");
            });
        });
        window.addEventListener("click", function (event) {
            if (!btnClick.contains(event.target) && !headerMenu.contains(event.target)) {
                btnClick.classList.remove("close");
                headerMenu.classList.remove("open");
            }
        });
    });
}
export { menuClick };

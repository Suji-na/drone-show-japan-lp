function faq() {
    const Qblock = document.querySelectorAll(".faq-q-block");

    if (Qblock == null) return;

    Qblock.forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle("open");
            el.nextElementSibling.classList.toggle("active");

            const aBlock = el.nextElementSibling;
            let aBlockHeight = aBlock.scrollHeight;

            if (aBlock.classList.contains("active")) {
                aBlock.style.maxHeight = `${aBlockHeight}px`;
            } else {
                aBlock.style.maxHeight = "";
            }
        });
    });
}

export { faq };
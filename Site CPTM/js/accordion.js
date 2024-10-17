const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const itemBody = accordionItemHeader.nextElementSibling;
        const isActive = accordionItemHeader.classList.toggle("active");

        if (isActive) {
            itemBody.style.maxHeight = itemBody.scrollHeight + "px";
        } else {
            itemBody.style.maxHeight = 0;
        }
    });
});

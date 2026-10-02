function loadem() {
    Object.keys(sessionStorage).forEach(key => { Array.from(document.getElementsByClassName(key)).forEach((index) => { index.innerHTML = sessionStorage.getItem(key) }) });

    [].forEach.call(document.getElementsByTagName("copy"), function (el) {
        el.addEventListener("click", function (event) {
            if (event.target.tagName == "COPY") { navigator.clipboard.writeText(event.target.innerText) }
            if (event.target.tagName == "W") { navigator.clipboard.writeText(event.target.parentNode.innerText) }
        })
    })
    openLinksInNewTab()
}

function openLinksInNewTab() {
    document.querySelectorAll(".md-content a[href]").forEach((anchor) => {
        const href = anchor.getAttribute("href") || ""
        if (!href || href.startsWith("#") || href.startsWith("javascript:")) {
            return
        }
        anchor.setAttribute("target", "_blank")
        anchor.setAttribute("rel", "noopener noreferrer")
    })
}

loadem()
if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
        loadem()
    })
}
function setValues() {
    document.querySelector("#info").querySelectorAll("input").forEach((input) => { sessionStorage.setItem(input.name, input.value) });
    event.preventDefault()
    loadem()
}
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
        if (!shouldOpenInNewTab(href)) {
            if (anchor.getAttribute("target") === "_blank") {
                try {
                    const url = new URL(href, window.location.href)
                    if (url.origin === window.location.origin || href.startsWith("#")) {
                        anchor.removeAttribute("target")
                        if (anchor.getAttribute("rel") === "noopener noreferrer") {
                            anchor.removeAttribute("rel")
                        }
                    }
                } catch {
                    return
                }
            }
            return
        }
        anchor.setAttribute("target", "_blank")
        anchor.setAttribute("rel", "noopener noreferrer")
    })
}

function shouldOpenInNewTab(href) {
    if (!href || href.startsWith("#") || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return false
    }
    try {
        const url = new URL(href, window.location.href)
        return url.origin !== window.location.origin
    } catch {
        return false
    }
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
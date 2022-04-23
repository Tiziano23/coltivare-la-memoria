{
    const includerPath = document.querySelector("meta[name=path]").content;
    const projectRoot = new URL(includerPath.replaceAll(/[^/.]+/g, ".."), window.location.href).href;

    class Header extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: "open" });

            // let link = document.createElement("link");
            // link.setAttribute("rel", "stylesheet");
            // link.setAttribute("href", new URL("content/styles/global.css", projectRoot));

            (async () => {
                let html = await htmlTemplateLoader.load(new URL("content/components/header.html", projectRoot));
                html = html.replaceAll("{projectRoot}", projectRoot);
                this.shadowRoot.innerHTML = html;
                if (this.shadowRoot.querySelector(`[data-page=${this.getAttribute("active-page")}]`)) {
                    this.shadowRoot.querySelector(`[data-page=${this.getAttribute("active-page")}]`).children[0].classList.add("active");
                }
                this.shadowRoot.appendChild(link);
            })();
        }
    }
    customElements.define("header-comp", Header);
}

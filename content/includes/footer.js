{
    const includerPath = document.querySelector("meta[name=path]").content;
    const projectRoot = new URL(includerPath.replaceAll(/[^/.]+/g, ".."), window.location.href).href;
    
    class Footer extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: "open" });
    
            let link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", new URL("content/styles/global.css", projectRoot));
            
            (async () => {
                let html = await htmlTemplateLoader.load(new URL("content/components/footer.html", projectRoot));
                html = html.replaceAll("{projectRoot}", projectRoot);
                this.shadowRoot.innerHTML = html;
                this.shadowRoot.appendChild(link);
            })();
        }
    }
    customElements.define("footer-comp", Footer);
}
{
    let html = document.documentElement;

    let substitutions = html.innerHTML.matchAll(/{{\S*}}/g);
    for (let sub of substitutions) {
        html.innerHTML.replace
    }

    // (async () => {
    //     let html = await htmlTemplateLoader.load(new URL("content/components/header.html"));
    //     html = html.replaceAll("", projectRoot);

    //     if (this.shadowRoot.querySelector(`[data-page=${this.getAttribute("active-page")}]`)) {
    //         this.shadowRoot.querySelector(`[data-page=${this.getAttribute("active-page")}]`).children[0].classList.add("active");
    //     }
    // })();
}

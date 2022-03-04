function scriptLoader(relativeUrl) {
    return new Promise((resolve, reject) => {
        let s = document.createElement("script");
        s.src = new URL(relativeUrl, projectRoot);
        document.head.appendChild(s);
        s.onload = resolve;
    });
}

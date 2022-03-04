"use-strict"
const htmlTemplateLoader = {
    load: async function(url) {
        const res = await fetch(url);
        return await res.text();
    }
}
"use strict";
(async () => {
    const res = await fetch("/content/biographies/fetch.php");
    const data = await res.json();

    for (const filename of data.files) {
        const res = await fetch("/content/biographies/" + filename);
        const fileData = await res.json();
        loadBiogarphy(fileData);
    }
})();

function loadBiogarphy(data) {
    
}

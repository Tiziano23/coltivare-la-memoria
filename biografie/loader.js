"use strict";
(async function () {
    const res = await fetch("../content/biographies/fetch.php");
    const data = await res.json();

    for (const filename of data.files) {
        const res = await fetch("../content/biographies/" + filename);
        const fileData = await res.json();
        loadBiogarphy(filename.replace('.json',''), fileData);
    }
})();

async function loadBiogarphy(id, data) {
    let template = `<tr>
        <td>{{name}}</td>
        <td>{{surname}}</td>
        <td>{{location}}</td>
        <td>{{birthday}}</td>
        <td>{{recognition_date}}</td>
        <td><a href="./archivio?id=${id}">Leggi di più <i class="bi bi-box-arrow-up-right"></i></a></td>
    </tr>`;
    
    const mergedData = { ...data.person, ...data.story, ...data.metadata };
    
    if (mergedData.birthday !== '/' && mergedData.birthday.length > 4) mergedData.birthday = new Date(mergedData.birthday).toLocaleDateString();
    if (mergedData.recognition_date !== '/' && mergedData.recognition_date.length > 4) mergedData.recognition_date = new Date(mergedData.recognition_date).toLocaleDateString();
    
    const results = [...template.matchAll(/\{{2}.+?\}{2}/g)];
    for (let item of results) {
        let key = item[0].replace(/[\{\}]/g, "");
        if (mergedData.hasOwnProperty(key)) {
            template = template.replace(item[0], mergedData[key]);
        }
    }
    let newRow = document.getElementById('righteous').insertRow(-1);
    newRow.innerHTML = template;
}

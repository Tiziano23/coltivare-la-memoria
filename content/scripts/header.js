{
    let activePage = document.querySelector("meta[name=activeMenuItem]")?.content;
    document.querySelector(`#main-header [data-item=${activePage}]`)?.children[0].classList.add("active");
}
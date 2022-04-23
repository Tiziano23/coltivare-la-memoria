{
    let activePage = document.querySelector("meta[name=page]")?.content;
    document.querySelector(`#main-header [data-page=${activePage}]`)?.children[0].classList.add("active");
}
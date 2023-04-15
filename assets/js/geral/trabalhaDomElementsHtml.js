function showContentById(id) {
    let elemento = document.querySelector("#" + id);
    elemento.style.display = "block";
}

function hideContentById(id) {
    let elemento = document.querySelector("#" + id);
    elemento.style.display = "none";
}

function showContentByClass(className) {
    let elemento = document.querySelector("." + className);
    elemento.style.display = "block";
}

function hideContentByClass(className) {
    let elemento = document.querySelector("." + className);
    elemento.style.display = "none";
}

function closeModal() {
    let modal = document.querySelector(".modal"); // select modal element
    modal.classList.remove("show"); // remove "show" class from modal element
}

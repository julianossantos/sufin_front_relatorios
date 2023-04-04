function showHiddenContentById(tipo = "none", id) {
  let elemento = document.querySelector("#" + id);
  elemento.style.display = tipo;
}

function showHiddenContentByClass(tipo = "none", className) {
  let elemento = document.querySelector("." + className);
  elemento.style.display = tipo;
}

function closeModal() {
  let modal = document.querySelector(".modal"); // select modal element
  modal.classList.remove("show"); // remove "show" class from modal element
}

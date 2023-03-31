function showHiddenContentById(tipo = "none", id) {
  let elemento = document.querySelector("#" + id);
  elemento.style.display = tipo;
}

function showHiddenContentByClass(tipo = "none", className) {
  let elemento = document.querySelector("." + className);
  elemento.style.display = tipo;
}

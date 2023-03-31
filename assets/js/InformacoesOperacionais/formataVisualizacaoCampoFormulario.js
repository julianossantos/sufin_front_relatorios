//Ex: campo = document.querySelector("input.data")
function formatarData(campo) {
  campo.onkeypress = (e) => {
    let dataFormatada = dateInputMask(e.target);
  };
}

//Ex: campo = document.querySelector("input.valorDecimal")
function formatarValorDecimal(campo) {
  campo.onkeypress = (e) => {
    let valorFormatado = formatNumberWithDecimal(e.target.value);
    campo.value = valorFormatado;
  };
}

function setNomeUsuario(identificador, value) {
  let inputResponsavel = document.querySelector(identificador);
  inputResponsavel.value = value.toUpperCase();
}

//Ex: campo = document.querySelector("#data")
function formatarBordaValidacaoCampo(dataValida, campo, cor = "#c9c9c9") {
  if (!dataValida) {
    campo.style.borderColor = "#FF0000";
    campo.focus();
    return false;
  } else {
    campo.style.borderColor = "#c9c9c9";
  }

  return true;
}

/*const btnOpenModalCadastro = document.getElementById(
  "btncadDemDisponibilidade"
);

btnOpenModalCadastro.addEventListener("change", formatarData);*/

const inputData = document.querySelector(".tpdata");
const inputValor = document.querySelector(".valor");
const inputNumerico = document.querySelector(".numeros");

/*inputValor.maskMoney({
  prefix: "R$ ",
  allowNegative: false,
  thousands: ".",
  decimal: ",",
  affixesStay: false,
});

inputNumerico.onchange = (e) => {
  e.preventDefault();
  const valorInput = inputNumerico.value;

  valorInput = valorInput.replace(/[^0123456789.]/g, "");
};

inputData.onchange = (e) => {
  e.preventDefault();
  console.log(verificarInputData(inputData.value));
};*/

/*const maskDate = (value) => {
  let v = value.replace(/\D/g, "").slice(0, 10);

  if (v.length >= 5) {
    return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
  } else if (v.length == 3) {
    return `${v.slice(0, 2)}/${v.slice(2)}`;
  }
  return v;
};*/

/*function formatarData(campo) {
  console.log(campo.value);

  let v = campo.value.replace(/\D/g, "").slice(0, 10);
  if (v.length >= 10) {
    return v;
  } else if (v.length >= 5) {
    return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
  } else if (v.length >= 3) {
    return `${v.slice(0, 2)}/${v.slice(2)}`;
  }
  return v;
}*/

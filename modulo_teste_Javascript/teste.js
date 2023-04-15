import formatacaoDados from "./formataDados.js";

try {
  const f = new formatacaoDados();
  console.log(f.formatNumberIntToMilhar(5635964546.4565));
} catch (e) {
  console.log(e);
}

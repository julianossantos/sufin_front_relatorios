/****************************************************
 * As funções utilizadas nesse script, estão vinculadas aos arquivos .js que constam em
 * /app/relatorios/pages/informacoesOperacionais/index.php
 *
 * Obs: A intenção é converter esses arquivos para classe e depois fazer imports nesse script.
 * Porém por questão técnicas, que necessitam de muitos ajustes em toda estrutura do site,
 * a opção escolhida foi manter os arquivos separados dessa forma, para uma migração mais "suave"
 * posteriormente.
 * @author Juliano <C085111>
 ***************************************************/
import FormataDados from "../../geral/formataDados.js";
import ManipulaDomElements from "../../geral/trabalhaDomElementsHtml.js";
import MontarTabelaDataTables from "../montarDataTables.js";

console.log("teste");

const formatar = new FormataDados();
console.log(formatar.formatNumberIntToMilhar(5635964546.4565));

/*const formatar = new FormataDados();
const manipularDom = new ManipulaDomElements();

const btncadDemDisponibilidade = document.getElementById(
  "btnCadDemDisponibilidade"
);
const selTipoConta = document.getElementById("tipoContaDisponibilidades");

btncadDemDisponibilidade.onclick = (e) => {
  e.preventDefault();

  selTipoConta.value = "";
  manipularDom.showHiddenContentById("none", "divFormDisponibilidades");
  manipularDom.showHiddenContentById("block", "imgDocDisponibilidades");
};

const userNameLogged = document.querySelector("span#user_name");
const tipoDisponibilidade = ["CP", "PA", "FI", "PP", "BB"];
selTipoConta.onchange = (e) => {
  e.preventDefault();

  manipularDom.showHiddenContentById("none", "imgDocDisponibilidades");
  manipularDom.showHiddenContentById("block", "divFormDisponibilidades");
  setNomeUsuario(".responsavelDisponibilidades", userNameLogged.innerText);
  manipularDom.showHiddenContentByClass("block", "btnCad");
  manipularDom.showHiddenContentByClass("none", "btnAlt");
  showHiddenField();
};

function showHiddenField() {
  tipoDisponibilidade.map((value) => {
    if (value !== selTipoConta.value) {
      manipularDom.showHiddenContentById(
        "none",
        "divSelectConta" + value + "Disponibilidades"
      );
    } else {
      manipularDom.showHiddenContentById(
        "block",
        "divSelectConta" + value + "Disponibilidades"
      );
    }
  });
}

const table = new MontarTabelaDataTables();
const filtroData = document.getElementById("#dataFiltroDisponibilidades");
table(
  "tablesDisponibilidades",
  "/app/disponibilidades/tableservice.php?datafiltro=" + filtroData,
  [
    { data: "ordem" },
    { data: "fato_operacional", width: "50px" },
    { data: "detalhedoc" },
    { data: "valorpago" },
    { data: "dtpgto" },
    { data: "botao" },
  ]
);

let inputDataBalancete = document.querySelector("input.tipoDataBalancete");
formatar.formatarData(inputDataBalancete);

inputDataBalancete.addEventListener("focusout", (e) => {
  if (
    !formatarBordaValidacaoCampo(
      moment(e.target.value, "DD/MM/YYYY", true).isValid(),
      inputDataBalancete
    )
  ) {
    showStackBarTop(
      "error",
      "Erro de validação de campo",
      "Data Inválida. Favor digitar uma data válida no campo",
      true
    );
  }
});

let inputDataPgto = document.querySelector("input.tipoDataPgto");
formatar.formatarData(inputDataPgto);

inputDataPgto.addEventListener("focusout", (e) => {
  let validarData = moment(e.target.value, "DD/MM/YYYY", true).isValid();
  if (!formatarBordaValidacaoCampo(validarData, inputDataPgto)) {
    showStackBarTop(
      "error",
      "Erro de validação de campo",
      "Data Inválida. Favor digitar uma data válida no campo",
      true
    );
  }
});

let inputValorComDecimal = document.querySelector("input.valorDecimal");
formatar.formatarValorDecimal(inputValorComDecimal);

$("#unidadeDestinoDisponibilidades").autocomplete({
  source: "/app/disponibilidades/autocomplete.php",
});

let btnConsultarDadosModal = document.querySelector("#tablesDisponibilidades");

if (btnConsultarDadosModal) {
  btnConsultarDadosModal.addEventListener("click", (e) => {
    const buttonConsulta = e.target.closest("td > button.btnConsultaDN");
    if (buttonConsulta) {
      fetch(`/app/disponibilidades/tableservice.php?nuOrdem=${tr[0].innerText}`)
        .then((response) => response.json())
        .then((data) => {
          manipularDom.showHiddenContentByClass("none", "btnCad");
          manipularDom.showHiddenContentByClass("block", "btnAlt");
          manipularDom.setDadosFormularioModal(data);
        })
        .catch((err) => console.log(err));
    }
  });
}

function setDadosFormularioModal(data) {
  manipularDom.showHiddenContentById("none", "imgDocDisponibilidades");
  selTipoConta.value = data.data[0]["tipoconta"];
  showHiddenField();
  const selectFatoOperacional = document.querySelector(
    `#divSelectConta${data.data[0]["tipoconta"]}Disponibilidades select`
  );

  selectFatoOperacional.value =
    data.data[0]["evento"] + "@" + data.data[0]["fato_operacional"];
  setNomeUsuario(
    ".responsavelDisponibilidades",
    data.data[0]["responsaveldoc"]
  );
  const textArea = document.querySelector(".historico");
  textArea.value = data.data[0]["detalhedoc"];

  const inputEvento = document.querySelector(".evento");
  inputEvento.value = data.data[0]["evento"];

  inputDataBalancete.value = data.data[0]["databal"];
  inputValorComDecimal.value = data.data[0]["valorpago"].replace("R$ ", "");

  const selectTipoLancamento = document.querySelector(
    "select.tipoDeLancamento"
  );
  selectTipoLancamento.value = data.data[0]["tipodelancamento"];

  inputDataPgto.value = data.data[0]["dtpgto"];

  const inputUnidade = document.querySelector(".unidade");
  inputUnidade.value = data.data[0]["destinodoc"];
}

//console.log(sendGet("/app/disponibilidades/tableservice.php?nuOrdem=1292"));*/

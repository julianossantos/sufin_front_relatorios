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

const btncadDemDisponibilidade = document.getElementById(
  "btnCadDemDisponibilidade"
);
const selTipoConta = document.getElementById("tipoContaDisponibilidades");

btncadDemDisponibilidade.onclick = (e) => {
  e.preventDefault();

  selTipoConta.value = "";
  showHiddenContentById("none", "divFormDisponibilidades");
  showHiddenContentById("block", "imgDocDisponibilidades");
};

const userNameLogged = document.querySelector("span#user_name");
const tipoDisponibilidade = ["CP", "PA", "FI", "PP", "BB"];
selTipoConta.onchange = (e) => {
  e.preventDefault();

  showHiddenContentById("none", "imgDocDisponibilidades");
  showHiddenContentById("block", "divFormDisponibilidades");
  setNomeUsuario(".responsavelDisponibilidades", userNameLogged.innerText);
  showHiddenContentByClass("block", "btnCad");
  showHiddenContentByClass("none", "btnAlt");
  showHiddenField();
};

function showHiddenField() {
  tipoDisponibilidade.map((value) => {
    if (value !== selTipoConta.value) {
      showHiddenContentById(
        "none",
        "divSelectConta" + value + "Disponibilidades"
      );
    } else {
      showHiddenContentById(
        "block",
        "divSelectConta" + value + "Disponibilidades"
      );
    }
  });
}

const filtroData = document.getElementById("#dataFiltroDisponibilidades");
montarTabelaDataTable(
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
formatarData(inputDataBalancete);

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
formatarData(inputDataPgto);

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
formatarValorDecimal(inputValorComDecimal);

$("#unidadeDestinoDisponibilidades").autocomplete({
  source: "/app/disponibilidades/autocomplete.php",
});

let btnConsultarDadosModal = document.querySelector("#tablesDisponibilidades");

if (btnConsultarDadosModal) {
  btnConsultarDadosModal.addEventListener("click", (e) => {
    const buttonConsulta = e.target.closest("td > button.btnConsultaDN");
    if (buttonConsulta) {
      const tr = buttonConsulta.closest("tr").childNodes;
      /*tr.forEach(function (currentValue, currentIndex) {
        console.log(`${currentValue.innerText}, ${currentIndex}`);
      });*/
      fetch(`/app/disponibilidades/tableservice.php?nuOrdem=${tr[0].innerText}`)
        .then((response) => response.json())
        .then((data) => {
          showHiddenContentByClass("none", "btnCad");
          showHiddenContentByClass("block", "btnAlt");
          setDadosFormularioModal(data);
        })
        .catch((err) => console.log(err));
    }
  });
}

function setDadosFormularioModal(data) {
  showHiddenContentById("none", "imgDocDisponibilidades");
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

//console.log(sendGet("/app/disponibilidades/tableservice.php?nuOrdem=1292"));

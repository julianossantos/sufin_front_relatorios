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

const ano = new Date().getFullYear();
document.querySelector(".numerodoc").value = 1 + ano + 9999;

const selectFiltroTipoConta = document.querySelector(
    "#tipoDocumentoDisponibilidade"
);

selectFiltroTipoConta.addEventListener("change", (e) => {
    montarTabela(
        "/app/disponibilidades/tableservice.php?tipo=" + e.target.value
    );
});

const btncadDemDisponibilidade = document.getElementById(
    "btnCadDemDisponibilidade"
);
const selectTipoConta = document.getElementById("tipoContaDisponibilidades");

btncadDemDisponibilidade.onclick = (e) => {
    e.preventDefault();

    limparCamposForm();
    //selectTipoConta.value = "";
    hideContentById("divFormDisponibilidades"); //script geral/trabalhaDomElementsHtml
    showContentById("imgDocDisponibilidades"); //script geral/trabalhaDomElementsHtml
};

const userNameLogged = document.querySelector("input#input_user_name").value;
const tipoDisponibilidade = ["CP", "PA", "FI", "PP", "BB"];
selectTipoConta.onchange = (e) => {
    e.preventDefault();

    hideContentById("imgDocDisponibilidades"); //script geral/trabalhaDomElementsHtml
    showContentById("divFormDisponibilidades"); //script geral/trabalhaDomElementsHtml
    setNomeUsuario(".responsavelDisponibilidades", userNameLogged); //script formataVisualizacaoCampoFormulario
    showContentByClass("btnCad"); //script geral/trabalhaDomElementsHtml
    hideContentByClass("btnAlt"); //script geral/trabalhaDomElementsHtml
    showHiddenField();
};

function showHiddenField() {
    tipoDisponibilidade.map((value) => {
        if (value !== selectTipoConta.value) {
            hideContentById("divSelectConta" + value + "Disponibilidades"); //script trabalhaDomElementsHtml
        } else {
            showContentById("divSelectConta" + value + "Disponibilidades"); //script trabalhaDomElementsHtml
        }
    });
}

const filtroData = document.getElementById("#dataFiltroDisponibilidades");
montarTabela("/app/disponibilidades/tableservice.php?datafiltro=" + filtroData);

function montarTabela(url) {
    montarTabelaDataTables("tablesDisponibilidades", url, [
        { data: "ordem" },
        { data: "fato_operacional", width: "50px" },
        { data: "detalhedoc" },
        { data: "valorpago" },
        { data: "dtpgto" },
        { data: "botao" },
    ]); //script ../montarDataTables
}

let inputDataPgto = document.querySelector("input.tipoDataPgto");
formatarData(inputDataPgto); //script formataVisualizacaoCampoFormulario

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
formatarValorDecimal(inputValorComDecimal); //script formataVisualizacaoCampoFormulario

$(".unidade").autocomplete({
    source: "../../app/contaspg/autocomplete2.php",
    //source: "/api-sufin/unidades/geral-buscar-autocomplete",
});

let btnConsultarDadosModal = document.querySelector("#tablesDisponibilidades");

/**** Visualiza os dados do registro na modal */
if (btnConsultarDadosModal) {
    btnConsultarDadosModal.addEventListener("click", (e) => {
        const buttonConsulta = e.target.closest("td > button.btnConsultaDN");
        if (buttonConsulta) {
            showContentById("divFormDisponibilidades");
            const tr = buttonConsulta.closest("tr").childNodes;
            document.querySelector(".ordem").value = tr[0].innerText;
            fetch(
                `/app/disponibilidades/tableservice.php?nuOrdem=${tr[0].innerText}`
            )
                .then((response) => response.json())
                .then((data) => {
                    hideContentByClass("btnCad"); //script trabalhaDomElementsHtml
                    showContentByClass("btnAlt"); //script trabalhaDomElementsHtml
                    setDadosFormularioModal(data);
                })
                .catch((err) => console.log(err)); //script geral/fetch
        }
    });
}

function setDadosFormularioModal(data) {
    hideContentById("imgDocDisponibilidades"); //script trabalhaDomElementsHtml
    selectTipoConta.value = data.data[0]["tipoconta"];
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

    inputValorComDecimal.value = data.data[0]["valorpago"].replace("R$ ", "");

    const selectTipoLancamento = document.querySelector(
        "select.tipoDeLancamento"
    );
    selectTipoLancamento.value = data.data[0]["tipodelancamento"];

    inputDataPgto.value = data.data[0]["dtpgto"];

    const inputUnidade = document.querySelector(".unidade");
    inputUnidade.value = data.data[0]["destinodoc"];
}

/****Cadastrar dados do registro na modal */
let btnCadRegistro = document.querySelector("button.btnCad");
if (btnCadRegistro) {
    btnCadRegistro.addEventListener("click", async (e) => {
        e.preventDefault();
        document.querySelector(".numerodoc").value = 1 + ano + 9999; //Pq disso não faço ideia (já estava no script do marquinhos)
        const form = document.querySelector("#formDocsDisponibilidades");
        const returnInsert = await sendPost(
            `http://sufin.caixa/api-sufin/informacoes-operacionais/disponibilidades`,
            formToJSONString(form) //script formataCampos
        ); //script geral/fetch

        showMessage(returnInsert);
    });
}

/****Alterar dados do registro na modal */
let btnAlterarRegistro = document.querySelector("button.btnAlt");
if (btnAlterarRegistro) {
    btnAlterarRegistro.addEventListener("click", async (e) => {
        e.preventDefault();
        inserirSpinnerEmBotaoByClass("btnAlt");
        btnAlterarRegistro.disabled = true;
        const form = document.querySelector("#formDocsDisponibilidades");
        const nuOrdem = document.querySelector(".ordem").value;
        const returnUpdate = await sendPost(
            `http://sufin.caixa/api-sufin/informacoes-operacionais/disponibilidades/${nuOrdem}`,
            formToJSONString(form) //script formataCampos
        ); //script geral/fetch

        showMessage(returnUpdate);
        btnAlterarRegistro.disabled = false;
        removerSpinnerEmBotaoByClass("btnAlt");
    });
}

/**** deletar registro na modal */
let btnExcluirRegistro = document.querySelector("button.btnExc");
if (btnExcluirRegistro) {
    btnExcluirRegistro.addEventListener("click", async (e) => {
        e.preventDefault();
        inserirSpinnerEmBotaoByClass("btnExc");
        const nuOrdem = document.querySelector(".ordem").value;
        const returnDelete = await sendPost(
            `http://sufin.caixa/api-sufin/informacoes-operacionais/disponibilidades/${nuOrdem}/delete`
        ); //script geral/fetch

        showMessage(returnDelete);
        btnExcluirTributo.disabled = false;
        removerSpinnerEmBotaoByClass("btnExc");
    });
}

//mensagem é um objeto de retorno da requisição
function showMessage(
    mensagem,
    tipoRetorno = "success",
    titulo = "Retorno da ação"
) {
    if (!mensagem.messages.success) {
        tipoRetorno = "error";
        titulo = "Erro da validação do registro";
        mensagem = mensagem.messages.error;
    } else {
        mensagem = mensagem.messages.success;
        let btnClose = document.querySelector("button.btn-fechar");
        btnClose.click();
        montarTabela(
            "/app/disponibilidades/tableservice.php?datafiltro=" + filtroData
        );
    }

    showStackBarTop(tipoRetorno, titulo, mensagem, true); //script /app/assets/js/pnotify/PnotifyViewAlertMessage.js
}

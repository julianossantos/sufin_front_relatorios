montarTabela("/app/fatos_operacionais/tableservice.php");

const filtroTipoConta = document.querySelector("select.filtroTipoConta");
filtroTipoConta.addEventListener("change", (e) => {
    e.preventDefault();
    montarTabela(
        `/app/fatos_operacionais/tableservice.php?tipo=${e.target.value}`
    );
});

const btnCadastro = document.querySelector("button.btnCadastro");
btnCadastro.addEventListener("click", (e) => {
    e.preventDefault();

    limparCamposForm();
    hideContentById("divFormFatos");
    showContentByClass("imgDocumentoFatos");
});

const selectTipoConta = document.querySelector("select.tipoConta");
selectTipoConta.addEventListener("change", (e) => {
    e.preventDefault();

    showContentById("btnCadastrarFato");
    hideContentById("btnAlterarFato");
    hideContentById("btnExcluirFato");
    const valorSelect = e.target.value;
    if (valorSelect === "") {
        hideContentById("divFormFatos");
        showContentByClass("imgDocumentoFatos");
    } else {
        hideContentByClass("imgDocumentoFatos");
        showContentById("divFormFatos");
    }
});

/**** Visualiza os dados do registro na modal */
const btnConsultarDadosModal = document.querySelector("#tableFatoOperacionais");
if (btnConsultarDadosModal) {
    btnConsultarDadosModal.addEventListener("click", async (e) => {
        const buttonConsulta = e.target.closest("td > button.btnConsultaDN");
        if (buttonConsulta) {
            showContentById("divFormFatos");
            hideContentByClass("imgDocumentoFatos");
            hideContentById("btnCadastrarFato");
            showContentById("btnExcluirFato");
            showContentById("btnAlterarFato");
            const tr = buttonConsulta.closest("tr").childNodes;
            document.querySelector(".ordem").value = tr[0].innerText;
            const returnFato = await sendGet(
                `/api-sufin/informacoes-operacionais/fatos-operacionais/${tr[0].innerText}`
            );
            if (returnFato.error === 404) {
                document.querySelector("button#btnCloseModalFatos").click();
                return showMessageFatos(returnFato);
            }

            hideContentByClass("btnCadastrarFato");
            showContentByClass("btnAlterarFato");
            setDadosFormularioModal(returnFato);
        }
    });
}

/**** Cadastrar Fato operacional*****/
const btnCadastrarFato = document.querySelector("button#btnCadastrarFato");
if (btnCadastrarFato) {
    btnCadastrarFato.addEventListener("click", async (e) => {
        e.preventDefault();
        const form = document.querySelector("#formFatosOperacionais");
        const erros = validarErrosCampos();
        if (erros === false) {
            const returnInsert = await sendPost(
                `http://sufin.caixa/api-sufin/informacoes-operacionais/fatos-operacionais`,
                formToJSONString(form) //script formataCampos
            ); //script geral/fetch
            showMessageFatos(returnInsert);
        } else {
            showStackBarTop(
                "error",
                "Erro de validação de campos",
                erros,
                true
            );
        }
    });
}

/**** Alterar dados do fato operacional ****/
const btnAlterarFato = document.querySelector("button#btnAlterarFato");
if (btnAlterarFato) {
    btnAlterarFato.addEventListener("click", async (e) => {
        e.preventDefault();
        inserirSpinnerEmBotaoByClass("btnAlterarFato");
        btnAlterarFato.disabled = true;
        const form = document.querySelector("#formFatosOperacionais");
        const nuOrdem = document.querySelector(".ordem").value;
        const returnUpdate = await sendPost(
            `http://sufin.caixa/api-sufin/informacoes-operacionais/fatos-operacionais/${nuOrdem}`,
            formToJSONString(form) //script formataCampos
        ); //script geral/fetch

        showMessageFatos(returnUpdate);
        btnAlterarFato.disabled = false;
        removerSpinnerEmBotaoByClass("btnAlterarFato");
    });
}

/**** deletar Fato Operacional */
let btnExcluirFato = document.querySelector("button.btnExcluirFato");
if (btnExcluirFato) {
    btnExcluirFato.addEventListener("click", async (e) => {
        e.preventDefault();
        inserirSpinnerEmBotaoByClass("btnExcluirFato");
        const nuOrdem = document.querySelector(".ordem").value;
        const returnDelete = await sendPost(
            `http://sufin.caixa/api-sufin/informacoes-operacionais/fatos-operacionais/${nuOrdem}/delete`
        ); //script geral/fetch

        showMessageFatos(returnDelete);
        removerSpinnerEmBotaoByClass("btnExcluirFato");
    });
}

function validarErrosCampos() {
    let erros = "";

    let inputFatoOperacional = document.querySelector(
        "input#descricao_fato_operacional"
    ).value;

    if (inputFatoOperacional.length < 3) {
        erros += "Fato_operacional: Campo deve ter mais de 3 caracteres\n";
    }

    let inputEvento = document.querySelector("input#evento_fato").value;

    if (inputEvento.length < 4 || inputEvento.length > 4) {
        erros += "Evento: Campo deve ter 4 dígitos\n";
    }

    let inputContaDebido = document.querySelector(
        "input#conta_debito_fato"
    ).value;

    if (inputContaDebido.length < 18 || inputContaDebido.length > 18) {
        erros += "Código do Débito: Campo deve ter 18 dígitos\n";
    }

    let inputContaCredito = document.querySelector(
        "input#conta_credito_fato"
    ).value;

    if (inputContaCredito.length < 18 || inputContaCredito.length > 18) {
        erros += "Código do Crédito: Campo deve ter 18 dígitos\n";
    }

    let inputCodigoItem = document.querySelector(
        "input#codigo_item_fato"
    ).value;

    if (inputCodigoItem.length < 1) {
        erros += "Código do Item: Campo deve ter pelo menos 1 dígito\n";
    }

    return erros.length > 0 ? erros : false;
}

function setDadosFormularioModal(data) {
    selectTipoConta.value = data.dados[0]["tipoconta"];
    document.querySelector("input#descricao_fato_operacional").value =
        data.dados[0]["fato_operacional"];

    document.querySelector("input#evento_fato").value = data.dados[0]["evento"];
    document.querySelector("input#conta_credito_fato").value =
        data.dados[0]["conta_credito"];
    document.querySelector("input#conta_debito_fato").value =
        data.dados[0]["conta_debito"];
    document.querySelector("input#fluxo_de_caixa_fato").value =
        data.dados[0]["DFLUX"];
    document.querySelector("input#codigo_item_fato").value =
        data.dados[0]["coditem"];
    document.querySelector("select#contas_a_pagar_fato").value =
        data.dados[0]["contaspagar"];
}

function montarTabela(url) {
    montarTabelaDataTables("tableFatoOperacionais", url, [
        { data: "ordem" },
        { data: "tipoconta" },
        { data: "fato_operacional", width: "100px" },
        { data: "evento" },
        { data: "conta_debito" },
        { data: "conta_credito" },
        { data: "contaspagar" },
        { data: "botao" },
    ]); //script ../montarDataTables
}

function showMessageFatos(
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
        let btnClose = document.querySelector("#btnCloseModalFatos");
        btnClose.click();
        montarTabela(
            `/app/fatos_operacionais/tableservice.php?tipo=${filtroTipoConta.value}`
        );
    }

    showStackBarTop(tipoRetorno, titulo, mensagem, true); //script /app/assets/js/pnotify/PnotifyViewAlertMessage.js
}

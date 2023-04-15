const ano = new Date().getFullYear();

const montarTabela = async (url) => {
    let getDados = await sendGet(url);

    if (getDados.dados) {
        getDados.dados.forEach((dados) => {
            let data = dados.dtpgto.substring(0, 10);
            dados.dtpgto = formatDate(data);
            dados.botao = `<button type='button' class='btn btn-light btn-lg btnShowData' data-bs-toggle='modal' data-bs-target='#myModalOutrosTributos'><i class='fa fa-pencil-square-o fa-4x'></i></button>`;
        });

        montarDataTables("tableOutrosTributos", getDados.dados, [
            { data: "ordem" },
            { data: "fato_operacional", width: "100px" },
            { data: "detalhedoc" },
            { data: "valorpago" },
            { data: "dtpgto" },
            { data: "botao" },
        ]); //script ../montarDataTables
    } else {
        showMessageTributo(getDados);
    }
};
montarTabela(
    "http://sufin.caixa/api-sufin/informacoes-operacionais/outros-tributos"
);

const selectTributos = document.querySelector("#selectTributos");
const montaSelectTributos = async (e) => {
    let getDados = await sendGet(
        "http://sufin.caixa/api-sufin/informacoes-operacionais/fatos-operacionais-busca-tipo-conta/TR"
    );

    if (getDados.dados) {
        getDados.dados.forEach((item) => {
            const option = document.createElement("option");
            option.value = `${item.evento}@${item.fato_operacional}`;
            option.text = item.fato_operacional;
            selectTributos.appendChild(option);
        });
    }
};
montaSelectTributos();

const filtroTipoConta = document.querySelector(
    "select#filtroTipoContaOutrosTributos"
);
filtroTipoConta.addEventListener("change", (e) => {
    e.preventDefault();

    let valor = e.target.value;
    let url =
        valor !== ""
            ? `outros-tributos-busca-tipo-conta/${valor}`
            : `outros-tributos`;
    montarTabela(
        `http://sufin.caixa/api-sufin/informacoes-operacionais/${url}`
    );
});

const userNameLogged = document.querySelector("span#user_name");
const btnCadastro = document.querySelector("button#btnCadastroTributos");
btnCadastro.addEventListener("click", (e) => {
    e.preventDefault();

    limparCamposForm();
    hideContentById("divFormOutrosTributos");
    showContentByClass("imgDocumentoOutrosTributos");
});

const selectTipoConta = document.querySelector(
    "select#tipoContaOutrosTributos"
);
selectTipoConta.addEventListener("change", (e) => {
    e.preventDefault();

    showContentById("btnCadastrarOutrosTributos");
    hideContentById("btnAlterarOutrosTributos");
    hideContentById("btnExcluirOutrosTributos");
    setNomeUsuario(".responsavelOutrosTributos", userNameLogged.innerText);
    const valorSelect = e.target.value;
    if (valorSelect === "") {
        hideContentById("divFormOutrosTributos");
        showContentByClass("imgDocumentoOutrosTributos");
    } else {
        hideContentByClass("imgDocumentoOutrosTributos");
        showContentById("divFormOutrosTributos");
    }
});

/**** Visualiza os dados do registro na modal */
const btnConsultarDadosModal = document.querySelector("#tableOutrosTributos");
if (btnConsultarDadosModal) {
    btnConsultarDadosModal.addEventListener("click", async (e) => {
        const buttonConsulta = e.target.closest("td > button.btnShowData");
        if (buttonConsulta) {
            showContentById("divFormOutrosTributos");
            hideContentByClass("imgDocumentoOutrosTributos");
            hideContentById("btnCadastrarOutrosTributos");
            showContentById("btnExcluirOutrosTributos");
            showContentById("btnAlterarOutrosTributos");
            const tr = buttonConsulta.closest("tr").childNodes;
            document.querySelector("#ordemOutrosTributos").value =
                tr[0].innerText;
            const returnTributo = await sendGet(
                `/api-sufin/informacoes-operacionais/outros-tributos/${tr[0].innerText}`
            );
            if (returnTributo.error === 404) {
                document
                    .querySelector("button#btnCloseModalOutrosTributos")
                    .click();
                return showMessageFatos(returnTributo);
            }

            hideContentByClass("btnCadastrarOutrosTributos");
            showContentByClass("btnAlterarOutrosTributos");
            returnTributo.dados[0]["valorpago"] = returnTributo.dados[0][
                "valorpago"
            ]
                .toString()
                .replace(".", ",");
            setDadosFormularioModal(returnTributo);
        }
    });
}

let inputDataPgto = document.querySelector("input#dataPagamentoOutrosTributos");
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

let inputValorComDecimal = document.querySelector(
    "input#valorPagoOutrosTributos"
);
formatarValorDecimal(inputValorComDecimal); //script formataVisualizacaoCampoFormulario

/**** Cadastrar Tributo *****/
const btnCadastrarTributo = document.querySelector(
    "button#btnCadastrarOutrosTributos"
);
if (btnCadastrarTributo) {
    btnCadastrarTributo.addEventListener("click", async (e) => {
        e.preventDefault();
        const form = document.querySelector("#formOutrosTributos");
        const erros = validarErrosCamposTributos();
        if (erros === false) {
            document.querySelector("input#numeroDocOutrosTributos").value =
                1 + ano + 9999; //Pq disso não faço ideia (já estava no script do marquinhos)
            document.querySelector("input#eventoOutrosTributos").value = 2024; //Pq disso não faço ideia (já estava no script do marquinhos)
            document.querySelector("input#dataCadOutrosTributos").value =
                dataAtual();
            document.querySelector("input#dataAltOutrosTributos").value =
                dataAtual();
            document.querySelector("input#dtNasajonOutrosTributos").value =
                document
                    .querySelector("input#dataPagamentoOutrosTributos")
                    .value.replace("/", "")
                    .substring(0, 4);

            const returnInsert = await sendPost(
                `http://sufin.caixa/api-sufin/informacoes-operacionais/outros-tributos`,
                formToJSONString(form) //script formataCampos
            ); //script geral/fetch
            showMessageTributo(returnInsert);
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

/**** Alterar dados do Tributo ****/
const btnAlterarTributo = document.querySelector(
    "button#btnAlterarOutrosTributos"
);
if (btnAlterarTributo) {
    btnAlterarTributo.addEventListener("click", async (e) => {
        e.preventDefault();
        inserirSpinnerEmBotaoByClass("btnAlterarOutrosTributos");
        btnAlterarTributo.disabled = true;
        const form = document.querySelector("#formOutrosTributos");
        const nuOrdem = document.querySelector(
            "input#ordemOutrosTributos"
        ).value;
        const returnUpdate = await sendPost(
            `http://sufin.caixa/api-sufin/informacoes-operacionais/outros-tributos/${nuOrdem}`,
            formToJSONString(form) //script formataCampos
        ); //script geral/fetch

        showMessageTributo(returnUpdate);
        btnAlterarTributo.disabled = false;
        removerSpinnerEmBotaoByClass("btnAlterarOutrosTributos");
    });
}

/**** deletar Tributo */
let btnExcluirTributo = document.querySelector(
    "button#btnExcluirOutrosTributos"
);
if (btnExcluirTributo) {
    btnExcluirTributo.addEventListener("click", async (e) => {
        e.preventDefault();
        inserirSpinnerEmBotaoByClass("btnExcluirOutrosTributos");
        const nuOrdem = document.querySelector(
            "input#ordemOutrosTributos"
        ).value;
        const returnDelete = await sendPost(
            `http://sufin.caixa/api-sufin/informacoes-operacionais/outros-tributos/${nuOrdem}/delete`
        ); //script geral/fetch

        showMessageTributo(returnDelete);
        btnExcluirTributo.disabled = false;
        removerSpinnerEmBotaoByClass("btnExcluirOutrosTributos");
    });
}

function validarErrosCamposTributos() {
    let erros = "";

    if (selectTipoConta.value === "") {
        erros += "Conta Movimentada: deve ser informado\n";
    }

    if (selectTributos.value === "") {
        erros += "Tributo: deve ser informado\n";
    }

    let inputResponsavel = document.querySelector(
        "input#responsalvelOutrosTributos"
    ).value;

    if (inputResponsavel.length < 5) {
        erros += "Responsável: Campo deve ter mais de 5 caracteres\n";
    }

    let inputValorPgto = document.querySelector(
        "input#valorPagoOutrosTributos"
    ).value;

    if (inputValorPgto.length < 4) {
        erros += "Valor: Campo deve ter pelo menos 3 dígitos (0,00)\n";
    }

    let selectTipoLancamento = document.querySelector(
        "select#tipoDeLancamentoOutrosTributos"
    ).value;

    if (selectTipoLancamento === "") {
        erros += "Tipo de Lançamento: Campo deve ser informado\n";
    }

    let inputDataPagamentoTributo = document.querySelector(
        "input#dataPagamentoOutrosTributos"
    ).value;

    if (
        inputDataPagamentoTributo === "" ||
        inputDataPagamentoTributo.length < 10
    ) {
        erros += "Data do pagamento: Campo deve ser informada (DD/MM/YYYY)\n";
    }

    let inputUnidadeDestinoOutrosTributos = document.querySelector(
        "input#unidadeDestinoOutrosTributos"
    ).value;

    if (inputUnidadeDestinoOutrosTributos.length < 4) {
        erros += "Unidade: Campo deve ter pelo menos 4 dígito\n";
    }

    return erros.length > 0 ? erros : false;
}

$("#unidadeDestinoOutrosTributos").autocomplete({
    source: "../../app/contaspg/autocomplete2.php",
    //source: "/api-sufin/unidades/geral-buscar-autocomplete",
});

function setDadosFormularioModal(data) {
    selectTributos.value = `${data.dados[0]["evento"]}@${data.dados[0]["fato_operacional"]}`;
    document.querySelector("input#responsalvelOutrosTributos").value =
        data.dados[0]["responsaveldoc"];
    document.querySelector("textarea#descricaoOutrosTributos").value =
        data.dados[0]["detalhedoc"];
    document.querySelector("input#eventoOutrosTributos").value =
        data.dados[0]["evento"];
    document.querySelector("input#numeroDocOutrosTributos").value =
        data.dados[0]["numerodoc"];
    document.querySelector("input#dataCadOutrosTributos").value = formatDate(
        data.dados[0]["datacad"].substring(0, 10)
    );

    document.querySelector("input#dataAltOutrosTributos").value = formatDate(
        data.dados[0]["dataalt"].substring(0, 10)
    );
    document.querySelector("input#dtNasajonOutrosTributos").value =
        data.dados[0]["dtnasajon"];

    document.querySelector("textarea#descricaoOutrosTributos").value =
        data.dados[0]["detalhedoc"];
    document.querySelector("input#valorPagoOutrosTributos").value =
        data.dados[0]["valorpago"];
    document.querySelector("select#tipoDeLancamentoOutrosTributos").value =
        data.dados[0]["tipodelancamento"];

    let dataPgto = data.dados[0]["dtpgto"];
    dataPgto = formatDate(dataPgto);
    document.querySelector("input#dataPagamentoOutrosTributos").value =
        dataPgto;
    document.querySelector("input#unidadeDestinoOutrosTributos").value =
        data.dados[0]["destinodoc"];
    dataPgto;
}

function showMessageTributo(
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
        montarTabela(
            `http://sufin.caixa/api-sufin/informacoes-operacionais/outros-tributos`
        );
        document.querySelector("button#btnCloseModalOutrosTributos").click();
    }

    showStackBarTop(tipoRetorno, titulo, mensagem, true); //script /app/assets/js/pnotify/PnotifyViewAlertMessage.js
}

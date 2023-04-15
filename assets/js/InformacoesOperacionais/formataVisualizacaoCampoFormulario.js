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

function limparCamposForm() {
    const formFields = document.querySelectorAll(
        "form input, form select, form textarea"
    );

    // Loop through each field and set its value to an empty string
    formFields.forEach((field) => {
        field.value = "";
    });
}

function inserirSpinnerEmBotaoByClass(classname = null) {
    const botao = document.querySelector(`button.${classname}`);
    const div = document.createElement("div");

    div.innerHTML =
        "<div class='text-center'><div class='spinner-border text-primary'><span class='sr-only'></span></div></div>";
    botao.appendChild(div);
    botao.disabled = true;
}

function removerSpinnerEmBotaoByClass(classname = null) {
    const botao = document.querySelector(`button.${classname}`);

    botao.remove(botao);
    botao.disabled = false;
}

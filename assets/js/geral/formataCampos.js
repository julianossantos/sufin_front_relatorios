function formatDate(date, join = "/", format = "d/m/Y") {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    if (format === "d/m/Y") {
        return [day, month, year].join(join);
    }
    return [year, month, day].join(join);
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function dataAtual() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1; // os meses começam em zero
    let year = today.getFullYear();

    // adicionar zero à esquerda se o dia ou mês for menor que 10
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    return day + "/" + month + "/" + year;
}

function formatNumberWithDecimal2(v) {
    v = v.replace(/\D/g, "");
    v = new String(Number(v));
    var len = v.length;
    if (1 == len) v = v.replace(/(\d)/, "0,0$1");
    else if (2 == len) v = v.replace(/(\d)/, "0,$1");
    else if (len > 2) {
        v = v.replace(/(\d{2})$/, ",$1");
        if (len > 5) {
            var x = len - 5,
                er = new RegExp("(\\d{" + x + "})(\\d)");
            v = v.replace(er, "$1.$2");
        }
    }
    return v;
}

function formatarMoeda(valor) {
    // divide por 100 para transformar em decimal
    var valorDecimal = valor / 100;

    // converte para string com duas casas decimais
    var valorString = valorDecimal.toFixed(2);

    // adiciona separador de milhar
    var partes = valorString.split(".");
    var inteiro = partes[0];
    var decimal = parseInt(partes[1]);

    inteiro = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // retorna o valor formatado
    return "R$ " + inteiro + "," + decimal;
}

function formatNumberWithDecimal(valor) {
    var tamanhoValorInicial = valor.length;

    var valor = valor.replace(/\D/g, "");
    valor = (valor / 100).toFixed(2) + "";
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    //gambi para contornar o erro que coloca 3 casas decimais
    if (tamanhoValorInicial === 0) {
        formatNumberWithDecimal(valor.substring(3));
    }

    return valor;
}

function formatNumberInt(number, digits) {
    //number = parseInt(number);
    if (Number.isInteger(number)) {
        const number_format = new Intl.NumberFormat("pt-BR", {
            style: "decimal",
            minimumFractionDigits: digits,
        });

        return number_format.format(number);
    } else {
        return number;
    }
}

function formatMoney(value) {
    const money_format = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });

    return money_format.format(value);
}

function dateInputMask(elm) {
    elm.addEventListener("keypress", function (e) {
        if (e.keyCode < 47 || e.keyCode > 57) {
            e.preventDefault();
        }

        var len = elm.value.length;

        if (len !== 1 || len !== 3) {
            if (e.keyCode == 47) {
                e.preventDefault();
            }
        }

        if (len === 2) {
            elm.value += "/";
        }

        if (len === 5) {
            elm.value += "/";
        }

        if (len >= 10) {
            elm.value.slice(0, 10);
        }
    });
}

function formToJSONString(form) {
    var obj = {};
    var elements = form.querySelectorAll("input, select, textarea");
    for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        if (name) {
            obj[name] = value;
        }
    }

    return JSON.stringify(obj);
}

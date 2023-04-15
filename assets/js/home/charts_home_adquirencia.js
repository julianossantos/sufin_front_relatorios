var dados_faturamento_mensal = [];
var series_faturamento_mensal = [];
var date = new Date();
var faturamentoAnual = 0;
var options = {};

function chartFaturamentoAdquirenciaMensal() {
    $.ajax({
        url: "http://sufin.caixa/api-sufin/adquirencia/faturamento/mensal/12",
        type: "GET",
        cache: true,
        beforeSend: function (xhr) {
            $("#spinner-faturamento-adquirencia").show();
        },
        success: function (data) {
            $.each(data, function (index, item) {
                dados_faturamento_mensal.push({
                    name: item.SG_MES_FATURAMENTO,
                    y: item.VR_FATURAMENTO_MILHAO,
                    drilldown: item.SG_MES_FATURAMENTO,
                });
                faturamentoAnual +=
                    item.AA_FATURAMENTO === date.getFullYear()
                        ? item.VR_FATURAMENTO
                        : 0;
            });
            document.querySelector(
                "#adquirencia-faturamento-acumulado-ano"
            ).innerHTML = formatMoney(faturamentoAnual / 1000000) + " MI";
            $.ajax({
                url: "http://sufin.caixa/api-sufin/adquirencia/faturamento/diario-12-meses",
                type: "GET",
                cache: true,
                success: function (data) {
                    $.each(data, function (index, item) {
                        data_value = [];
                        $.each(item.data, function (index, item) {
                            data_value.push([
                                item[0].toString(),
                                parseFloat(item[1]),
                            ]);
                        });
                        series_faturamento_mensal.push({
                            name: index,
                            id: index,
                            data: data_value,
                            dataLabels: {
                                style: {
                                    fontSize: "8px",
                                },
                            },
                        });
                    });
                },
                complete: function () {
                    $("#spinner-faturamento-adquirencia").hide();
                    options = {
                        divId: "adquirencia-faturamento-mensal",
                        subtitle:
                            "Click na coluna para verificar o faturamento/dia",
                        yAxisTittle: "Faturamento Milhões (R$)",
                        plotOptions: {
                            format: "{point.y:.1f}",
                        },
                        tooltip: {
                            header: '<span style="font-size:11px">{series.name}</span><br>',
                            pointFormat:
                                '<span style="color:{point.color}">{point.name}</span>: <b>R$ {point.y:.2f}</b><br/>',
                        },
                        series: {
                            name: "Faturamento Mensal",
                            data: dados_faturamento_mensal,
                        },
                        drilldown: {
                            series: series_faturamento_mensal,
                        },
                    };
                    mountChartColumnBarDrillDown(options);
                },
            });
        },
    });
}

var dados_credenciamento_mensal = [];
var series_credenciamento_mensal = [];
var credenciamentoAnual = 0;
/******** Grafico de Credenciamentos
 * *****************************/
function chartCredenciamentoAdquirenciaMensal() {
    $.ajax({
        url: "http://sufin.caixa/api-sufin/adquirencia/credenciamento/mensal/12",
        type: "GET",
        cache: true,
        data: {},
        beforeSend: function (xhr) {
            $("#spinner-credenciamento-adquirencia").show();
        },
        success: function (data) {
            $.each(data, function (index, item) {
                dados_credenciamento_mensal.push({
                    name: item.SG_MES_CREDENCIAMENTO,
                    y: item.QT_CREDENCIAMENTO,
                    drilldown: item.SG_MES_CREDENCIAMENTO,
                });
                credenciamentoAnual +=
                    item.AA_CREDENCIAMENTO === date.getFullYear()
                        ? item.QT_CREDENCIAMENTO
                        : 0;
            });
            $("#adquirencia-credenciamento-acumulado-ano").text(
                credenciamentoAnual.toLocaleString("pt-BR")
            );
            $.ajax({
                url: "http://sufin.caixa/api-sufin/adquirencia/credenciamento/diario-12-meses",
                type: "GET",
                cache: true,
                data: {},

                success: function (data) {
                    $.each(data, function (index, item) {
                        data_value = [];
                        $.each(item.data, function (index, item) {
                            data_value.push([
                                item[0].toString(),
                                parseFloat(item[1]),
                            ]);
                        });
                        series_credenciamento_mensal.push({
                            name: index,
                            id: index,
                            data: data_value,
                            dataLabels: {
                                style: {
                                    fontSize: "8px",
                                },
                            },
                        });
                    });
                },
                complete: function () {
                    $("#spinner-credenciamento-adquirencia").hide();
                    options = {
                        divId: "adquirencia-credenciamento-mensal",
                        subtitle:
                            "Click na coluna para verificar os credenciamentos/dia",
                        yAxisTittle: "Credenciamentos",
                        plotOptions: {
                            format: "{point.y:.0f}",
                        },
                        tooltip: {
                            header: '<span style="font-size:11px">{series.name}</span><br>',
                            pointFormat:
                                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>',
                        },
                        series: {
                            name: "Credenciamento Mensal",
                            data: dados_credenciamento_mensal,
                        },
                        drilldown: {
                            series: series_credenciamento_mensal,
                        },
                    };
                    mountChartColumnBarDrillDown(options);
                },
            });
        },
    });
}

/******** Grafico de Maquinas ativas *********
 * *****************************************/

var dados_maquinas_mensal = [];
var series_maquinas_mensal = [];
var maquinasAnual = 0;

function chartMaquinaAdquirenciaMensal() {
    $.ajax({
        url: "http://sufin.caixa/api-sufin/adquirencia/credenciamento/mensal/12",
        type: "GET",
        cache: true,
        data: {},
        beforeSend: function (xhr) {
            $("#spinner-maquinas-ativas-adquirencia").show();
        },
        success: function (data) {
            $.each(data, function (index, item) {
                dados_maquinas_mensal.push({
                    name: item.SG_MES_CREDENCIAMENTO,
                    y: item.QT_MAQUINAS_ATIVADA,
                    drilldown: item.SG_MES_CREDENCIAMENTO,
                });
                maquinasAnual +=
                    item.AA_CREDENCIAMENTO === date.getFullYear()
                        ? item.QT_MAQUINAS_ATIVADA
                        : 0;
            });
            $("#adquirencia-maquinas-ativadas-acumulado-ano").text(
                maquinasAnual.toLocaleString("pt-BR")
            );
            $.ajax({
                url: "http://sufin.caixa/api-sufin/adquirencia/credenciamento/maquinas-ativadas-diario-12-meses",
                type: "GET",
                cache: true,
                data: {},

                success: function (data) {
                    $.each(data, function (index, item) {
                        data_value = [];
                        $.each(item.data, function (index, item) {
                            data_value.push([
                                item[0].toString(),
                                parseFloat(item[1]),
                            ]);
                        });
                        series_maquinas_mensal.push({
                            name: index,
                            id: index,
                            data: data_value,
                            dataLabels: {
                                style: {
                                    fontSize: "8px",
                                },
                            },
                        });
                    });
                },
                complete: function () {
                    $("#spinner-maquinas-ativas-adquirencia").hide();

                    options = {
                        divId: "adquirencia-maquinas-ativas-mensal",
                        subtitle:
                            "Click na coluna para verificar as máquinas ativadas/dia",
                        yAxisTittle: "Maquinas (Mil)",
                        plotOptions: {
                            format: "{point.y:.0f}",
                        },
                        tooltip: {
                            header: '<span style="font-size:11px">{series.name}</span><br>',
                            pointFormat:
                                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>',
                        },
                        series: {
                            name: "Maquinas Ativadas Mensal",
                            data: dados_maquinas_mensal,
                        },
                        drilldown: {
                            series: series_maquinas_mensal,
                        },
                    };
                    mountChartColumnBarDrillDown(options);
                },
            });
        },
    });
}

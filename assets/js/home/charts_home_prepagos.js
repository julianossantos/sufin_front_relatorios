/******** Grafico de faturamento
 * *****************************/
var dados_faturamento_cacr_mensal = [];
var series_faturamento_cacr_mensal = [];
var options = {};
var date = new Date();
var faturamentoAnualPrepagos = 0;

function chartFaturamentoCACRMensal() {
    $.ajax({
        url: "http://sufin.caixa/api-sufin/prepagos/cacr/faturamento/mensal/12",
        type: "GET",
        cache: true,
        data: {},
        beforeSend: function (xhr) {
            $("#spinner-faturamento-mensal-cacr-prepagos").show();
        },
        success: function (data) {
            $.each(data, function (index, item) {
                dados_faturamento_cacr_mensal.push({
                    name: item.SG_MES_FATURAMENTO,
                    y: item.VR_FATURAMENTO / 1000000,
                    drilldown: item.SG_MES_FATURAMENTO,
                });
                faturamentoAnualPrepagos +=
                    item.AA_FATURAMENTO === date.getFullYear()
                        ? parseFloat(item.VR_FATURAMENTO)
                        : 0;
            });
            $("#prepagos-cacr-faturamento-acumulado-ano").text(
                formatMoney(faturamentoAnualPrepagos / 1000000) + " MI"
            );
            $.ajax({
                url: "http://sufin.caixa/api-sufin/prepagos/cacr/faturamento/diario-12-meses",
                type: "GET",
                cache: true,
                data: {},
                success: function (data) {
                    $.each(data, function (index, item) {
                        data_value_cacr = [];
                        $.each(item.data, function (index, item) {
                            data_value_cacr.push([
                                item[0].toString(),
                                parseFloat(item[1]),
                            ]);
                        });
                        series_faturamento_cacr_mensal.push({
                            name: index,
                            id: index,
                            data: data_value_cacr,
                            dataLabels: {
                                style: {
                                    fontSize: "8px",
                                },
                            },
                        });
                    });
                },
                complete: function () {
                    $("#spinner-faturamento-mensal-cacr-prepagos").hide();
                    options = {
                        divId: "prepagos-cacr-faturamento-mensal",
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
                            data: dados_faturamento_cacr_mensal,
                        },
                        drilldown: {
                            series: series_faturamento_cacr_mensal,
                        },
                    };
                    //mountChartColumnBarDrillDown(options);
                    Highcharts.chart("prepagos-cacr-faturamento-mensal", {
                        chart: {
                            type: "column",
                        },
                        title: {
                            text: "",
                        },
                        subtitle: {
                            align: "left",
                            text: "Click na coluna para verificar o faturamento/dia",
                        },
                        accessibility: {
                            announceNewData: {
                                enabled: true,
                            },
                        },
                        xAxis: {
                            type: "category",
                        },
                        yAxis: {
                            title: {
                                text: "Faturamento Milhões (R$)",
                            },
                        },
                        legend: {
                            enabled: false,
                        },
                        plotOptions: {
                            series: {
                                borderWidth: 0,
                                dataLabels: {
                                    enabled: true,
                                    rotation: -90,
                                    color: "#FFFFFF",
                                    align: "right",
                                    format: "{point.y:.1f}", // one decimal
                                    y: 30, // 10 pixels down from the top
                                    style: {
                                        fontSize: "10px",
                                    },
                                },
                            },
                        },

                        tooltip: {
                            headerFormat:
                                '<span style="font-size:11px">{series.name}</span><br>',
                            pointFormat:
                                '<span style="color:{point.color}">{point.name}</span>: <b>R$ {point.y:.2f}</b><br/>',
                        },

                        series: [
                            {
                                name: "Faturamento Mensal",
                                colorByPoint: true,
                                data: dados_faturamento_cacr_mensal,
                            },
                        ],
                        drilldown: {
                            breadcrumbs: {
                                position: {
                                    align: "right",
                                },
                            },
                            series: series_faturamento_cacr_mensal,
                        },
                    });
                },
            });
        },
    });
}

/******** Grafico de Convenios ****
 * *****************************/

var dados_convenio_cacr_mensal = [];
var series_convenio_cacr_mensal = [];
var conveniosAnual = 0;

function chartConvenioMensalCACR() {
    $.ajax({
        url: "http://sufin.caixa/api-sufin/prepagos/cacr/convenio/mensal/12",
        type: "GET",
        cache: true,
        data: {},
        beforeSend: function (xhr) {
            $("#spinner-convenio-mensal-cacr-prepagos").show();
        },
        success: function (data) {
            $.each(data, function (index, item) {
                dados_convenio_cacr_mensal.push({
                    name: item.SG_MES_CONVENIO,
                    y: item.QT_CONVENIOS_MES,
                    drilldown: item.SG_MES_CONVENIO,
                });
                conveniosAnual +=
                    String(item.AM_CONVENIO).substring(0, 4) ==
                    date.getFullYear()
                        ? item.QT_CONVENIOS_MES
                        : 0;
            });
            $("#prepagos-cacr-convenio-acumulado-ano").text(
                conveniosAnual.toLocaleString("pt-BR")
            );
            $.ajax({
                url: "http://sufin.caixa/api-sufin/prepagos/cacr/convenio/diario-12-meses",
                type: "GET",
                cache: true,
                data: {},
                success: function (data) {
                    $.each(data, function (index, item) {
                        data_value_cacr = [];
                        $.each(item.data, function (index, item) {
                            data_value_cacr.push([
                                item[0].toString(),
                                parseFloat(item[1]),
                            ]);
                        });
                        series_convenio_cacr_mensal.push({
                            name: index,
                            id: index,
                            data: data_value_cacr,
                            dataLabels: {
                                style: {
                                    fontSize: "8px",
                                },
                            },
                        });
                    });
                },
                complete: function () {
                    $("#spinner-convenio-mensal-cacr-prepagos").hide();
                    options = {
                        divId: "prepagos-cacr-convenio-mensal",
                        subtitle:
                            "Click na coluna para verificar o convênios/dia",
                        yAxisTittle: "Convênios (Mil)",
                        plotOptions: {
                            format: "{point.y:.0f}",
                        },
                        tooltip: {
                            header: '<span style="font-size:11px">{series.name}</span><br>',
                            pointFormat:
                                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>',
                        },
                        series: {
                            name: "Convênios Mensal",
                            data: dados_convenio_cacr_mensal,
                        },
                        drilldown: {
                            series: series_convenio_cacr_mensal,
                        },
                    };
                    //mountChartColumnBarDrillDown(options);
                    Highcharts.chart("prepagos-cacr-convenio-mensal", {
                        chart: {
                            type: "column",
                        },
                        title: {
                            text: "",
                        },
                        subtitle: {
                            align: "left",
                            text: "Click na coluna para verificar os convênios/dia",
                        },
                        accessibility: {
                            announceNewData: {
                                enabled: true,
                            },
                        },
                        xAxis: {
                            type: "category",
                        },
                        yAxis: {
                            title: {
                                text: "Convênios (Mil)",
                            },
                        },
                        legend: {
                            enabled: false,
                        },
                        plotOptions: {
                            series: {
                                borderWidth: 0,
                                dataLabels: {
                                    enabled: true,
                                    rotation: -90,
                                    color: "#FFFFFF",
                                    align: "right",
                                    format: "{point.y:.0f}", // one decimal
                                    y: 30, // 10 pixels down from the top
                                    style: {
                                        fontSize: "10px",
                                    },
                                },
                            },
                        },

                        tooltip: {
                            headerFormat:
                                '<span style="font-size:11px">{series.name}</span><br>',
                            pointFormat:
                                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>',
                        },

                        series: [
                            {
                                name: "Convênios Mensal",
                                colorByPoint: true,
                                data: dados_convenio_cacr_mensal,
                            },
                        ],
                        drilldown: {
                            breadcrumbs: {
                                position: {
                                    align: "right",
                                },
                            },
                            series: series_convenio_cacr_mensal,
                        },
                    });
                },
            });
        },
    });
}

/******** Grafico de cartões
 * *****************************/

var dados_cartao_cacr_mensal = [];
var series_cartao_cacr_mensal = [];
var cartoesAnual = 0;

function chartCartaoMensalCACR() {
    $.ajax({
        url: "http://sufin.caixa/api-sufin/prepagos/cacr/cartao/mensal/12",
        type: "GET",
        cache: true,
        data: {},
        beforeSend: function (xhr) {
            $("#spinner-cartao-mensal-cacr-prepagos").show();
        },
        success: function (data) {
            $.each(data, function (index, item) {
                dados_cartao_cacr_mensal.push({
                    name: item.SG_MES_CARTAO,
                    y: item.QT_CARTOES_NOVOS,
                    drilldown: item.SG_MES_CARTAO,
                });
                cartoesAnual =
                    item.AA_CARTAO === date.getFullYear()
                        ? item.QT_CARTOES_ACUMUADO
                        : 0;
            });
            document.querySelector(
                "#prepagos-cacr-cartao-acumulado-ano"
            ).innerHTML = cartoesAnual.toLocaleString("pt-BR");
            /*$("#prepagos-cacr-cartao-acumulado-ano").show(
                cartoesAnual.toLocaleString("pt-BR")
            );*/
            $.ajax({
                url: "http://sufin.caixa/api-sufin/prepagos/cacr/cartao/diario-12-meses",
                type: "GET",
                cache: true,
                data: {},
                success: function (data) {
                    $.each(data, function (index, item) {
                        data_value_cacr = [];
                        $.each(item.data, function (index, item) {
                            data_value_cacr.push([
                                item[0].toString(),
                                parseFloat(item[1]),
                            ]);
                        });
                        series_cartao_cacr_mensal.push({
                            name: index,
                            id: index,
                            data: data_value_cacr,
                            dataLabels: {
                                style: {
                                    fontSize: "8px",
                                },
                            },
                        });
                    });
                },
                complete: function () {
                    $("#spinner-cartao-mensal-cacr-prepagos").hide();
                    options = {
                        divId: "prepagos-cacr-cartao-mensal",
                        subtitle:
                            "Click na coluna para verificar o cartões/dia",
                        yAxisTittle: "Cartões (Mil)",
                        plotOptions: {
                            format: "{point.y:.0f}",
                        },
                        tooltip: {
                            header: '<span style="font-size:11px">{series.name}</span><br>',
                            pointFormat:
                                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>',
                        },
                        series: {
                            name: "Cartões Mensal",
                            data: dados_cartao_cacr_mensal,
                        },
                        drilldown: {
                            series: series_cartao_cacr_mensal,
                        },
                    };
                    //mountChartColumnBarDrillDown(options);
                    Highcharts.chart("prepagos-cacr-cartao-mensal", {
                        chart: {
                            type: "column",
                        },
                        title: {
                            text: "",
                        },
                        subtitle: {
                            align: "left",
                            text: "Click na coluna para verificar os cartões/dia",
                        },
                        accessibility: {
                            announceNewData: {
                                enabled: true,
                            },
                        },
                        xAxis: {
                            type: "category",
                        },
                        yAxis: {
                            title: {
                                text: "Cartões (Mil)",
                            },
                        },
                        legend: {
                            enabled: false,
                        },
                        plotOptions: {
                            series: {
                                borderWidth: 0,
                                dataLabels: {
                                    enabled: true,
                                    rotation: -90,
                                    color: "#FFFFFF",
                                    align: "right",
                                    format: "{point.y:.0f}", // one decimal
                                    y: 30, // 10 pixels down from the top
                                    style: {
                                        fontSize: "10px",
                                    },
                                },
                            },
                        },

                        tooltip: {
                            headerFormat:
                                '<span style="font-size:11px">{series.name}</span><br>',
                            pointFormat:
                                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b><br/>',
                        },

                        series: [
                            {
                                name: "Cartões Mensal",
                                colorByPoint: true,
                                data: dados_cartao_cacr_mensal,
                            },
                        ],
                        drilldown: {
                            breadcrumbs: {
                                position: {
                                    align: "right",
                                },
                            },
                            series: series_cartao_cacr_mensal,
                        },
                    });
                },
            });
        },
    });
}

function chartConvenioPorStatusCACR() {
    $("#spinner-convenio-status-cacr-prepagos").hide();
    mountPieDrillDown();
}

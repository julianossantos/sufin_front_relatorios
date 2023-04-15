function mountChartColumnBarDrillDown(options) {
    var chart = Highcharts.chart(options.divId, {
        chart: {
            type: "column",
        },
        title: {
            text: "Últimos 12 meses",
        },
        subtitle: {
            align: "left",
            text: options.subtitle,
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
                text: options.yAxisTittle,
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
                    format: options.plotOptions.format, // one decimal
                    y: 30, // 10 pixels down from the top
                    style: {
                        fontSize: "10px",
                    },
                },
            },
        },

        tooltip: {
            headerFormat: options.tooltip.header,
            pointFormat: options.tooltip.pointFormat,
        },

        series: [
            {
                name: options.series.name,
                colorByPoint: true,
                data: options.series.data,
            },
        ],
        drilldown: {
            breadcrumbs: {
                position: {
                    align: "right",
                },
            },
            series: options.drilldown.series,
        },
    });

    return chart;
}

function mountPieDrillDown() {
    // Create the chart
    var pieChart = Highcharts.chart("teste-chart", {
        chart: {
            type: "pie",
        },
        title: {
            text: "",
            align: "left",
        },
        subtitle: {
            text: "Click no status para ver o detalhe por produto",
            align: "left",
        },

        accessibility: {
            announceNewData: {
                enabled: true,
            },
            point: {
                valueSuffix: "",
            },
        },

        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    format: "{point.y:.2f}%",
                },
                showInLegend: true,
            },
        },

        tooltip: {
            headerFormat:
                '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat:
                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> do total<br/>',
        },

        series: [
            {
                name: "Status Convênio",
                colorByPoint: true,
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: "#ffffff",
                    distance: 0,
                },
                data: [
                    {
                        name: "Ativo",
                        y: 61.04,
                        drilldown: "Ativo",
                    },
                    {
                        name: "Aguardando Aprovação Emissor",
                        y: 9.47,
                        drilldown: "Aguardando Aprovação emissor",
                        dataLabels: {
                            distance: 0,
                        },
                    },
                    {
                        name: "Aguardando Ativação Cliente RH",
                        y: 9.32,
                        drilldown: "Aguardando Ativação Cliente RH",
                    },
                    {
                        name: "Cancelado",
                        y: 8.15,
                        drilldown: "Cancelado",
                    },
                    {
                        name: "Vencido",
                        y: 11.02,
                        drilldown: "Vencido",
                    },
                ],
            },
        ],
        drilldown: {
            series: [
                {
                    name: "Ativo",
                    id: "Ativo",
                    dataLabels: {
                        format: "{point.name}: {point.y:.3f}",
                    },
                    tooltip: {
                        headerFormat:
                            '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat:
                            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.3f}</b> convênios<br/>',
                    },
                    data: [
                        ["Caixa Refeição", 36.625],
                        ["Caixa Alimentação", 14.606],
                    ],
                },
                {
                    name: "Aguardando Aprovação emissor",
                    id: "Aguardando Aprovação emissor",
                    dataLabels: {
                        format: "{point.name}: {point.y:.3f}",
                    },
                    tooltip: {
                        headerFormat:
                            '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat:
                            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.3f}</b> convênios<br/>',
                    },
                    data: [
                        ["Caixa Refeição", 1.82],
                        ["Caixa Alimentação", 17.604],
                    ],
                },
                {
                    name: "Aguardando Ativação Cliente RH",
                    id: "Aguardando Ativação Cliente RH",
                    dataLabels: {
                        format: "{point.name}: {point.y:.3f}",
                    },
                    tooltip: {
                        headerFormat:
                            '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat:
                            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.3f}</b> convênios<br/>',
                    },
                    data: [
                        ["Caixa Refeição", 11.275],
                        ["Caixa Alimentação", 5.956],
                    ],
                },
                {
                    name: "Cancelado",
                    id: "Cancelado",
                    dataLabels: {
                        format: "{point.name}: {point.y:.1f}",
                    },
                    tooltip: {
                        headerFormat:
                            '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat:
                            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}</b> convênios<br/>',
                    },
                    data: [
                        ["Caixa Refeição", 28],
                        ["Caixa Alimentação", 37],
                    ],
                },
                {
                    name: "Vencido",
                    id: "Vencido",
                    dataLabels: {
                        format: "{point.name}: {point.y:.1f}",
                    },
                    tooltip: {
                        headerFormat:
                            '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat:
                            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.1f}</b> convênios<br/>',
                    },
                    data: [
                        ["Caixa Refeição", 24],
                        ["Caixa Alimentação", 23],
                    ],
                },
            ],
        },
    });

    return pieChart;
}

var dados_faturamento_mensal = [];
var series_faturamento_mensal = [];

$.ajax({
  url: "http://sufin.caixa/api-sufin/adquirencia/faturamento/mensal/12",
  type: "GET",
  cache: true,
  data: {},
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
    });
    $.ajax({
      url: "http://sufin.caixa/api-sufin/adquirencia/faturamento/diario-12-meses",
      type: "GET",
      cache: true,
      data: {},

      success: function (data) {
        $.each(data, function (index, item) {
          data_value = [];
          $.each(item.data, function (index, item) {
            data_value.push([item[0].toString(), parseFloat(item[1])]);
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
        Highcharts.chart("adquirencia-faturamento-mensal", {
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
              data: dados_faturamento_mensal,
            },
          ],
          drilldown: {
            breadcrumbs: {
              position: {
                align: "right",
              },
            },
            series: series_faturamento_mensal,
          },
        });
      },
    });
  },
});

var dados_credenciamento_mensal = [];
var series_credenciamento_mensal = [];
/******** Grafico de Credenciamentos
 * *****************************/
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
    });
    $.ajax({
      url: "http://sufin.caixa/api-sufin/adquirencia/credenciamento/diario-12-meses",
      type: "GET",
      cache: true,
      data: {},

      success: function (data) {
        $.each(data, function (index, item) {
          data_value = [];
          $.each(item.data, function (index, item) {
            data_value.push([item[0].toString(), parseFloat(item[1])]);
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
        //console.log(series_faturamento_mensal);
      },
      complete: function () {
        $("#spinner-credenciamento-adquirencia").hide();
        Highcharts.chart("adquirencia-credenciamento-mensal", {
          chart: {
            type: "column",
          },
          title: {
            text: "",
          },
          subtitle: {
            align: "left",
            text: "Click na coluna para verificar os credenciamentos/dia",
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
              text: "Credenciamentos (Mil)",
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
              name: "Credenciamento Mensal",
              colorByPoint: true,
              data: dados_credenciamento_mensal,
            },
          ],
          drilldown: {
            breadcrumbs: {
              position: {
                align: "right",
              },
            },
            series: series_credenciamento_mensal,
          },
        });
      },
    });
  },
});

/******** Grafico de Maquinas ativas *********
 * *****************************************/

var dados_maquinas_mensal = [];
var series_maquinas_mensal = [];

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
    });
    $.ajax({
      url: "http://sufin.caixa/api-sufin/adquirencia/credenciamento/maquinas-ativadas-diario-12-meses",
      type: "GET",
      cache: true,
      data: {},

      success: function (data) {
        $.each(data, function (index, item) {
          data_value = [];
          $.each(item.data, function (index, item) {
            data_value.push([item[0].toString(), parseFloat(item[1])]);
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
        //console.log(series_faturamento_mensal);
      },
      complete: function () {
        $("#spinner-maquinas-ativas-adquirencia").hide();
        Highcharts.chart("adquirencia-maquinas-ativas-mensal", {
          chart: {
            type: "column",
          },
          title: {
            text: "",
          },
          subtitle: {
            align: "left",
            text: "Click na coluna para verificar as máquinas ativadas/dia",
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
              text: "Maquinas (Mil)",
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
              name: "Maquinas Ativadas Mensal",
              colorByPoint: true,
              data: dados_maquinas_mensal,
            },
          ],
          drilldown: {
            breadcrumbs: {
              position: {
                align: "right",
              },
            },
            series: series_maquinas_mensal,
          },
        });
      },
    });
  },
});
/*Highcharts.chart("maquinas_ativas_adquirencia_barchart", {
  chart: {
    type: "column",
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Mil",
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Máquinas ativas",
      data: [
        49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
  ],
});*/

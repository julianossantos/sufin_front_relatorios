/******** Donut Conquiste Faturamento Credenciamento VIRED
 * *********************************************************/
Highcharts.chart("conquiste-adquirencia-faturamento-vinat", {
  chart: {
    type: "pie",
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    colors: ["#C0392B", "#c9c9c9"],
  },
  title: {
    text: "Faturamento Credenciamento",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.y}</b>",
  },
  plotOptions: {
    pie: {
      innerSize: "60%",
      dataLabels: {
        enabled: true,
        format: "{point.percentage:.1f} %",
        distance: -30,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Faturamento",
      colorByPoint: true,
      data: [
        {
          name: "Realizado",
          color: "#005ca9",
          y: 105.3,
        },
      ],
    },
  ],
});

Highcharts.chart("conquiste-prepagos-cartoes-vinat", {
  chart: {
    type: "pie",
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    colors: ["#C0392B", "#c9c9c9"],
  },
  title: {
    text: "Cartões Pré-Pagos CA/CR",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.y}</b>",
  },
  plotOptions: {
    pie: {
      innerSize: "60%",
      dataLabels: {
        enabled: true,
        format: "{point.percentage:.1f} %",
        distance: -30,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Cartões CACR",
      colorByPoint: true,
      data: [
        {
          name: "Realizado",
          color: "#C0392B",
          y: 65.68,
        },
        {
          name: "GAP",
          color: "#c9c9c9",
          y: 34.32,
        },
      ],
    },
  ],
});

var gaugeOptions = {
  chart: {
    type: "solidgauge",
  },

  title: "Faturamento Credenciamento",

  pane: {
    center: ["50%", "55%"],
    size: "100%",
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
      innerRadius: "60%",
      outerRadius: "100%",
      shape: "arc",
    },
  },

  exporting: {
    enabled: true,
  },

  tooltip: {
    enabled: true,
  },

  // the value axis
  yAxis: {
    stops: [
      [0.89, "#DF5353"], // red
      [0.9, "#DDDF0D"], // yellow
      [0.91, "#DDDF0D"], // yellow
      [0.92, "#DDDF0D"], // yellow
      [0.93, "#DDDF0D"], // yellow
      [0.94, "#DDDF0D"], // yellow
      [0.95, "#55BF3B"], // green
      [0.96, "#55BF3B"], // green
      [0.97, "#55BF3B"], // green
      [0.98, "#55BF3B"], // green
      [0.99, "#55BF3B"], // green
      [1.0, "#005ca9"], // blue
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -100,
    },
    labels: {
      y: 16,
    },
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true,
      },
    },
  },
};

$.ajax({
  url: "http://sufin.caixa/api-sufin/conquiste/resultado-atual/9990/101",
  type: "GET",
  cache: true,
  data: {},
  beforeSend: function (xhr) {
    $("#spinner-conquiste-adquirencia-faturamento-vired").show();
  },
  success: function (data) {
    $("#conquiste-adquirencia-faturamento-realizado-vired")
      .empty()
      .html(
        parseFloat(data[0].VR_REALIZADO_ACUMULADO / 1000000).toFixed(2) + " MI"
      );
    $("#conquiste-adquirencia-faturamento-objetivo-vired")
      .empty()
      .html(
        parseFloat(data[0].VR_OBJETIVO_ACUMULADO / 1000000).toFixed(2) + " MI"
      );
    var chartSpeed = Highcharts.chart(
      "conquiste-adquirencia-faturamento-vired",
      Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: "Faturamento Credenciamento",
          },
        },

        credits: {
          enabled: false,
        },

        series: [
          {
            name: "Realizado",
            data: [data[0].PC_ATINGIDO],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}%</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">Realizado</span>' +
                "</div>",
            },
            tooltip: {
              valueSuffix: "% (proporcional ao objetivo do mês)",
            },
          },
        ],
      })
    );
  },
  complete: function () {
    $("#spinner-conquiste-adquirencia-faturamento-vired").hide();
  },
});

$.ajax({
  url: "http://sufin.caixa/api-sufin/conquiste/resultado-atual/9990/616",
  type: "GET",
  cache: true,
  data: {},
  beforeSend: function (xhr) {
    $("#spinner-conquiste-prepagos-cacr-vired").show();
  },
  success: function (data) {
    $("#conquiste-prepagos-cacr-realizado-vired")
      .empty()
      .html(data[0].VR_REALIZADO_ACUMULADO / 1000 + " Mil");
    $("#conquiste-prepagos-cacr-objetivo-vired")
      .empty()
      .html(data[0].VR_OBJETIVO_ACUMULADO / 1000 + " Mil");

    var chartRpm = Highcharts.chart(
      "conquiste-prepagos-cacr-vired",
      Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: "Cartões CACR",
          },
        },

        series: [
          {
            name: "Realizado",
            data: [data[0].PC_ATINGIDO],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y:.1f}%</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">' +
                "Realizado" +
                "</span>" +
                "</div>",
            },
            tooltip: {
              valueSuffix: "% (proporcional ao objetivo do mês)",
            },
          },
        ],
      })
    );
  },
  complete: function () {
    $("#spinner-conquiste-prepagos-cacr-vired").hide();
  },
});

/*************** VINAT *******************
 * ***************************************
 */
$.ajax({
  url: "http://sufin.caixa/api-sufin/conquiste/resultado-atual/5822/101",
  type: "GET",
  cache: true,
  data: {},
  beforeSend: function (xhr) {
    $("#spinner-conquiste-adquirencia-faturamento-vinat").show();
  },
  success: function (data) {
    $("#conquiste-adquirencia-faturamento-realizado-vinat")
      .empty()
      .html(
        parseFloat(data[0].VR_REALIZADO_ACUMULADO / 1000000).toFixed(2) + " MI"
      );
    $("#conquiste-adquirencia-faturamento-objetivo-vinat")
      .empty()
      .html(
        parseFloat(data[0].VR_OBJETIVO_ACUMULADO / 1000000).toFixed(2) + " MI"
      );

    var chartSpeed = Highcharts.chart(
      "conquiste-adquirencia-faturamento-vinat",
      Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: "Faturamento Credenciamento",
          },
        },

        credits: {
          enabled: false,
        },

        series: [
          {
            name: "Realizado",
            data: [data[0].PC_ATINGIDO],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}%</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">Realizado</span>' +
                "</div>",
            },
            tooltip: {
              valueSuffix: "% (proporcional ao objetivo do mês)",
            },
          },
        ],
      })
    );
  },
  complete: function () {
    $("#spinner-conquiste-adquirencia-faturamento-vinat").hide();
  },
});

$.ajax({
  url: "http://sufin.caixa/api-sufin/conquiste/resultado-atual/5822/616",
  type: "GET",
  cache: true,
  data: {},
  beforeSend: function (xhr) {
    $("#spinner-conquiste-prepagos-cacr-vinat").show();
  },
  success: function (data) {
    $("#conquiste-prepagos-cacr-realizado-vinat")
      .empty()
      .html(data[0].VR_REALIZADO_ACUMULADO / 1000 + " Mil");
    $("#conquiste-prepagos-cacr-objetivo-vinat")
      .empty()
      .html(data[0].VR_OBJETIVO_ACUMULADO / 1000 + " Mil");

    var chartRpm = Highcharts.chart(
      "conquiste-prepagos-cartoes-vinat",
      Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: "Cartões CACR",
          },
        },

        series: [
          {
            name: "Realizado",
            data: [45.46],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y:.1f}%</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">' +
                "Realizado" +
                "</span>" +
                "</div>",
            },
            tooltip: {
              valueSuffix: "% (proporcional ao objetivo do mês)",
            },
          },
        ],
      })
    );
  },
  complete: function () {
    $("#spinner-conquiste-prepagos-cacr-vinat").hide();
  },
});

// Bring life to the dials
/*setInterval(function () {
  // Speed
  var point, newVal, inc;

  if (chartSpeed) {
    point = chartSpeed.series[0].points[0];
    inc = Math.round((Math.random() - 0.5) * 100);
    newVal = point.y + inc;

    if (newVal < 0 || newVal > 110) {
      newVal = point.y - inc;
    }

    point.update(newVal);
  }

  // RPM
  if (chartRpm) {
    point = chartRpm.series[0].points[0];
    inc = Math.random() - 0.5;
    newVal = point.y + inc;

    if (newVal < 0 || newVal > 5) {
      newVal = point.y - inc;
    }

    point.update(newVal);
  }
}, 2000);*/

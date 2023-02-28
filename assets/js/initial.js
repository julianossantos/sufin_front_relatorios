$(document).ready(function () {
  //adquirencia
  /*$.ajax({
    url: "http://sufin.caixa/app/relatorios/pages/relatorios/adquirencia",
    type: "get",
    cache: false,
    data: {},
    success: function (data) {
      $("#relatorio-adquirencia").html(data);
    },
  });
  //prepagos
  $.ajax({
    url: "http://sufin.caixa/app/relatorios/pages/relatorios/prepagos",
    type: "get",
    cache: false,
    data: {},
    success: function (data) {
      $("#relatorio-prepagos").html(data);
    },
  });*/

  $.ajax({
    url: "http://sufin.caixa/api-dash/dados-empregado/dados-gerais",
    type: "GET",
    cache: true,
    data: {},
    success: function (data) {
      $("#user_photo")
        .empty()
        .html('<i class="mdi mdi-account mdi-36px mdi-dark"></i>');

      if (data.userData.nome) {
        $("#user_name").html(data.userData.nome);
        $("#input_user_name").val(data.userData.nome.toUpperCase());
        $("#user_unit").html(data.userData.noLotacao);
      }
      if (data.userData.photo.length > 0) {
        $("#user_photo")
          .empty()
          .html(
            "<img src='data:image/png;base64, " +
              data.userData.photo +
              "'style='vertical-align: middle;width: 70px;height: 70px;border-radius: 50%;'/>"
          );
      }
    },
  });
});

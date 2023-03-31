function troca_pagina(pagina) {
  $("#others_pages").empty();

  if (pagina == "home") {
    $("#others_pages").hide();
    $("#home").show();
  } else {
    $("#home").hide();
    $("#others_pages").show();
  }

  $.ajax({
    url: "http://sufin.caixa" + pagina,
    type: "POST",
    cache: false,
    data: {},
    success: function (data) {
      $("#others_pages").html(data);
    },
  });
}

function abrir_nova_pagina(pagina) {
  window.open(pagina, "_blank");
}

$(window).on("load", function () {
  $('[data-toggle="popover"]').popover();
  $("#pagina_inicial").css("visibility", "visible");
});

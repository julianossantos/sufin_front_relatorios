$(document).ready(function () {
  $("#btnGerarRelatorioAdquirencia").on("click", function () {
    if ($("#filtroAdquirencia").is(":visible")) {
      $("#btnRelatorioFiltroAdquirencia").click();
    }
  });
});

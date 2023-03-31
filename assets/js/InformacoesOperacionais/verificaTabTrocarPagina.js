$(document).ready(function () {
  $("#informacoes-operacionais-pills").on("click", "li button", function () {
    if (this.value !== "") {
      clearChildHtmlDiv("informacoes-operacionais-tabPillsContent");
      TrocaTabPill("/app/" + this.value, this.id.replace("-tab", ""));
    } else {
      $(this.id.replace("-tab", "")).html(this.id);
    }
  });
});

function clearChildHtmlDiv(mainDivId, divNotClear) {
  $.each($("#" + mainDivId), function (index, item) {
    $.each(item.children, function (index, item) {
      if (item.id !== divNotClear) {
        $(item.id).empty();
      }
    });
  });
}

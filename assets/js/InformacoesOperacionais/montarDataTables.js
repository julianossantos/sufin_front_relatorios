/****
 * o campo de colunas deve ser um array de objetos
 * Ex: [{ data: "ordem" }, { data: "fato_operacional", width: "50px" },{ data: "detalhedoc" }],
 */
function montarTabelaDataTable(idTabela, url, colunas) {
  if ($.fn.DataTable.isDataTable(idTabela)) {
    $("#" + idTabela)
      .DataTable()
      .destroy();
  }

  var table = $("#" + idTabela).DataTable({
    dom: "lrftip",
    destroy: true,
    autoWidth: false,
    paging: true,
    searching: true,
    ordering: true,
    order: [[0, "desc"]],
    info: true,
    processing: true,
    responsive: true,
    retrieve: true,
    scrollX: true,
    language: {
      url: "/app/disponibilidades/js/datatables.pt-br.txt",
    }, //define default inicial do data table
    ajax: url,
    dataType: "json",
    dataSrc: "data",
    columns: colunas,
  });
}

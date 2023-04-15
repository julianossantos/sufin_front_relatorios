/****
 * o campo de colunas deve ser um array de objetos
 * Ex: [{ data: "ordem" }, { data: "fato_operacional", width: "50px" },{ data: "detalhedoc" }],
 */
async function montarTabelaDataTables(idTabela, url, colunas) {
    if ($.fn.DataTable.isDataTable("#" + idTabela)) {
        $("#" + idTabela)
            .DataTable()
            .destroy();
    }

    $("#" + idTabela).DataTable({
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
        },
        ajax: url,
        dataType: "json",
        dataSrc: "data",
        columns: colunas,
    });
}

async function montarDataTables(idTabela, dados, colunas) {
    if ($.fn.DataTable.isDataTable("#" + idTabela)) {
        $("#" + idTabela)
            .DataTable()
            .destroy();
    }

    $("#" + idTabela).DataTable({
        destroy: true, //para destruir a tabela para poder recriar com os dados novos
        responsive: false,
        dom: "Brtip", //Botões da tabela https://datatables.net/examples/basic_init/dom.html
        aaSorting: [1], //Ordenação da tabela
        paging: true, //Paginação
        pagingType: "full_numbers",
        aaData: dados, // dados para gerar a tabela (retorno da API)
        retrieve: true, //recria a tabela
        //scrollY: "50vh", // tamanho da tabela (para scrollar)
        scrollCollapse: false, //Se pode escolar
        scrollX: true,
        aoColumns: colunas,
        deferRender: true,
        language: {
            url: "/app/disponibilidades/js/datatables.pt-br.txt",
        },
    });
}

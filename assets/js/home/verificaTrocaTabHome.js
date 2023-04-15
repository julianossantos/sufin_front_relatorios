function TrocaTabPillHome(pagina, tag_id) {
    $("#" + tag_id).empty();

    $.ajax({
        url: "http://sufin.caixa/" + pagina,
        type: "GET",
        cache: false,
        data: {},
        cache: true,
        beforeSend: function (xhr) {
            $("#" + tag_id).html(
                '<div class="text-center"><div class="spinner-border text-primary"><span class="sr-only"></span></div></div>'
            );
        },
        success: function (data) {
            $("#" + tag_id).html(data);
        },
    });
}

$("#home-operacionais-pills").on("click", "li button", function () {
    console.log(this.value);
    if (this.value !== "") {
        //clearChildHtmlDiv("informacoes-operacionais-tabPillsContent");
        TrocaTabPillHome("/app/" + this.value, this.id.replace("-tab", ""));
    } else {
        $(this.id.replace("-tab", "")).html(this.id);
    }
});

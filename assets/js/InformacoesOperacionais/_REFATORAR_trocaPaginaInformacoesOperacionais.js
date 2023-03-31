/**********************
 * Não deu para fazer funcionar em vanilla com os imports dos outros módulos
 * depois voltar para verificar como funciona
 * Por enquanto o módulo esta desativado e não esta em operação em nenhuma página/script
 **********/

export default class trocarPaginaInformacoesOperacionais {
  constructor(pagina, tag_id) {
    this.pagina = pagina;
    this.tag_id = tag_id;
  }

  TrocaTabPill(pagina, tag_id) {
    $("#" + this.tag_id).empty();

    $.ajax({
      url: "http://sufin.caixa" + this.pagina,
      type: "GET",
      cache: false,
      data: {},
      cache: true,
      beforeSend: function (xhr) {
        $("#" + this.tag_id).html(
          '<div class="text-center"><div class="spinner-border text-primary"><span class="sr-only"></span></div></div>'
        );
      },
      success: function (data) {
        //$("#" + tag_id).empty();
        $("#" + this.tag_id).html(data);
        $("#resp_ldap").val($("#input_user_name").val());
      },
    });
  }
}

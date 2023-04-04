<link href="/app/rel_e_cart/css/font-awesome.min.css" rel="stylesheet" />
<script src="/app/rel_e_cart/js/jquery-2.1.3.min.js"></script>
<link href="/app/rel_e_cart/jquery-ui-1.11.2.custom/jquery-ui.structure.min.css" rel="stylesheet" />
<script src="/app/rel_e_cart/jquery-ui-1.11.2.custom/jquery-ui.min.js""></script>
<script type=" text/javascript"src="/app/rel_e_cart/js/jquery.dataTables.min.js"></script>
<script type="text/javascriptt" src="/app/rel_e_cart/js/jquery.maskMoney.js"></script>
<script src="/app/rel_e_cart/js/jquery.maskedinput.min.js"></script>
<link href="/app/rel_e_cart/css/metrodatatables.css" rel="stylesheet">
<script src="/app/rel_e_cart/sweetalert/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="/app/rel_e_cart/sweetalert/sweetalert.css">
<link rel="stylesheet" href="/app/rel_e_cart/styles/theme.css">
<style>
    [data-pnotify].pnotify.stack-bar-top {
        width: 100%;
        border-radius: 0;
    }
</style>
<div>
    <div class="title">
        <i class="mdi mdi-file-multiple"></i>&nbsp;Informações Operacionais
    </div>
    <div class="subtitle">
        <i class="mdi mdi-chevron-right"></i> Balancetes, Contas a pagar e a receber, Disponibilidades, Paticipações Societárias e Tributos
    </div>
    <hr />
    <ul class="nav nav-pills" id="informacoes-operacionais-pills">
        <li class="nav-item">
            <button class="nav-link active" id="contas-a-pagar-tab" data-bs-toggle="pill" data-bs-target="#contas-a-pagar" type="button" role="tab" aria-controls="contas-a-pagar-tab" aria-selected="true" value="contaspg/index2.php"><i class="mdi mdi-credit-card"></i> Contas a Pagas</button>
        </li>
        <li class="nav-item">
            <button class="nav-link" id="contas-a-receber-tab" data-bs-toggle="pill" data-bs-target="#contas-a-receber" type="button" role="tab" aria-controls="contas-a-receber-tab" aria-selected="false" value="vlrs_rec/index2.php"><i class="mdi mdi-cards-outline"></i> Contas a Receber</button>
        </li>
        <li class="nav-item">
            <button class="nav-link" id="disponibilidades-tab" data-bs-toggle="pill" data-bs-target="#disponibilidades" type="button" role="tab" aria-controls="disponibilidade-tab" aria-selected="false" value="disponibilidades/index2.php"><i class="mdi mdi-trophy-outline"></i> Disponibilidades</button>
        </li>
        <li class="nav-item">
            <button class="nav-link" id="fatos-operacionais-tab" data-bs-toggle="pill" data-bs-target="#fatos-operacionais" type="button" role="tab" aria-controls="fatos-operacionais-tab" aria-selected="false"><i class="mdi mdi-trophy-outline"></i> Fatos Operacionais</button>
        </li>
        <li class="nav-item">
            <button class="nav-link" id="paticipacoes-societarias-tab" data-bs-toggle="pill" data-bs-target="#paticipacoes-societarias" type="button" role="tab" aria-controls="paticipacoes-societarias-tab" aria-selected="false"><i class="mdi mdi-trophy-outline"></i> Paticicipações</button>
        </li>
        <li class="nav-item">
            <button class="nav-link" id="outros-tributos-tab" data-bs-toggle="pill" data-bs-target="#outros-tributos" type="button" role="tab" aria-controls="outros-tributos-tab" aria-selected="false"><i class="mdi mdi-trophy-outline"></i> Outros Tributos</button>
        </li>
    </ul>
    <div class="tab-content" id="informacoes-operacionais-tabPillsContent">
        <div class="tab-pane fade show active" id="contas-a-pagar" role="tabpanel" aria-labelledby="contas-a-pagar-tab" tabindex="0"></div>
        <div class="tab-pane" id="contas-a-receber" role="tabpanel" aria-labelledby="contas-a-receber-tab" tabindex="0">Contas a receber</div>
        <div class="tab-pane" id="disponibilidades" role="tabpanel" aria-labelledby="disponibilidades-tab" tabindex="0">Disponilidades</div>
        <div class="tab-pane" id="fatos-operacionais" role="tabpanel" aria-labelledby="fatos-operacionais-tab" tabindex="0">Fatos Operacionais</div>
        <div class="tab-pane" id="paticipacoes-societarias" role="tabpanel" aria-labelledby="paticipacoes-societarias-tab" tabindex="0">Participações Societárias</div>
        <div class="tab-pane" id="outros-tributos" role="tabpanel" aria-labelledby="outros-tributos-tab" tabindex="0">Outros Tributos</div>
    </div>
</div>
<script type="text/javascript">
    function TrocaTabPill(pagina, tag_id) {
        $("#" + tag_id).empty();

        $.ajax({
            url: "http://sufin.caixa" + pagina,
            type: "GET",
            cache: false,
            data: {},
            cache: true,
            beforeSend: function(xhr) {
                $("#" + tag_id).html(
                    '<div class="text-center"><div class="spinner-border text-primary"><span class="sr-only"></span></div></div>'
                );
            },
            success: function(data) {
                //$("#" + tag_id).empty();
                $("#" + tag_id).html(data);
                $("#resp_ldap").val($("#input_user_name").val());
            },
        });
    }
</script>

<script language="Javascript1.9" src="/app/relatorios/assets/js/geral/fetch.js"></script>
<script language="Javascript1.9" src="/app/relatorios/assets/js/geral/formataCampos.js"></script>
<script language="Javascript1.9" src="/app/relatorios/assets/js/geral/trabalhaDomElementsHtml.js"></script>
<script language="Javascript1.9" src="/app/relatorios/assets/js/InformacoesOperacionais/verificaTabTrocarPagina.js"></script>
<script language="Javascript1.9" src="/app/relatorios/assets/js/InformacoesOperacionais/montarDataTables.js"></script>
<script language="Javascript1.9" src="/app/relatorios/assets/js/InformacoesOperacionais/formataVisualizacaoCampoFormulario.js"></script>
<script language="Javascript1.9" src="/app/relatorios/assets/js/InformacoesOperacionais/servico.js"></script>
<script src="/app/relatorios/assets/js/InformacoesOperacionais/ContasAPagar/contasAPagar.js"></script>
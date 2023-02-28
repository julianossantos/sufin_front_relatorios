<!DOCTYPE html>

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>SUFIN - Relatórios Gerenciais</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="/app/template/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="/app/template/vendors/css/vendor.bundle.base.css">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <link rel="stylesheet" href="/app/assets/js/dataTables/dataTables.min.css">
    <link rel="stylesheet" href="/app/assets/js/dataTables/fixedColumns.dataTables.min.css">

    <link rel="stylesheet" href="/app/template/vendors/select2/select2.min.css">
    <link rel="stylesheet" href="/app/template/vendors/select2-bootstrap-theme/select2-bootstrap.min.css">
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <link rel="stylesheet" href="/app/template/css/vertical-layout-light/style.css">
    <link rel="stylesheet" href="/app/relatorios/assets/css/styles.css">
    <link rel="stylesheet" href="/app/assets/css/pnotify/PNotify.min.css" />

    <link rel="stylesheet" href="/app/assets/css/pnotify/PNotifyBootstrap4.min.css" />
    <link rel="stylesheet" href="/app/assets/css/pnotify/PNotifyMobile.min.css" />
    <link rel="stylesheet" href="/app/assets/css/pnotify/PNotifyDesktop.min.css" />
    <link rel="stylesheet" href="/app/assets/css/pnotify/PNotifyConfirm.min.css" />
    <link rel="stylesheet" href="/app/assets/css/pnotify/PNotifyCountdown.min.css" />
    <link rel="stylesheet" href="/app/assets/css/pnotify/PNotifyReference.min.css" />

    <link rel="stylesheet" href="/app/assets/css/bootstrap/bootstrap.min.css">
    <!-- endinject -->
    <link rel="shortcut icon" href="/app/assets/img/favicon.ico" />

</head>

<body class="sidebar-icon-only">
    <div class="container-scroller" id="pagina_inicial" style="visibility: hidden;">
        <!-- partial:partials/_navbar.html -->
        <div include-html="/app/relatorios/pages/main/navbar.html"></div>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <div include-html="/app/relatorios/pages/main/sidebar.html"></div>
            <!-- partial -->
            <div class="main-panel" style="margin-left:5%;margin-right: 1%;">
                <div class="wrapper" style="margin-right: 1vh;">
                    <div id="home">
                        <ul class="nav nav-pills">
                            <li class="nav-item">
                                <button class="nav-link active" id="relatorio-adquirencia-tab" data-bs-toggle="pill" data-bs-target="#relatorio-adquirencia" type="button" role="tab" aria-controls="relatorio-adquirencia" aria-selected="true">Azulzinha</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pré-Pagos</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="relatorio-adquirencia" role="tabpanel" aria-labelledby="relatorio-adquirencia-tab" tabindex="0">
                                <!--div include-html="/app/relatorios/pages/relatorios/adquirencia"></!--div-->
                            </div>
                            <div class="tab-pane fade" id="relatorio-prepagos" role="tabpanel" aria-labelledby="relatorio-prepagos-tab" tabindex="0">
                                <!--div include-html="/app/relatorios/pages/relatorios/prepagos"></!div-->
                            </div>
                        </div>
                    </div>
                    <div id="others_pages"></div>
                    <div id="div_loader"></div>
                </div>
                <footer class="footer">
                    <hr class="text-muted" />
                    <div class="d-sm-flex justify-content-sm-between">
                        <div class="row">
                            <div class="col-lg-8">
                                <span class="float d-block mt-1 mt-sm-0"><img style="width: 12%;" src="/app/assets/img/logos_cch/caixa_cartoes_vol_horizontal_positiva.png" alt="Azulzinha" /></span>
                                <span class="text-muted" style="margin-top: 2px;font-weight:400;font-size: 14px;">Base Atualizada em: <span id="dt_atualizacao_base"></span></span>
                            </div>
                            <div class="col-lg-4" style="text-align:right;">
                                <span class="float text-muted">Copyright © <?= date('Y') ?>. Todos os direitos reservados.</span>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    </div>
    <!-- partial -->

    <!-- plugins:js -->
    <script src="/app/template/js/jquery-3.6.0.min.js"></script>
    <script src="/app/template/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
    <script src="/app/template/vendors/select2/select2.min.js"></script>
    <script src="/app/template/js/popover.js"></script>
    <script-- src="/app/template/js/popper.min.js"></script-->

    <!--local js-->
    <script src="/app/relatorios/assets/js/initial.js"></script>
    <script src="/app/relatorios/assets/js/includeHTML.js"></script>
    <script src="/app/relatorios/assets/js/common.js"></script>
    <script src="/app/assets/js/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="/app/relatorios/assets/js/includeHTML.js"></script>
    <script src="/app/relatorios/assets/js/adquirencia/relatorios.js"></script>

    <script type="text/javascript">
        includeHTML();
    </script>

    <script type="text/javascript">
        function troca_pagina(pagina) {

            $('#others_pages').empty();

            if (pagina == 'home') {
                $('#others_pages').hide();
                $('#home').show();
                $('#div-select-unidade').hide();
                //select-unidade').show();
            } else if (pagina == '/app/produtos/prepagos/gestao_carteira.php' || pagina == '/app/produtos/prepagos/oportunidades.php' || pagina == '/app/produtos/prepagos/conquiste.php') {
                $('#div-select-unidade').hide();
                $('#home').hide();
                $('#others_pages').show();
            } else {
                $('#home').hide();
                $('#others_pages').show();
                $('#div-select-unidade').show()
            }

            $.ajax({
                url: "http://sufin.caixa" + pagina,
                type: "POST",
                cache: false,
                data: {},
                success: function(data) {
                    $("#others_pages").html(data);
                }
            });
        }
    </script>
</body>

</html>
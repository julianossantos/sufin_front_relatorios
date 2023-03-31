<div>
    <div class="title">
        <i class="mdi mdi-chart-bar "></i>&nbsp;Monitoramento
    </div>
    <div class="subtitle">
        <i class="mdi mdi-chevron-right"></i>Informações sobre as finanças, contabilidade e produtos da Caixa Cartões
    </div>
    <hr />
    <ul class="nav nav-pills">
        <li class="nav-item">
            <button class="nav-link active" id="dash-adquirencia-tab" data-bs-toggle="pill" data-bs-target="#dash-adquirencia" type="button" role="tab" aria-controls="dash-adquirencia" aria-selected="true"><i class="mdi mdi-credit-card"></i> Adquirencia</button>
        </li>
        <li class="nav-item">
            <button class="nav-link" id="dash-prepagos-tab" data-bs-toggle="pill" data-bs-target="#dash-prepagos" type="button" role="tab" aria-controls="dash-prepagos" aria-selected="false"><i class="mdi mdi-cards-outline"></i> Pré-Pagos</button>
        </li>
        <li class="nav-item">
            <button class="nav-link" id="dash-conquiste-tab" data-bs-toggle="pill" data-bs-target="#dash-conquiste" type="button" role="tab" aria-controls="dash-conquiste" aria-selected="false"><i class="mdi mdi-trophy-outline"></i> Conquiste</button>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="dash-adquirencia" role="tabpanel" aria-labelledby="dash-adquirencia-tab" tabindex="0">
            <div class="row">
                <div class="col-4 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title text-center">Faturamento Acumulado 2023</h3>
                            <div id="adquirencia-faturamento-acumulado-ano" class="text-primary h3 text-center"> R$ 3.024 BI</div>
                        </div>
                    </div>
                </div>
                <div class="col-4 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">Credenciamento Acumulado 2023</h5>
                            <div id="adquirencia-credenciamento-acumulado-ano" class="text-primary h3 text-center"> 11.508</div>
                        </div>
                    </div>
                </div>
                <div class="col-4 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">Maquinas Ativadas Acumulado 2023 </h5>
                            <div id="adquirencia-maquinas-ativadas-acumulado-ano" class="text-primary h3 text-center"> 9.327 </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Faturamento Mensal</h5>
                            <div id="adquirencia-faturamento-mensal"></div>
                            <div id="spinner-faturamento-adquirencia" class="text-center">
                                <div class="spinner-border text-primary">
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Credenciamentos Contratados Mensal</h5>
                            <div id="adquirencia-credenciamento-mensal"></div>
                            <div id="spinner-credenciamento-adquirencia" class="text-center">
                                <div class="spinner-border text-primary">
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Máquinas Ativas Mensal</h5>
                            <div id="adquirencia-maquinas-ativas-mensal"></div>
                            <div id="spinner-maquinas-ativas-adquirencia" class="text-center">
                                <div class="spinner-border text-primary">
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="dash-prepagos" role="tabpanel" aria-labelledby="dash-prepagos-tab" tabindex="0">
            <div class="row">
                <div class="col-4 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Faturamento Acumulado 2023</h5>
                            <span id="prepagos-faturamento-acumulado-ano" class="position-absolute text-primary h2 float-end top-0 end-0 m-3"> R$ 537.08 MI</span>
                        </div>
                    </div>
                </div>
                <div class="col-4 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Convênios Acumulado 2023</h5>
                            <span id="prepagos-convenios-acumulado-ano" class="position-absolute text-primary h2 float-end top-0 end-0 m-3"> 9.804</span>
                        </div>
                    </div>
                </div>
                <div class="col-4 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Cartões Acumulado 2023 </h5>
                            <span id="prepagos-cartoes-acumulado-ano" class="position-absolute text-primary h2 float-end top-0 end-0 m-3"> 20.817 </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Faturamento Mensal</h5>
                            <div id="prepagos-cacr-faturamento-mensal"></div>
                            <div id="spinner-faturamento-mensal-cacr-prepagos" class="text-center">
                                <div class="spinner-border text-primary">
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Convênios Contratados Mensal</h5>
                            <div id="prepagos-cacr-convenio-mensal"></div>
                            <div id="spinner-convenio-mensal-cacr-prepagos" class="text-center">
                                <div class="spinner-border text-primary">
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Cartões Emitidos Mensal</h5>
                            <div id="prepagos-cacr-cartao-mensal"></div>
                            <div id="spinner-cartao-mensal-cacr-prepagos" class="text-center">
                                <div class="spinner-border text-primary">
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="dash-conquiste" role="tabpanel" aria-labelledby="dash-consquiste-tab" tabindex="0">
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">VIRED</h5>
                            <div class="row">
                                <div class="col-lg-6 d-flex flex-column grid-margin stretch-card">
                                    <div class="card card-rounded">
                                        <div class="card-body">
                                            <div id="conquiste-adquirencia-faturamento-vired"></div>
                                            <div>
                                                <i class="mdi mdi-information menu-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Faturamento realizado até o momento"> Realizado: <span class="text-info" id="conquiste-adquirencia-faturamento-realizado-vired">0 MI</span></i><br>
                                                <i class="mdi mdi-information menu-icon">Objetivo: <span class="text-info" id="conquiste-adquirencia-faturamento-objetivo-vired"> 0 MI</span></i>
                                            </div>
                                            <div id="spinner-conquiste-adquirencia-faturamento-vired" class="text-center">
                                                <div class="spinner-border text-primary">
                                                    <span class="sr-only"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 d-flex flex-column grid-margin stretch-card">
                                    <div class="card card-rounded">
                                        <div class="card-body">
                                            <div id="conquiste-prepagos-cacr-vired"></div>
                                            <div>
                                                <i class="mdi mdi-information menu-icon"> Realizado: <span class="text-info" id="conquiste-prepagos-cacr-realizado-vired"> 0 Mil</span></i><br>
                                                <i class="mdi mdi-information menu-icon"> Objetivo: <span class="text-info" id="conquiste-prepagos-cacr-objetivo-vired"> 0 Mil</span></i>
                                            </div>
                                            <div id="spinner-conquiste-prepagos-cacr-vired" class="text-center">
                                                <div class="spinner-border text-primary">
                                                    <span class="sr-only"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">VINAT</h5>
                            <div class="row">
                                <div class="col-lg-6 d-flex flex-column grid-margin stretch-card">
                                    <div class="card card-rounded">
                                        <div class="card-body">
                                            <div id="conquiste-adquirencia-faturamento-vinat"></div>
                                            <div>
                                                <i class="mdi mdi-information menu-icon"> Realizado: <span class="text-info" id="conquiste-adquirencia-faturamento-realizado-vinat"> 0 MI</span></i><br>
                                                <i class="mdi mdi-information menu-icon">Objetivo: <span class="text-info" id="conquiste-adquirencia-faturamento-objetivo-vinat"> 0 MI</span></i>
                                            </div>
                                            <div id="spinner-conquiste-adquirencia-faturamento-vinat" class="text-center">
                                                <div class="spinner-border text-primary">
                                                    <span class="sr-only"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 d-flex flex-column grid-margin stretch-card">
                                    <div class="card card-rounded">
                                        <div class="card-body">
                                            <div id="conquiste-prepagos-cartoes-vinat"></div>
                                            <div>
                                                <i class="mdi mdi-information menu-icon" data-bs-toggle="tooltip" data-bs-title="valor realizado acumulado do ciclo"> Realizado: <span class="text-info" id="conquiste-prepagos-cacr-realizado-vinat"> 0 Mil</span></i><br>
                                                <i class="mdi mdi-information menu-icon"> Objetivo: <span class="text-info" id="conquiste-prepagos-cacr-objetivo-vinat"> 0 Mil</span></i>
                                            </div>
                                            <div id="spinner-conquiste-prepagos-cacr-vinat" class="text-center">
                                                <div class="spinner-border text-primary">
                                                    <span class="sr-only"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        includeHTML();
    </script>
    <script src="/app/relatorios/assets/js/home/charts_home_adquirencia.js"></script>
    <script src="/app/relatorios/assets/js/home/charts_home_prepagos.js"></script>
    <script src="/app/relatorios/assets/js/home/charts_home_conquiste.js"></script>
<div>
    <div class="title">
        <i class="mdi mdi-chart-bar "></i>&nbsp;Monitoramento
    </div>
    <div class="subtitle">
        <i class="mdi mdi-chevron-right"></i>Informações sobre as finanças, contabilidade e produtos da Caixa Cartões
    </div>
    <hr />
    <span class="title"><i class="mdi mdi-credit-card"></i> Adquirencia</span>
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Faturamento</h5>
                    <figure class="highcharts-figure">
                        <div id="faturamento_adquirencia_barchart"></div>
                    </figure>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Credenciamentos</h5>
                    <div id="credenciamento_adquirencia_barchart"></div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Máquinas Ativas</h5>
                    <div id="maquinas_ativas_adquirencia_barchart"></div>
                </div>
            </div>
        </div>
    </div>
    <span class="title"><i class="mdi mdi-cards-outline"></i> Pré-pagos</span>
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Faturamento</h5>
                    <div id="faturamento_prepagos_barchart"></div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Convênios Contratados</h5>
                    <div id="convenios_prepagos_barchart"></div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Cartões Emitidos</h5>
                    <div id="cartoes_prepagos_barchart"></div>
                </div>
            </div>
        </div>
    </div>
    <span class="title"><i class="mdi mdi-trophy-outline"></i> Conquiste</span>
    <div class="row">
        <div class="col-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Faturamento Credenciamento</h5>
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column grid-margin stretch-card">
                            <div class="card card-rounded">
                                <div class="card-body">
                                    <h4 class="card-title card-title-dash text-center"><span class="text-info"><span id="adquirencia-conquiste-faturamento-objetivo-vired"></span></span> VIRED</h4>
                                    <div>
                                        <div id="workingFormats" class="progressbar-js-circle rounded p-3 cirle-bar-height-hr"><svg viewBox="0 0 100 100" style="stroke-linecap: round;">
                                                <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke="#eee" stroke-width="8" fill-opacity="0"></path>
                                                <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke="rgb(32,59,179)" stroke-width="10" fill-opacity="0" id="prepagos-conquiste-donut-cartoes-creditados"></path>
                                            </svg>
                                            <div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(0, 0, 0); font-size: 1.875rem; font-weight: bold;">
                                                <h6 class="text-center">Realizado <span class="text-info" id="prepagos-conquiste-pc-item">106%</span></h6>
                                                <span id="prepagos-conquiste-vr-realizado">2.306.874.145,08</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <i class="mdi mdi-information menu-icon"> Percentual com relação ao esperado (<span class="text-info" id="prepagos-conquiste-vr-esperado">2.305.292.377</span>)</i>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex flex-column grid-margin stretch-card">
                            <div class="card card-rounded">
                                <div class="card-body">
                                    <h4 class="card-title card-title-dash text-center"><span class="text-info"><span id="adquirencia-conquiste-faturamento-objetivo-vinat"></span></span> VINAT</h4>
                                    <div>
                                        <div id="workingFormats" class="progressbar-js-circle rounded p-3 cirle-bar-height-hr"><svg viewBox="0 0 100 100" style="stroke-linecap: round;">
                                                <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke="#eee" stroke-width="8" fill-opacity="0"></path>
                                                <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke="rgb(32,59,179)" stroke-width="10" fill-opacity="0" id="prepagos-conquiste-donut-cartoes-creditados" style="stroke-dasharray: 420.783px, 282.783px; stroke-dashoffset: 297.948px;"></path>
                                            </svg>
                                            <div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(0, 0, 0); font-size: 1.875rem; font-weight: bold;">
                                                <h6 class="text-center">Realizado <span class="text-info" id="prepagos-conquiste-pc-item">48,89%</span></h6>
                                                <span class="" id="prepagos-conquiste-vr-realizado">8.185.222,42</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <i class="mdi mdi-information menu-icon"> Percentual com relação ao esperado (<span class="text-info" id="prepagos-conquiste-vr-esperado">17.922.882</span>)</i>
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
                    <h5 class="card-title">Cartões Pré-Pagos CA/CR</h5>
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column grid-margin stretch-card">
                            <div class="card card-rounded">
                                <div class="card-body">
                                    <h4 class="card-title card-title-dash text-center"><span class="text-info"><span id="adquirencia-conquiste-faturamento-objetivo-vired"></span></span> VIRED</h4>
                                    <div>
                                        <div id="workingFormats" class="progressbar-js-circle rounded p-3 cirle-bar-height-hr"><svg viewBox="0 0 100 100" style="stroke-linecap: round;">
                                                <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke="#eee" stroke-width="8" fill-opacity="0"></path>
                                                <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke="rgb(32,59,179)" stroke-width="10" fill-opacity="0" id="prepagos-conquiste-donut-cartoes-creditados" style="stroke-dasharray: 480.783px, 282.783px; stroke-dashoffset: 297.948px;"></path>
                                            </svg>
                                            <div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(0, 0, 0); font-size: 1.875rem; font-weight: bold;">
                                                <h6 class="text-center">Realizado <span class="text-info" id="prepagos-conquiste-pc-item">67,79%</span></h6>
                                                <span id="prepagos-conquiste-vr-realizado">76.451</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <i class="mdi mdi-information menu-icon"> Percentual com relação ao esperado (<span class="text-info" id="prepagos-conquiste-vr-esperado">119.990</span>)</i>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex flex-column grid-margin stretch-card">
                            <div class="card card-rounded">
                                <div class="card-body">
                                    <h4 class="card-title card-title-dash text-center"><span class="text-info"><span id="adquirencia-conquiste-faturamento-objetivo-vinat"></span></span> VINAT</h4>
                                    <div>
                                        <div id="workingFormats" class="progressbar-js-circle rounded p-3 cirle-bar-height-hr"><svg viewBox="0 0 100 100" style="stroke-linecap: round;">
                                                <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke="#eee" stroke-width="8" fill-opacity="0"></path>
                                                <path d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90" stroke="rgb(32,59,179)" stroke-width="10" fill-opacity="0" id="prepagos-conquiste-donut-cartoes-creditados" style="stroke-dasharray: 420.783px, 282.783px; stroke-dashoffset: 297.948px;"></path>
                                            </svg>
                                            <div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: rgb(0, 0, 0); font-size: 1.875rem; font-weight: bold;">
                                                <h6 class="text-center">Realizado <span class="text-info" id="prepagos-conquiste-pc-item">47,09%</span></h6>
                                                <span id="prepagos-conquiste-vr-realizado">16.872</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <i class="mdi mdi-information menu-icon"> Percentual com relação ao esperado (<span class="text-info" id="prepagos-conquiste-vr-esperado">38.382</span>)</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="/app/relatorios/assets/js/home/charts_home_adquirencia.js"></script>
<script src="/app/relatorios/assets/js/home/charts_home_prepagos.js"></script>
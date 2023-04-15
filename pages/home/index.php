<div>
    <div class="title">
        <i class="mdi mdi-chart-bar "></i>&nbsp;Monitoramento
    </div>
    <div class="subtitle">
        <i class="mdi mdi-chevron-right"></i>Informações sobre as finanças, contabilidade e produtos da Caixa Cartões
    </div>
    <hr />
    <ul class="nav nav-pills" id="home-operacionais-pills">
        <li class="nav-item">
            <button class="nav-link active" id="dash-adquirencia-tab" data-bs-toggle="pill" data-bs-target="#dash-adquirencia" type="button" role="tab" aria-controls="dash-adquirencia" aria-selected="true" value="relatorios/pages/home/adquirencia.html"><i class="mdi mdi-credit-card"></i> Adquirencia</button>
        </li>
        <li class="nav-item">
            <button class="nav-link" id="dash-prepagos-tab" data-bs-toggle="pill" data-bs-target="#dash-prepagos" type="button" role="tab" aria-controls="dash-prepagos" aria-selected="false" value="relatorios/pages/home/prepagos.html"><i class="mdi mdi-cards-outline"></i> Pré-Pagos</button>
        </li>
        <li class="nav-item">
            <button class="nav-link" id="dash-conquiste-tab" data-bs-toggle="pill" data-bs-target="#dash-conquiste" type="button" role="tab" aria-controls="dash-conquiste" aria-selected="false" value="relatorios/pages/home/conquiste.html"><i class="mdi mdi-trophy-outline"></i> Conquiste</button>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="dash-adquirencia" role="tabpanel" aria-labelledby="dash-adquirencia-tab" tabindex="0">
            <div include-html="/app/relatorios/pages/home/adquirencia.html"></div>
        </div>
        <div class="tab-pane fade" id="dash-prepagos" role="tabpanel" aria-labelledby="dash-prepagos-tab" tabindex="0">
            <div include-html="/app/relatorios/pages/home/prepagos.html"></div>
        </div>
        <div class="tab-pane fade" id="dash-conquiste" role="tabpanel" aria-labelledby="dash-consquiste-tab" tabindex="0">
            <div include-html="/app/relatorios/pages/home/conquiste.html"></div>
        </div>
    </div>
    <script language="Javascript1.9" src="/app/relatorios/assets/js/home/verificaTrocaTabHome.js"></script>
    <script language="Javascript1.9" src="/app/relatorios/assets/js/home/mountChartsHome.js"></script>
    <script language="Javascript1.9" src="/app/relatorios/assets/js/geral/formataCampos.js"></script>
    <script lang="text/javascript">
        includeHTML();
        TrocaTabPillHome("/app/relatorios/pages/home/adquirencia.html", 'dash-adquirencia');
    </script>
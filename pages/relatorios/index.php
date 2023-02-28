<div>
    <div class="title">
        <i class="mdi mdi-chart-bar "></i>&nbsp;Relatórios de Produtos
    </div>
    <div class="subtitle">
        <i class="mdi mdi-chevron-right"></i>Informações sobre os produtos da Caixa Cartões
    </div>
</div>
<hr />
<div id="relatorios">
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
            <div include-html="/app/relatorios/pages/relatorios/adquirencia/"></div>
        </div>
        <div class="tab-pane fade" id="relatorio-prepagos" role="tabpanel" aria-labelledby="relatorio-prepagos-tab" tabindex="0">
            <div include-html="/app/relatorios/pages/relatorios/prepagos/"></div>
        </div>
    </div>
</div>
<script type="text/javascript">
    includeHTML();
</script>
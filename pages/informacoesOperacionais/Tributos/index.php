<?php
include("/app/outros_tributos/database/conexao.php"); // Incluir conexão 
?>
<div class="filtro">
    <div class="row">
        <div class="form-floating col-3">
            <select class="form-select" id="filtroTipoContaOutrosTributos">
                <option value="">Todas</option>
                <option value="PS">Participações Societárias</option>
                <option value="TR">Receitas Financeiras</option>
            </select>
            <label class="fw-bold text-center">Escolha a Conta</label>
        </div>
        <div class="form-floating col-2">
            <button type="button" class="btn btn-outline-orange btnCadastro" data-bs-toggle="modal" data-bs-target="#myModalOutrosTributos" id='btnCadastroTributos'> <i class="fa fa-plus"></i> Cadastrar</button>
        </div>
    </div>
</div>
<table st-table="rowCollection" class="table table-striped mt-3" id="tableOutrosTributos">
    <thead>
        <tr>
            <th>Ordem</th>
            <th>Fato operacional</th>
            <th>Detalhe</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Ações</th>
        </tr>
    </thead>
</table>
<!-- Modal -->
<div class="modal fade" id="myModalOutrosTributos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="titleModalFatos">
                    Cadastramento
                </h4>
                <button type="button" class="btn-close btn-fechar" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="formOutrosTributos" name="fdocs" method="post" action="" enctype="multipart/form-data">
                    <div class="d-flex justify-content-center">
                        <div class="form-floating col-6">
                            <select title="Selecione o Tipo de Documento" id="tipoContaOutrosTributos" name="tipoconta" class="form-select" required>
                                <option value="">Selecione</option>
                                <option value="TR">Tributos</option>
                            </select>
                            <label class="fw-bolder">Conta Movimentada</label>
                        </div>
                    </div>
                    <div class="text-center mt-2 imgDocumentoOutrosTributos" id="imgDocOutrosTributos">
                        <img src="/app/disponibilidades/images/iconedoc.png" style="width: 200px; height:200px; " />
                    </div>
                    <div id="divFormOutrosTributos" class="mt-3">
                        <div class="row mt-2">
                            <div>
                                <input type="hidden" class="form-control" id="eventoOutrosTributos" name="evento" value="2024">
                                <input type="hidden" class="form-control" id="ordemOutrosTributos" name="ordem">
                                <input type="hidden" class="form-control numerodoc" id="numeroDocOutrosTributos" name="numerodoc">
                                <input type="hidden" class="form-control datacad" id="dataCadOutrosTributos" name="datacad">
                                <input type="hidden" class="form-control dataalt" id="dataAltOutrosTributos" name="dataalt">
                                <input type="hidden" class="form-control dtnasajon" id="dtNasajonOutrosTributos" name="dtnasajon">
                            </div>
                            <div class="col-md-8">
                                <div class="form-floating col-12">

                                    <select title="Selecione a situação do documento" class="form-select" id="selectTributos" name="fato_operacional">
                                        <option>Selecione</option>
                                    </select>
                                    <label class="fw-bold">Tributos</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-floating mb-12">
                                    <input title="Nome do responsável do documento" class="form-control responsavelOutrosTributos" id="responsalvelOutrosTributos" name='responsaveldoc' maxlength="50" type="text" placeholder="text">
                                    <label class="fw-bold">Responsavel</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <!--detalhedoc-->
                            <div class="col-md-12 col-xs-12">
                                <label class="fw-bold">Histórico</label>
                                <textarea title="Resumo do Documento" style="resize: none;height:150px;" class="form-control" id="descricaoOutrosTributos" name="detalhedoc" maxlength="400" rows="3"></textarea>
                                Caracteres Restantes:
                                <span class="contagem">400</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-floating mb-12">
                                    <input title="" placeholder="Digite o valor a pago pelo serviço" class="form-control" id="valorPagoOutrosTributos" name="valorpago">
                                    <label class="fw-bold">Valor</label>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-floating mb-12">
                                    <select title="Selecione tipo do lançamento" class="form-select" id="tipoDeLancamentoOutrosTributos" name="tipodelancamento">
                                        <option value="1">Normal</option>
                                        <option value="2">Estorno</option>
                                    </select>
                                    <label class="fw-bold">SL</label>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-floating mb-12">
                                    <input title="Data em que o voto foi recepcionado" type="text" class="form-control" id="dataPagamentoOutrosTributos" name="dtpgto" placeholder="text" required>
                                    <label class="fw-bold">Data</label>
                                </div>
                            </div>
                            <!--destinodoc-->
                            <div class="col-md-4">
                                <div class="form-floating mb-12">
                                    <input title="Centro de Custo ou Unidade responsável pela informação" type="text" class="form-control" id="unidadeDestinoOutrosTributos" name="destinodoc" placeholder="text" required>
                                    <label class="fw-bold">Unidade</label>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-center">
                            <button title="Excluir Documento" name="excluir" id="btnExcluirOutrosTributos" type="submit" class="btn btn-outline-danger m-2 btnExcluirOutrosTributos"><i class="mdi mdi-delete-forever"></i> Excluir</button>
                            <button title="Cadastra Documento" name="cadastrar" id="btnCadastrarOutrosTributos" type="submit" class="btn btn-outline-primary m-2 btnCadastrarOutrosTributos"><i class="fa fa-check"></i> Cadastrar</button>
                            <button title="Atualizar Documento" name="alterar" id="btnAlterarOutrosTributos" type="submit" class="btn btn-outline-primary m-2 btnAlterarOutrosTributos"><i class="fa fa-check"></i> Salvar Alterações</button>
                        </div>
                    </div>
                </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary btnCloseModalOutrosTributos" id="btnCloseModalOutrosTributos" data-bs-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<script src="/app/relatorios/assets/js/InformacoesOperacionais/Tributos/OutrosTributos.js"></script>
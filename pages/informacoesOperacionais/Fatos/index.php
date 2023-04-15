<div class="filtro">
    <div class="row">
        <div class="form-floating col-3">
            <select class="selectp form-select filtroTipoConta" id="filtroTipoConta">
                <option value="">Escolha a Conta</option>
                <option value="BB">Conta Banco do Brasil</option>
                <option value="CB">Custo Balcão</option>
                <option value="CM">Convênio de Compartilhamento</option>
                <option value="CP">Conta Principal</option>
                <option value="CT">Contratações de Terceiros</option>
                <option value="FI">Fundo de Investimentos</option>
                <option value="PA">Conta PAT</option>
                <option value="PP">Conta Pronto Pagamento</option>
                <option value="PS">Participações Societárias</option>
                <option value="RF">Receitas Financeiras</option>
                <option value="SE">Receitas de Serviços</option>
                <option value="TB">Tributos - contas a pagar</option>
                <option value="TR">Tributos - outros</option>
            </select>
            <label class="fw-bold text-center">Escolha a Conta</label>
        </div>
        <div class="form-floating col-2">
            <button href="" type="button" class="btn btn-outline-orange btnCadastro" data-bs-toggle="modal" data-bs-target="#myModalFatos" id='btnCadastroInformacoesOperacionais' title="Item de Menu"> <i class="fa fa-plus"></i> Cadastrar</button>
        </div>
    </div>
    <br />
</div>
<table st-table="rowCollection" class="table table-striped" id="tableFatoOperacionais">
    <thead>
        <tr>
            <th>Ordem</th>
            <th>Tipo</th>
            <th>Fato operacional</th>
            <th>Evento</th>
            <th>Débito</th>
            <th>Crédito</th>
            <th>Contas a pagar</th>
            <th>Ações</th>
        </tr>
    </thead>
</table>
<!-- Modal -->
<div class="modal fade" id="myModalFatos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="titleModalFatos">
                    Cadastramento
                </h4>
                <button type="button" class="btn-close btn-fechar" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="formFatosOperacionais" name="fdocs" method="post" action="" enctype="multipart/form-data">
                    <div class="d-flex justify-content-center">
                        <div class="form-floating col-6">
                            <select title="Selecione o Tipo de Documento" id="tipoconta" name="tipoconta" class="form-select tipoConta" required>
                                <option value="">Selecione</option>
                                <option value="BB">Conta Banco do Brasil</option>
                                <option value="CB">Custo Balcão</option>
                                <option value="CM">Convênio de Compartilhamento</option>
                                <option value="CP">Conta Principal</option>
                                <option value="CT">Contratações de Terceiros</option>
                                <option value="FI">Fundo de Investimentos</option>
                                <option value="PA">Conta PAT</option>
                                <option value="PP">Conta Pronto Pagamento</option>
                                <option value="PS">Participações Societárias</option>
                                <option value="RF">Receitas Financeiras</option>
                                <option value="SE">Receitas de Serviços</option>
                                <option value="TB">Tributos - contas a pagar</option>
                                <option value="TR">Tributos - outros</option>
                            </select>
                            <label class="fw-bold text-center">Conta Movimentada</label>
                        </div>
                        <input id="tpdocalt" type="hidden" name="tpdocalt" class="form-control">
                    </div>
                    <div class="text-center mt-2 imgDocumentoFatos" id="imgDocFatos">
                        <img src="/app/disponibilidades/images/iconedoc.png" style="width: 300px; height:300px; " />
                    </div>
                    <div id="divFormFatos" class="mt-3">
                        <div class="row">
                            <div>
                                <input type="hidden" class="form-control ordem" id="ordem">
                            </div>
                            <div class="col-md-12">
                                <div class="form-floating mb-3">
                                    <input title="Escolha do Fato Operacional" type="text" class="form-control" id="descricao_fato_operacional" name="fato_operacional" maxlength="300" placeholder="text" value=" required">
                                    <label class="fw-bold">Fato Operacional</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <!--ambtest-->
                            <div class="col-md-2 ">
                                <div class="form-floating mb-3">
                                    <input title="Escolha o Ambiente de execução do teste" placeholder="Digite o valor a pagar pelo serviço" maxlength="4" minlength="4" class="form-control" id="evento_fato" name="evento" required>
                                    <label class="fw-bold">Evento</label>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-floating mb-3">
                                    <input title="Conta Débito" class="form-control" id="conta_debito_fato" maxlength="18" minlength="18" name="conta_debito" placeholder="text" required>
                                    <label class="fw-bold">Debito</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-floating mb-3">
                                    <input title="Conta Crédito" class="form-control contaCreditoFato" id="conta_credito_fato" maxlength="18" minlength="18" name="conta_credito" placeholder="text" required>
                                    <label class="fw-bold">Credito</label>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-floating mb-3">
                                    <input title="Data em que o voto foi recepcionado" class="form-control" id="fluxo_de_caixa_fato" name="DFLUX" placeholder="Text">
                                    <label class="fw-bold">Fluxo de caixa</label>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-floating mb-3">
                                    <input title="Data em que o voto foi recepcionado" type="text" class="form-control" id="codigo_item_fato" name="coditem" placeholder="text" value="0" required>
                                    <label class="fw-bold">Codigo Item</label>
                                </div>
                            </div>
                            <div class="col-md-2" id="div_ctpg">
                                <div class="form-floating col-12">
                                    <select title="Data em que o voto foi recepcionado" type="text" class="form-select" id="contas_a_pagar_fato" name="contaspagar" placeholder="">
                                        <option value="">Não se aplica</option>
                                        <option value="Entrada">Entrada</option>
                                        <option value="Baixa">Baixa</option>
                                    </select>
                                    <label>Contas a pagar</label>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-center">
                            <button title="Excluir Documento" name="excluir" id="btnExcluirFato" type="submit" class="btn btn-outline-danger m-2 btnExcluirFato"><i class="mdi mdi-delete-forever"></i> Excluir</button>
                            <button title="Cadastra Documento" name="cadastrar" id="btnCadastrarFato" type="submit" class="btn btn-outline-primary m-2 btnCadastrarFato"><i class="fa fa-check"></i> Cadastrar</button>
                            <button title="Atualizar Documento" name="alterar" id="btnAlterarFato" type="submit" class="btn btn-outline-primary m-2 btnAlterarFato"><i class="fa fa-check"></i> Salvar Alterações</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="btnCloseModalFatos" data-bs-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<script src="/app/relatorios/assets/js/InformacoesOperacionais/Fatos/fatosOperacionais.js"></script>
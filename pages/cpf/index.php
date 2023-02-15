<?php include("../inc/client.php");
cabecalho(); ?>
<div class="container">
    <div class="card-txt">
        <div class="card-body">
            <p class="txt-instru">Seja muito <b>bem vindo!</b></p>
        </div>
        <div class="card-body">
            <p class="txt-instru">Para iniciar a criação da sua conta, insira seu <b>CPF</b> abaixo.</p>
        </div>
    </div>
    <div class="campo-cad">
        <input type="text" class="cad-2" data-mask="000.000.000-00" name="cpf" id="cpf" placeholder="Digite seu CPF" aria-label="Recipiente para nickname" aria-describedby="basic-addon2">
    </div>
    <button class="btn-avancar">Avançar</button>
</div>
<?php footer(); ?>
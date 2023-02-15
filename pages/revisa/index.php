<?php include("../inc/client.php");
cabecalho(); ?>
<div class="container">
    <div class="card-txt2">
        <div class="card-body">
            <p class="txt-instru"><b>Fulano</b>, vamos revisar as informações enviadas.</p>
        </div>
    </div>
    <div class="card-revisa">
        <div class="card-body">
            <img src="../../assets/images/selfie.png" class="ft-cad" alt="">
        </div>
    </div>

    <div class="">
        <form>
            <div class="info-pac">
                <h6 class="cad">Nome completo</h6>
                <input type="text" placeholder="Fulano de Tal" required>
                <span class="bar"></span>
            </div>
            <div class="info-pac">
                <h6 class="cad">CPF</h6>
                <input type="text" placeholder="000.000.000-01" required>
                <span class="bar"></span>
            </div>
            <div class="info-pac">
                <h6 class="cad">Nascimento</h6>
                <input type="text" placeholder="02/05/1990" required>
                <span class="bar"></span>
            </div>
            <div class="info-pac">
                <h6 class="cad">Email</h6>
                <input type="text" placeholder="Fulano@dominio.com" required>
                <span class="bar"></span>
            </div>
            <div class="info-pac">
                <h6 class="cad">Telefone</h6>
                <input type="text" placeholder="(11)95954-5500" required>
                <span class="bar"></span>
            </div>
        </form>
    </div>
    <button class="btn-avancar">Isso aí, tudo certo!</button>
</div>
<?php footer(); ?>
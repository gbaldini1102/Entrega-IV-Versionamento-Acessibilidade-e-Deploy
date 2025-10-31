export function Cadastro() {
  return `
    <body>
    <main>
        <section aria-labelledby="formulario-cadastro">
            <h2 id="formulario-cadastro">Formulário de Cadastro</h2>
            <form action="#" method="post">
                <fieldset>
                    <legend>Informações Pessoais</legend>

                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required minlength="3" maxlength="100" placeholder="Seu nome completo">

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required placeholder="exemplo@email.com">

                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" data-mask="000.000.000-00" placeholder="000.000.000-00">

                    <label for="telefone">Telefone:</label>
                    <input type="text" id="telefone" name="telefone" required data-mask="(00) 00000-0000" placeholder="(00) 00000-0000">

                    <label for="nascimento">Data de Nascimento:</label>
                    <input type="date" id="nascimento" name="nascimento" required>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label for="endereco">Endereço:</label>
                    <input type="text" id="endereco" name="endereco" required placeholder="Rua, número, complemento">

                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" required data-mask="00000-000" placeholder="00000-000">

                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>

                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" maxlength="2" required placeholder="SP">
                </fieldset>

                <fieldset>
                    <legend>Tipo de Cadastro</legend>
                    <label>
                        <input class="radio" type="radio" name="tipo" value="voluntario" required> Voluntário
                    </label>
                    <label>
                        <input class="radio" type="radio" name="tipo" value="doador"> Doador
                    </label>
                </fieldset>

                <button type="submit" class="button button--primary">Enviar Cadastro</button>
                <button type="reset" class="button button--primary">Limpar</button>
            </form>
        </section>
        <img src="assets/img/equipe.webp" alt="Equipe da ONG reunida">
    </main>
    </body>
  `;
}

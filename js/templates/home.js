export function Home() {
  return `
        <section aria-labelledby="sobre">
            <h2 id="sobre">Sobre a Organização</h2>
            <img src="assets/img/ong1.webp" alt="Imagem da ONG em atividade social" width="960" height="640">
            <p>
                A <strong>ONG Esperança Viva</strong> é uma organização sem fins lucrativos dedicada à inclusão social e ao desenvolvimento humano por meio de projetos comunitários, educacionais e ambientais.
            </p>
        </section>

        <section aria-labelledby="missao">
            <h2 id="missao">Missão, Visão e Valores</h2>
            <h3>Missão</h3>
            <p>Promover oportunidades e melhorar a qualidade de vida de pessoas em situação de vulnerabilidade.</p>
            <h3>Visão</h3>
            <p>Ser referência nacional em transformação social sustentável.</p>
            <h3>Valores</h3>
            <ul>
                <li>Solidariedade</li>
                <li>Transparência</li>
                <li>Comprometimento</li>
                <li>Respeito e diversidade</li>
            </ul>
        </section>

        <section aria-labelledby="contato">
            <h2 id="contato">Entre em Contato</h2>
            <address>
                <p><strong>Endereço:</strong> Rua das Flores, 123 - São Paulo/SP</p>
                <p><strong>Telefone:</strong> (11) 98765-4321</p>
                <p><strong>E-mail:</strong> contato@ongesperancaviva.org.br</p>
            </address>
        </section>
  `;
}

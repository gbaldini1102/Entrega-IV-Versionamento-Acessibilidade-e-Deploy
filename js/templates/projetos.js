export function Projetos() {
  return `
    <main>
        <section aria-labelledby="nossos-projetos">
            <h2 id="nossos-projetos">Nossos Projetos</h2>
            <article>
                <section class="card">
                    <h2 class="card__title">Projeto Mãos que Ajudam</h2>
                    <p class="card__text">Voltado à capacitação profissional de jovens e adultos em comunidades de baixa renda.</p>
                </section>
            </article>

            <article>
                <section class="card">
                    <h2 class="card__title">Projeto Verde Esperança</h2>
                    <p class="card__text">Promove o plantio de árvores e a conscientização ambiental em escolas e praças públicas.</p>
                </section>
            </article>

            <article>
                <section class="card">
                    <h2 class="card__title">Projeto Sorrisos</h2>
                    <p class="card__text">Leva atividades recreativas e educacionais para crianças em situação de vulnerabilidade social.</p>
                </section>
            </article>
            <img src="assets/img/voluntariado.jpg" alt="Voluntários trabalhando em projeto comunitário" width="960" height="640">
        </section>

        <section aria-labelledby="doacoes">
            <h2 id="doacoes">Como Doar</h2>

            <p>
                Sua doação faz a diferença! Você pode contribuir com qualquer valor e acompanhar a aplicação dos recursos em nossos relatórios de transparência.
            </p>
            <img src="assets/img/doacao.png" alt="Imagem ilustrando doações" width="480" height="320">
            <section class="card">
                <h2 class="card__title">Projeto Social</h2>
                <p class="card__text">Ajude nossa causa!</p>
                <button class="button button--primary">Doar</button>
            </section>
        </section>  
    </main>
  `;
}

import { Home } from './templates/home.js';
import { Projetos } from './templates/projetos.js';
import { Cadastro } from './templates/cadastro.js';

const content = document.getElementById('content');

const routes = {
  home: Home,
  projetos: Projetos,
  cadastro: Cadastro
};

function navigate() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const template = routes[hash] || Home;
  content.innerHTML = template();
}

// Troca de rota ao mudar o hash
window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

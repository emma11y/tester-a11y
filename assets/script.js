window.onload = () => {
  this.loadComponents();
};

function loadComponents() {
  customElements.define('app-router', AppRouter);
  customElements.define('custom-header', CustomHeader);
  customElements.define('custom-footer', CustomFooter);
}

class CustomHeader extends HTMLElement {}

class CustomFooter extends HTMLElement {}

class AppRouter extends HTMLElement {
  constructor() {
    super();
    window.addEventListener('popstate', () => this.handleRoute());
  }

  async connectedCallback() {
    await this.handleRoute();
  }

  async handleRoute() {
    const path = window.location.pathname;

    let title = '';
    let filename = '';
    switch (path) {
      case '/':
        filename = '/pages/accueil.html';
        title = 'Accueil';
        break;
      default:
        filename = '/pages/erreur.html';
        title = 'Erreur 404';
    }

    this.innerHTML = await getHtmlContent(filename);
    document.title = `${title} - ${titlePage}`;
  }

  async navigate(path) {
    window.history.pushState({}, '', path);
    await this.handleRoute();
  }
}

async function getHtmlContent(htmlFileName) {
  if (isProd) {
    htmlFileName = absolutePath + htmlFileName;
  }

  const responseHTML = await fetch(htmlFileName);
  if (!responseHTML.ok) {
    throw new Error(
      'Erreur lors du chargement du fichier HTML : ' + responseHTML.statusText
    );
  }

  return await responseHTML.text();
}

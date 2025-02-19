const isProd = window.location.hostname.includes('emma11y.github.io');
const titlePage = `Comment tester l'accessibilité d'un site internet ?`;

window.onload = () => {
  this.loadComponents();
};

function loadComponents() {
  customElements.define('app-router', AppRouter);
  customElements.define('router-link', RouterLink);
  customElements.define('custom-header', CustomHeader);
  customElements.define('custom-footer', CustomFooter);
}

class CustomHeader extends HTMLElement {
  async connectedCallback() {
    loadStylesheet('/components/header/header.css');
    this.innerHTML = await getHtmlContent('/components/header/header.html');

    this.initTheme();
    this.setAriaCurrentPage();
  }

  initTheme() {
    const themeStored = localStorage.getItem('theme');

    if (themeStored) {
      this.setTheme(themeStored);
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
    }

    const btnLight = document.getElementById('btnLight');
    if (btnLight) {
      btnLight.onclick = () => this.setTheme('light');
    }

    const btnDark = document.getElementById('btnDark');
    if (btnDark) {
      btnDark.onclick = () => this.setTheme('dark');
    }
  }

  setTheme(theme) {
    var buttons = document.querySelectorAll('.theme-switcher-buttons button');
    buttons.forEach((button) => {
      const dataTheme = button.getAttribute('data-theme');
      if (dataTheme === theme) {
        button.setAttribute('aria-pressed', true);
      } else {
        button.setAttribute('aria-pressed', false);
      }
    });

    document.documentElement.setAttribute('data-selected-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

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
      case '/cas-pratique-1':
        filename = '/pages/cas-pratique-1.html';
        title = 'Cas pratique n°1 : les contrastes';
        break;
      case '/cas-pratique-2':
        filename = '/pages/cas-pratique-2.html';
        title = 'Cas pratique n°2 : la langue';
        break;
      case '/cas-pratique-3':
        filename = '/pages/cas-pratique-3.html';
        title = 'Cas pratique n°3 : les images';
        break;
      case '/cas-pratique-4':
        filename = '/pages/cas-pratique-4.html';
        title = 'Cas pratique n°4 : le formulaire';
        break;
      case '/cas-pratique-5':
        filename = '/pages/cas-pratique-5.html';
        title = 'Cas pratique n°5 : les liens';
        break;
      case '/cas-pratique-6':
        filename = '/pages/cas-pratique-6.html';
        title = 'Cas pratique n°6 : les boutons';
        break;
      case '/ressources':
        filename = '/pages/ressources.html';
        title = 'Ressources';
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

function loadStylesheet(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;

  document.head.appendChild(link);
}

function setAriaCurrentPage() {
  const routerLinks = document.querySelectorAll('router-link');

  routerLinks.forEach((routerLink) => {
    let link = routerLink.querySelector('a');

    if (
      window.location.pathname === routerLink.attributes.href.value ||
      (window.location.pathname === '/' &&
        routerLink.attributes.title.value === 'Accueil')
    ) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');
    } else {
      link.removeAttribute('aria-current');
      link.classList.remove('active');
    }

    link.addEventListener('click', () => {
      this.setAriaCurrentPage();
    });
  });
}

class RouterLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const link = document.createElement('a');
    const href = this.attributes.href.value;

    link.href = href;
    link.text = this.attributes.title.value;
    link.onclick = (event) => {
      event.preventDefault();
      document.querySelector('app-router').navigate(href);
    };

    this.appendChild(link);
  }
}

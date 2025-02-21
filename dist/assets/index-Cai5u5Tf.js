(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const c="/tester-a11y",u="Comment tester l'accessibilité d'un site internet ?";window.onload=()=>{document.querySelector("#app").innerHTML=`
    <main role="main">
      <custom-header></custom-header>

      <div class="content">
        <app-router></app-router>
      </div>

      <custom-footer></custom-footer>
    </main>`,d()};function d(){customElements.define("app-router",f),customElements.define("router-link",g),customElements.define("custom-header",m),customElements.define("custom-footer",h),customElements.define("custom-picture",p)}class m extends HTMLElement{async connectedCallback(){b("components/header/header.css"),this.innerHTML=await o("components/header/header.html"),this.initTheme(),l()}initTheme(){const e=localStorage.getItem("theme");e?this.setTheme(e):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?this.setTheme("dark"):this.setTheme("light");const t=document.getElementById("btnLight");t&&(t.onclick=()=>this.setTheme("light"));const s=document.getElementById("btnDark");s&&(s.onclick=()=>this.setTheme("dark"))}setTheme(e){var t=document.querySelectorAll(".theme-switcher-buttons button");t.forEach(s=>{s.getAttribute("data-theme")===e?s.setAttribute("aria-pressed",!0):s.setAttribute("aria-pressed",!1)}),document.documentElement.setAttribute("data-selected-theme",e),localStorage.setItem("theme",e)}}class h extends HTMLElement{}class p extends HTMLElement{constructor(){super()}connectedCallback(){let e=document.createElement("img");e.alt=this.attributes.alt.value,e.src=`${c}/${this.attributes.src.value}`,e.setAttribute("lazy","loading"),this.attributes.style&&(e.style=this.attributes.style.value),this.attributes.class&&this.attributes.class.value.split(" ").forEach(t=>{e.classList.add(t)}),this.appendChild(e)}}class f extends HTMLElement{constructor(){super(),window.addEventListener("popstate",()=>this.handleRoute())}async connectedCallback(){await this.handleRoute()}async handleRoute(){const e=window.location.pathname.replace("tester-a11y","").replace("//","/");let t="",s="";switch(e){case"/":s="pages/accueil.html",t="Accueil";break;case"/cas-pratique-1":s="pages/cas-pratique-1.html",t="Cas pratique n°1 : les contrastes";break;case"/cas-pratique-2":s="pages/cas-pratique-2.html",t="Cas pratique n°2 : la langue";break;case"/cas-pratique-3":s="pages/cas-pratique-3.html",t="Cas pratique n°3 : les images";break;case"/cas-pratique-4":s="pages/cas-pratique-4.html",t="Cas pratique n°4 : le formulaire";break;case"/cas-pratique-5":s="pages/cas-pratique-5.html",t="Cas pratique n°5 : les liens";break;case"/cas-pratique-6":s="pages/cas-pratique-6.html",t="Cas pratique n°6 : les boutons";break;case"/ci-cd":s="pages/ci-cd.html",t="Tests automatisés";break;case"/bonus":s="pages/bonus.html",t="Bonus";break;case"/ressources":s="pages/ressources.html",t="Ressources";break;case"/a-propos":s="pages/a-propos.html",t="A propos";break;default:s="pages/erreur.html",t="Erreur 404"}this.innerHTML=await o(s),document.title=`${t} - ${u}`}async navigate(e){window.history.pushState({},"",e),await this.handleRoute()}}async function o(i){const e=await fetch(`${c}/${i}`);if(!e.ok)throw new Error("Erreur lors du chargement du fichier HTML : "+e.statusText);return await e.text()}function b(i){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=`${c}/${i}`,document.head.appendChild(e)}function l(){document.querySelectorAll("router-link").forEach(e=>{let t=e.querySelector("a");const s=window.location.pathname.replace("tester-a11y","").replace("//","/");s===e.attributes.href.value||s==="/"&&e.attributes.title.value==="Accueil"?(t.setAttribute("aria-current","page"),t.classList.add("active")):(t.removeAttribute("aria-current"),t.classList.remove("active")),t.addEventListener("click",()=>{l()})})}class g extends HTMLElement{constructor(){super()}connectedCallback(){const e=document.createElement("a"),t=c+this.attributes.href.value;e.href=t,e.text=this.attributes.title.value,e.onclick=s=>{s.preventDefault(),document.querySelector("app-router").navigate(t)},this.appendChild(e)}}

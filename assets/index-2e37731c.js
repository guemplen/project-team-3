var u=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var d=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)};var a=(n,e,t)=>(u(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();var i,l;class m{constructor(){d(this,i);this.tagsList=document.querySelector(".js-tags"),this.activeTag=document.querySelector(".js-tags .active"),this.tagsList.addEventListener("click",this.changeActiveTag.bind(this))}changeActiveTag(e){const{target:t}=e;if(t.nodeName==="BUTTON"){if(this.activeTag===t){a(this,i,l).call(this,t.textContent);return}this.activeTag.classList.remove("active"),t.classList.add("active"),a(this,i,l).call(this,t.textContent),this.activeTag=t}}}i=new WeakSet,l=function(e){navigator.clipboard.writeText(e).then(()=>{alert("Text copied to clipboard")}).catch(t=>{console.error("Error in copying text: ",t)})};new m;(()=>{const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),c=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),n.classList.toggle("is-open");const r=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};e.addEventListener("click",c),t.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(n.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const n={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.forEach(t=>{t.addEventListener("click",e)}),n.closeModalBtn.addEventListener("click",e);function e(){n.modal.classList.toggle("is-hidden")}})();

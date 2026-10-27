
document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener("click",event=>{const destino=document.querySelector(link.getAttribute("href"));if(destino){event.preventDefault();destino.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});}});});});

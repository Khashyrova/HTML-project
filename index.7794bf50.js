!function(){var e,t,n,o;!function(){var e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")},t=!0,n=!1,o=void 0;try{for(var a,i=e.openModalBtn[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){a.value.addEventListener("click",l)}}catch(e){n=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}function l(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.closeModalBtn.addEventListener("click",l)}(),AOS.init({disable:"phone",once:!0}),e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelectorAll(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")},t.addEventListener("click",o),n.forEach((function(e){e.addEventListener("click",o)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}));new Swiper(".mySwiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}();
//# sourceMappingURL=index.7794bf50.js.map

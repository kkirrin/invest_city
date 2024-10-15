import { initNav } from './module/nav.js';
import { initPopup } from './module/popup.js';


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initPopup();

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    })
    wow.init();

});

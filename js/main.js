import { initNav } from './module/nav.js';
import { initPopup } from './module/popup.js';
import { initComfortSlider } from './module/sliders.js';
import { initHorizontalScroll } from './module/horizontalScroll.js';


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initPopup();
    initComfortSlider();
    initHorizontalScroll();

    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    })
    
    wow.init();

});

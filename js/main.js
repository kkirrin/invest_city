import { initNav } from './module/nav.js';
import { initPopup } from './module/popup.js';
import { initComfortSlider } from './module/sliders.js';
import { initHorizontalScroll } from './module/horizontalScroll.js';
import { initCounterAnimation } from './module/counter-animation.js';


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initPopup();
    initComfortSlider();
    initHorizontalScroll();
    initCounterAnimation();

    const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    })
    
    wow.init();

});

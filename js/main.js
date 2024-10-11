import { initNav } from './module/nav.js';
import { initPopup } from './module/popup.js';


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initPopup();

});

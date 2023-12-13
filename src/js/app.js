// import * as flsFunctions from "./modules/functions.js";
// // import * as headerMobile from "./modules/headerMobile.js";
// import { testEvt } from "./modules/headerMobile.js";
// import TestView from "./modules/testView.js";

// flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

// headerMobile.testEvt(event);
// testEvt()
// const click = new TestView();
// click.testEvent();

///**********************======================== */

import OpenMenu from "./openMenu.js";
import OpenPopup from "./openPopup.js";
import { correctMarginMain } from "./modules/functions.js"

if (document.querySelector('.nav') !== null) {
  const nav = document.querySelector('.nav');

  const toggleNav = new OpenMenu(nav, 'nav__button', 'nav--closed', 'nav--opened');
  toggleNav.toggle();
}

if (document.querySelector('.popup') !== null) {
  const popup = document.querySelector('.popup');
  const togglePopup = new OpenPopup(popup, 'popup__close', 'popup__show');
  document.querySelector('.link__popup').addEventListener('click', (evt) => {
    evt.preventDefault();
    togglePopup.setPopup();
    togglePopup.setOverlay();
    togglePopup.setClosePopupTimeOut(3000)
  });
}

correctMarginMain()
/**
 * открываем навигационное меню по клику на "бургер" и закрываем его по клику на крестик или "esc"
 * 
 * @param {string} container - элемент документа, ссылка на который получена методом querySelector
 * @param {string} button - класс элемента, по которому клик для открытия-закрытия меню
 * @param {string} classClose - класс, при котором меню скрыто
 * @param {string} classOpen - класс, при котором меню открыто
 * 
 * инициализируется методом toggle()
 */

export default class OpenMenu {
  constructor(container, button, classClose, classOpen) {
    this.container = container;
    this.button = button;
    this.classButton = '.' + this.button;
    this.selectorButton = this.container.querySelector(this.classButton);
    this.classClose = classClose;
    this.classOpen = classOpen;

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.boxEscKeyHandler = this.boxEscKeyHandler.bind(this);
  }

  toggle() {
    this.selectorButton.addEventListener('click', this.buttonClickHandler);
  }

  openMenu() {
    this.container.classList.remove(this.classClose);
    this.container.classList.add(this.classOpen);
  }

  closeMenu() {
    this.container.classList.remove(this.classOpen);
    this.container.classList.add(this.classClose);
  }

  buttonClickHandler(evt) {
    evt.preventDefault();

    if (this.container.classList.contains(this.classClose)) {
      this.openMenu();
      document.addEventListener(`keydown`, this.boxEscKeyHandler);
    } else {
      this.closeMenu();
    }
  }

  boxEscKeyHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.closeMenu();
      document.removeEventListener(`keydown`, this.boxEscKeyHandler)
    }
  }
}
export class HeaderAccordion {
  constructor() {
    this._menu = document.querySelector('[data-header-accordion]');
    this._breakpointMedia = window.matchMedia('(max-width: 1080px)');

    this._linkClickHandler = this._linkClickHandler.bind(this);
    this._breakpointChecker = this._breakpointChecker.bind(this);
  }

  init() {
    if (!this._menu) {
      return;
    }

    this._breakpointMedia.addEventListener('change', this._breakpointChecker);
    this._breakpointChecker();
  }

  _linkClickHandler(evt) {
    evt.preventDefault();
    const item = evt.target.closest('.menu-item-has-children');

    if (item.classList.contains('is-active')) {
      item.classList.remove('is-active');
    } else {
      item.classList.add('is-active');
    }
  }

  _breakpointChecker() {
    const menuItems = document.querySelectorAll('.menu-item-has-children');

    if (!menuItems.length) {
      return;
    }

    if (this._breakpointMedia.matches) {
      menuItems.forEach((item) => {
        const link = item.querySelector('.main-nav__link');
        link.addEventListener('click', this._linkClickHandler);
      });
    } else {
      menuItems.forEach((item) => {
        const link = item.querySelector('.main-nav__link');
        link.removeEventListener('click', this._linkClickHandler);

        if (item.classList.contains('is-active')) {
          item.classList.remove('is-active');
        }
      });
    }
  }
}
